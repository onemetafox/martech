// import async from 'async';
// import httpStatus from 'http-status';
import ServiceCost from '../models/costByServiceModel';
import MonthlyCost from '../models/monthlyCostModel';
import jwt from 'jwt-simple';
import {timeSetting} from '../config/config';

function getMonthFromString(mon){
  return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
}
const getOnlyDate = (param) =>{

  var today = new Date();
  var dd = String(today. getDate() - param). padStart(2, '0');
  var mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
  var yyyy = today. getFullYear();
  return today = yyyy + '-' + mm + '-' + dd +'T00:00:00.000Z';
}
function getM2dDataByMonth(req, res, next){
    var currentDate = new Date();
    var year =  currentDate.getFullYear();
    var month = req.body.month;

    var date = new Date("1/"+month+"/"+year);
    
    var pipeLine = [{$match:{date:{$gte:date}}}, {
        $group: {
          "_id": "$service",
          "money": {
            "$sum": "$unBlendedCost"
          }
        }
      }, { $project: {  
        _id: 0,
        service: "$_id",
        cost: "$money"
     }}
    ];
    ServiceCost.aggregate(pipeLine).exec( (e, r) => {
        if(e) {
            console.log(e);
        }else{
          var data = jwt.encode(r, timeSetting.secret);
          res.send(data);
        }
      });
}

function getY2mGetData(req, res, next){
    var year =  req.body.year;
    var pipeLine = new Array();

    pipeLine = [
      {$match:{year:{$eq:year}}},
      ];
      MonthlyCost.aggregate(pipeLine).exec((err, result) => {
      if(err){
        console.log(err);
      }else{
        for( var i = 0; i < result.length; i++){
          result[i].month = getMonthFromString(result[i].month);
        }
      var data = jwt.encode(result, timeSetting.secret);
      res.send(data);
      }
    })
}
function getLtsData (req, res, next){
  var currentDate = new Date(getOnlyDate(1));
  var month = req.body.month;
  var date = new Date(getOnlyDate(3));
  var pipeLine = [];
  if(!month){
        pipeLine = [{$match:{date:{$lte:currentDate, $gte:date}}}, 
          {
          $group: {
            "_id": "$service",
            "cost" : {
              $push:{
                $cond:[{$eq:["$unBlendedCost", null]},0,"$unBlendedCost"]
              }
            },
            "date":{
              $push:"$date"
            }
          },
        }
      ];
    }else{

    }
    console.log(pipeLine);
    ServiceCost.aggregate(pipeLine).exec( (err, result) => {
      if(err) {
          console.log(err);
      }else{
        console.log(result);
        var fDate = currentDate;
        var tDate = date;
        var returnData = [];
        
        for(var i = 0; i < result.length; i++){
          var item = {};
          var total = 0
          item.service = result[i]._id;
          for(var j = 0; j < result[i].date.length; j++){
            if(result[i].date[j] <= tDate){
              item.third = result[i].cost[j];
            }else if(result[i].date[j] >= fDate){
              item.first = result[i].cost[j];
            }else{
              item.second = result[i].cost[j];
            }
            total += result[i].cost[j];
          }
          item.total = total;
          returnData.push(item)
        }
        var data = jwt.encode(returnData, timeSetting.secret);
        res.send(data);
      }
    });
}

export default {
  getLtsData,
  getY2mGetData,
  getM2dDataByMonth
}
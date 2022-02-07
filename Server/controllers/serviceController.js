// import async from 'async';
// import httpStatus from 'http-status';
import ServiceCost from '../models/costByServiceModel';
import jwt from 'jwt-simple';
import {timeSetting} from '../config/config';


const getOnlyDate = (param) =>{
  var today = new Date();
  var dd = String(today. getDate() - param). padStart(2, '0');
  var mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
  var yyyy = today. getFullYear();
  return today = yyyy + '-' + mm + '-' + dd +'T00:00:00.000Z';
}
function getLtsData (req, res, next){
  var currentDate = new Date(getOnlyDate(1));
  var month = req.body.month;
  var date = new Date(getOnlyDate(3));
  var pipeLine = [];
  if(!month){
        pipeLine = [
          {
            $match:{
              date:{
                $lte:currentDate, $gte:date
              }
            }
          }, 
          {$sort: { date: -1 } },
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
    }
    ServiceCost.aggregate(pipeLine).exec( (err, result) => {
      if(err) {
          console.log(err);
      }else{
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
  getLtsData
}
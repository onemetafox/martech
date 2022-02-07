// import async from 'async';
// import httpStatus from 'http-status';
import ServiceCost from '../models/costByServiceModel';
import jwt from 'jwt-simple';
import {timeSetting} from '../config/config';

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



export default {
  getM2dDataByMonth
}
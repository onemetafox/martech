// import async from 'async';
// import httpStatus from 'http-status';
import MonthlyCost from '../models/monthlyCostModel';
import jwt from 'jwt-simple';
import {timeSetting} from '../config/config';

function getMonthFromString(mon){
  return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
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

export default {
  getY2mGetData
}
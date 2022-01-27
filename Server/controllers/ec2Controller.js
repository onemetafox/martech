import Ec2count from '../models/ec2Model';
import Ec2Instnace from '../models/ec2InstanceModel';

import jwt from 'jwt-simple';
import {timeSetting} from '../config/config';

function getAllEc2Count(req, res, next){
    const pipeLine = [
        {$sort: { createdAt: -1 } },
        {
          $group: {
            "_id": "$Region",
            "createdAt": {
                "$max": "$createdAt"
            },
            "doc": {
                "$first": "$$ROOT"
            }
          },
        }
    ];
    Ec2count.aggregate(pipeLine).exec( (err, result) => {
        if(err){
            return next(err); 
        }else{
            var data = jwt.encode(result, timeSetting.secret);
            res.send(data);
        }
    })
}
function getAllEc2Instance (req, res, next){
    // const pipeLine = [
    //     // {
    //     //   $match:{
    //     //     date:{
    //     //       $lte:currentDate, $gte:date
    //     //     }
    //     //   }
    //     // }, 
    //     {$sort: { createdAt: -1 } },
    //     {
    //       $group: {
    //         "_id": "$Region",
            
    //         "Running":{
    //             $push:"$Running"
    //         },
    //         "Stopped":{
    //             $push:"$Stopped"
    //         }
    //       },
    //     }
    // ];
    Ec2Instnace.find({}, function(err, result) {
        if(err){
            return next(err); 
        }else{
            var data = jwt.encode(result, timeSetting.secret);
            res.send(data);
        }
    })
}
export default {
    getAllEc2Instance,
    getAllEc2Count
}
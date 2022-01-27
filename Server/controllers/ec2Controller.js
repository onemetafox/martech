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
            console.log(result);
            var data = jwt.encode(result, timeSetting.secret);
            res.send(data);
        }
    })
}
function getAllEc2Instance (req, res, next){
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
    Ec2Instnace.aggregate(pipeLine).exec( (err, result) => {
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
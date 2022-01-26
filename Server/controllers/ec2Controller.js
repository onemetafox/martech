import mongoose from 'mongoose';
import Ec2count from '../models/ec2Model';
import Ec2Instnace from '../models/ec2InstanceModel';

import jwt from 'jwt-simple';
import {timeSetting} from '../config/config';

function getAllEc2Count(req, res, next){
    Ec2count.find({}, function(err, result){
        if(err){
            return next(err); 
        }else{
            var data = jwt.encode(result, timeSetting.secret);
            res.send(data);
        }
    })
}
function getAllEc2Instance (req, res, next){
    Ec2Instnace.find({}, function(err, result){
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
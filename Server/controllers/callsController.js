import Calls from '../models/callsModel';
import Response from '../services/response.service';
import jwt from 'jwt-simple';
import {timeSetting} from '../config/config';
function delCall(req, res){
    Calls.remove({_id: req.body.id})
    .then((result)=>{
        res.json(Response.success(jwt.encode(result, timeSetting.secret)));
    })
    .catch((err)=>{
        res.json(Response.failure(err));
    });
}

function getAll(req, res){
    Calls.find()
    .populate('contact')
    .then((data)=>{
        res.json(Response.success(jwt.encode(data, timeSetting.secret)));
    })
}

function addCall(req, res){
    if(req.body._id){
        Calls.findOneAndUpdate({_id: req.body._id}, req.body)
        .then((result)=>{
            res.json(Response.success(jwt.encode(result, timeSetting.secret)));
        })
        .catch((err) => {
            res.json(Response.failure(err));
        })
    }else{
        const callData = new Calls({
            contact: req.body.contact,
            description: req.body.description,
            start: req.body.start,
            end: req.body.end,
            type: req.body.type,
            status: req.body.status,
        });
        callData.save()
        .then((result)=>{
            res.json(Response.success(jwt.encode(result, timeSetting.secret)));
        })
        .catch((err)=>{
            res.json(Response.failure(err));
        });
    }
    
}

export default {
    delCall,
    addCall,
    getAll
}


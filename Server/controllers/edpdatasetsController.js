import Edpdatasets from '../models/edpdatasetsModel';
import Response from '../services/response.service';
import jwt from 'jwt-simple';
import {timeSetting} from '../config/config';
function delEdpdataset(req, res){
    Edpdatasets.remove({_id: req.body.id})
    .then((result)=>{
        res.json(Response.success(jwt.encode(result, timeSetting.secret)));
    })
    .catch((err)=>{
        res.json(Response.failure(err));
    })
}

function getAll(req, res){
    Edpdatasets.find()
    .then((data)=>{
        res.json(Response.success(jwt.encode(data, timeSetting.secret)));
    }).catch((e)=>{
        res.json(Response.failure(e));
    })
}

function addEdpdataset(req, res){
    if(req.body._id){
        Edpdatasets.findOneAndUpdate({_id: req.body._id}, req.body)
        .then((result)=>{
            res.json(Response.success(jwt.encode(result, timeSetting.secret)));
        })
        .catch((err) => {
            res.json(Response.failure(err));
        })
    }else{
        const edpdatasettData = new Edpdatasets({
            title: req.body.title,
            description: req.body.description,
        });
        edpdatasettData.save()
        .then((result)=>{
            res.json(Response.success(jwt.encode(result, timeSetting.secret)));
        })
        .catch((err)=>{
            res.json(Response.failure(err));
        });
    }
    
}

export default {
    delEdpdataset,
    addEdpdataset,
    getAll
}


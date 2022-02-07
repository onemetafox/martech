import Events from '../models/eventsModel';
import Response from '../services/response.service';
import jwt from 'jwt-simple';
import {timeSetting} from '../config/config';
function delEvent(req, res){
    Events.remove({_id: req.body.id})
    .then((result)=>{
        res.json(Response.success(jwt.encode(result, timeSetting.secret)));
    })
    .catch((err)=>{
        res.json(Response.failure(err));
    });
}

function getAll(req, res){
    Events.find()
    .then((data)=>{
        res.json(Response.success(jwt.encode(data, timeSetting.secret)));
    })
}

function addEvent(req, res){
    if(req.body._id){
        Events.findOneAndUpdate({_id: req.body._id}, req.body)
        .then((result)=>{
            console.log(result);
            res.json(Response.success(jwt.encode(result, timeSetting.secret)));
        })
        .catch((err) => {
            res.json(Response.failure(err));
        })
    }else{
        const eventData = new Events({
            user: '',
            title:req.body.title,
            description: req.body.description,
            start: req.body.start,
            end: req.body.end,
            type: req.body.type,
        });
        eventData.save()
        .then((result)=>{
            res.json(Response.success(jwt.encode(result, timeSetting.secret)));
        })
        .catch((err)=>{
            res.json(Response.failure(err));
        });
    }
    
}

export default {
    delEvent,
    addEvent,
    getAll
}


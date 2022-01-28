import Events from '../models/eventsModel';
import Response from '../services/response.service';
import moment from 'moment-timezone';

import jwt from 'jwt-simple';

import {timeSetting} from '../config/config';

function getEvent(res, req){
    
}

function updateEvent(res, req){

}

function delEvent(res, req){

}

function getAll(req, res){
    Events.find()
    .then((data)=>{
        res.json(Response.success(data));
    })
}

function addEvent(req, res){
    
    const eventData = new Events({
        user: '',
        title:req.body.title,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
        type: req.body.type,
        createAt: moment().tz(timeSetting.timeZone).format(timeSetting.momentFormat)
    });
    eventData.save(function(err, result){
        res.json(Response.success(result));
    })
}

export default {
    getEvent,
    updateEvent,
    delEvent,
    addEvent,
    getAll
}


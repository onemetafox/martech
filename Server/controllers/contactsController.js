import Contacts from '../models/contactsModel';
import Response from '../services/response.service';
import moment from 'moment-timezone';

import {timeSetting} from '../config/config';


function delEvent(req, res){
    // Contacts.remove({_id: req.body.id}, function(err, result){
    //     if(err){
    //         res.json(Response.failure(err));
    //     }else{
    //         res.json(Response.success(result));
    //     }
    // })
}

function getAll(req, res){
    // Contacts.find()
    // .then((data)=>{
    //     res.json(Response.success(data));
    // })
}

function addEvent(req, res){
    // if(req.body._id){
    //     const updateData = {
    //         user: '',
    //         title:req.body.title,
    //         description: req.body.description,
    //         start: req.body.start,
    //         end: req.body.end,
    //         type: req.body.type,
    //         createAt: moment().tz(timeSetting.timeZone).format(timeSetting.momentFormat)
    //     }
    //     Contacts.findOneAndUpdate({_id: req.body._id}, updateData)
    //     .then((result)=>{
    //         res.json(Response.success(result));
    //     })
    //     .catch((err) => {
    //         res.json(Response.failure(err));
    //     })
    // }else{
    //     const eventData = new Contacts({
    //         user: '',
    //         title:req.body.title,
    //         description: req.body.description,
    //         start: req.body.start,
    //         end: req.body.end,
    //         type: req.body.type,
    //         createAt: moment().tz(timeSetting.timeZone).format(timeSetting.momentFormat)
    //     });
    //     eventData.save(function(err, result){
    //         res.json(Response.success(result));
    //     })
    // }
    
}

export default {
    delEvent,
    addEvent,
    getAll
}


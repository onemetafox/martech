import Tickets from '../models/ticketsModel';
import Response from '../services/response.service';
import jwt from 'jwt-simple';
import {timeSetting} from '../config/config';
function delTicket(req, res){
    Tickets.remove({_id: req.body.id})
    .then((result)=>{
        res.json(Response.success(jwt.encode(result, timeSetting.secret)));
    })
    .catch((err)=>{
        res.json(Response.failure(err));
    });
}

function getAll(req, res){
    Tickets.find()
    .populate('contact')
    .then((data)=>{
        res.json(Response.success(jwt.encode(data, timeSetting.secret)));
    })
}

function addTicket(req, res){
    if(req.body._id){
        Tickets.findOneAndUpdate({_id: req.body._id}, req.body)
        .then((result)=>{
            res.json(Response.success(jwt.encode(result, timeSetting.secret)));
        })
        .catch((err) => {
            res.json(Response.failure(err));
        })
    }else{
        const ticketData = new Tickets({
            contact: req.body.contact,
            description: req.body.description,
            start: req.body.start,
            end: req.body.end,
            type: req.body.type,
            status: req.body.status,
        });
        ticketData.save()
        .then((result)=>{
            res.json(Response.success(jwt.encode(result, timeSetting.secret)));
        })
        .catch((err)=>{
            res.json(Response.failure(err));
        });
    }
    
}

export default {
    delTicket,
    addTicket,
    getAll
}


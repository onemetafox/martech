import Contacts from '../models/contactsModel';
import Response from '../services/response.service';
import Events from '../models/eventsModel';
import Calls from '../models/callsModel';
import jwt from 'jwt-simple';
import {timeSetting} from '../config/config';
function delContact(req, res){
    Contacts.remove({_id: req.body.id})
    .then((contact)=>{
        Events.remove({contact: req.body.id})
        .then((event)=>{
            Calls.remove({contact: req.body.id})
            .then((call)=>{
                res.json(Response.success(jwt.encode(call, timeSetting.secret)));
            })
        });
    })
    .catch((err)=>{
        res.json(Response.failure(err));
    })
}

function getAll(req, res){
    Contacts.find()
    .then((data)=>{
        res.json(Response.success(jwt.encode(data, timeSetting.secret)));
    }).catch((e)=>{
        res,json(Response.failure(e));
    })
}

function addContact(req, res){
    if(req.body._id){
        Contacts.findOneAndUpdate({_id: req.body._id}, req.body)
        .then((result)=>{
            res.json(Response.success(jwt.encode(result, timeSetting.secret)));
        })
        .catch((err) => {
            res.json(Response.failure(err));
        })
    }else{
        Contacts.find({email:req.body.email})
        .then((result) =>{
            console.log(result);
            if(result.length != 0){
                res.json(Response.failure(jwt.encode("Contact already exist!", timeSetting.secret)));
            }else{
                const contactData = new Contacts({
                    name: req.body.name,
                    ntid: req.body.ntid,
                    email: req.body.email.toLowerCase(),
                    phone: req.body.phone,
                    timezone: req.body.timezone,
                    location: req.body.location
                  });
                contactData.save()
                .then((result)=>{
                    res.json(Response.success(jwt.encode(result, timeSetting.secret)));
                })
                .catch((err)=>{
                    res.json(Response.failure(err));
                });
            }
        })
        .catch((err)=>{
            res.json(Response.failure(err));
        })
        
    }
    
}

export default {
    delContact,
    addContact,
    getAll
}


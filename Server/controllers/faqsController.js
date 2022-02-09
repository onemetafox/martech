import Faqs from '../models/faqsModel';
import Response from '../services/response.service';
import jwt from 'jwt-simple';
import {timeSetting} from '../config/config';
function delFaq(req, res){
    Faqs.remove({_id: req.body.id})
    .then((result)=>{
        res.json(Response.success(jwt.encode(result, timeSetting.secret)));
    })
    .catch((err)=>{
        res.json(Response.failure(err));
    })
}

function getAll(req, res){
    Faqs.find()
    .then((data)=>{
        res.json(Response.success(jwt.encode(data, timeSetting.secret)));
    }).catch((e)=>{
        res,json(Response.failure(e));
    })
}

function addFaq(req, res){
    if(req.body._id){
        Faqs.findOneAndUpdate({_id: req.body._id}, req.body)
        .then((result)=>{
            res.json(Response.success(jwt.encode(result, timeSetting.secret)));
        })
        .catch((err) => {
            res.json(Response.failure(err));
        })
    }else{
        const faqtData = new Faqs({
            title: req.body.title,
            description: req.body.description,
        });
        faqtData.save()
        .then((result)=>{
            res.json(Response.success(jwt.encode(result, timeSetting.secret)));
        })
        .catch((err)=>{
            res.json(Response.failure(err));
        });
    }
    
}

export default {
    delFaq,
    addFaq,
    getAll
}


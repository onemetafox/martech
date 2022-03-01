import Response from '../services/response.service';
// import Events from '../models/eventsModel';
import Edpdqs from '../models/edpdqsModel';
import jwt from 'jwt-simple';
import {timeSetting} from '../config/config';
function delEdpdq(req, res){
    Edpdqs.remove({_id: req.body.id})
    .then((edpdq)=>{
        Events.remove({edpdq: req.body.id})
        .then((event)=>{
            Calls.remove({edpdq: req.body.id})
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
    Edpdqs.find()
    .then((data)=>{
        res.json(Response.success(jwt.encode(data, timeSetting.secret)));
    }).catch((e)=>{
        res,json(Response.failure(e));
    })
}

function addEdpdq(req, res){
    if(req.body._id){
        Edpdqs.findOneAndUpdate({_id: req.body._id}, req.body)
        .then((result)=>{
            res.json(Response.success(jwt.encode(result, timeSetting.secret)));
        })
        .catch((err) => {
            res.json(Response.failure(err));
        })
    }else{
        Edpdqs.find({rule_name:req.body.rule_name})
        .then((result) =>{
            console.log(result);
            if(result.length != 0){
                res.json(Response.failure(jwt.encode("rule_name already exist!", timeSetting.secret)));
            }else{
                const edpdqData = new Edpdqs({
                    table_name: req.body.table_name,
                    rule_name: req.body.rule_name,
                    custom_query_check: req.body.custom_query_check,
                    description: req.body.description
                  });
                edpdqData.save()
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
    delEdpdq,
    addEdpdq,
    getAll
}


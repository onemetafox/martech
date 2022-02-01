import Calls from '../models/callsModel';
import Response from '../services/response.service';

function delCall(req, res){
    Calls.remove({_id: req.body.id})
    .then((result)=>{
        res.json(Response.success(result));
    })
    .catch((err)=>{
        res.json(Response.failure(err));
    });
}

function getAll(req, res){
    Calls.find()
    .then((data)=>{
        res.json(Response.success(data));
    })
}

function addCall(req, res){
    if(req.body._id){
        Calls.findOneAndUpdate({_id: req.body._id}, req.body)
        .then((result)=>{
            console.log(result);
            res.json(Response.success(result));
        })
        .catch((err) => {
            res.json(Response.failure(err));
        })
    }else{
        const callData = new Calls({
            user: '',
            title:req.body.title,
            description: req.body.description,
            start: req.body.start,
            end: req.body.end,
            type: req.body.type,
        });
        callData.save()
        .then((result)=>{
            res.json(Response.success(result));
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


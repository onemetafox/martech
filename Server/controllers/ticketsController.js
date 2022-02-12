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
    .then((data)=>{
        res.json(Response.success(jwt.encode(data, timeSetting.secret)));
    })
}
function getStatistic(req, res){
    var year = req.body.year;
    if(year == "")
        year = '2022';
    Tickets.aggregate([
        { "$group": {
            "_id": {
                "priority": "$priority",
                "month": "$month"
            },
            "monthCount": { "$sum": "$value" }
        }},
        { "$sort": { "month": -1 } },
    ]).then((data) => {
        // res.json(Response.success(data));
        var low = Array(13);
        var medium = Array(13)
        var high = Array(13)
        data.forEach((item)=> {
            if(item._id.priority == "Low"){
                low[item._id.month] = item.monthCount;
            }
            if(item._id.priority == "High"){
                high[item._id.month] = item.monthCount;
            }
            if(item._id.priority == "Medium"){
                medium[item._id.month] = item.monthCount;
            }
        });
        low[0] = "Low";
        medium[0]="Medium";
        high[0] = "High";
        var result = [];
        result.push(low);
        result.push(medium);
        result.push(high);
        res.json(Response.success(jwt.encode(result, timeSetting.secret)));
    }).catch((err) => {
        console.log(err);
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
            name: req.body.name,
            month: req.body.month,
            year: req.body.year,
            value: req.body.value,
            priority: req.body.priority
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
    getAll,
    getStatistic
}


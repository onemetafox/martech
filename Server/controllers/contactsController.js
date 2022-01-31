import Contacts from '../models/contactsModel';
import Response from '../services/response.service';

function delContact(req, res){
    Contacts.remove({_id: req.body.id})
    .then((result)=>{
        res.json(Response.success(result));
    })
    .catch((err)=>{
        res.json(Response.failure(err));
    })
}

function getAll(req, res){
    Contacts.find()
    .then((data)=>{
        res.json(Response.success(data));
    }).catch((e)=>{
        res,json(Response.failure(e));
    })
}

function addContact(req, res){
    if(req.body._id){
        Contacts.findOneAndUpdate({_id: req.body._id}, req.body)
        .then((result)=>{
            res.json(Response.success(result));
        })
        .catch((err) => {
            res.json(Response.failure(err));
        })
    }else{
        Contacts.find({email:req.body.email})
        .then((result) =>{
            console.log(result);
            if(result.length != 0){
                res.json(Response.failure("Contact already exist!"));
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
                    res.json(Response.success(result));
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


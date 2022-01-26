import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// model definition
const ec2Schema = new mongoose.Schema({
    Region : String,
    Running: Number,
    Stopped: Number,
    createdAt:  Date
});

export default mongoose.model('Ec2Count', ec2Schema, 'ec2count');

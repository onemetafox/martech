import mongoose from 'mongoose'
const Schema = mongoose.Schema;
// model definition
const ec2InstanceSchema = new mongoose.Schema({
    availability_zone   :   String,
    ipv4                :   String,
    iamInstanceProfile  :   String,
    instance_type       :   String,
    keyName             :   String,
    name                :   String,
    region              :   String,
    createdAt           :   Date,
    instanceId          :   String,

});

export default mongoose.model('Ec2Instnace', ec2InstanceSchema,'ec2instance');

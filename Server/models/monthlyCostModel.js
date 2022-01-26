import mongoose from 'mongoose';
// model definition
const monthlyCostSchema =  new mongoose.Schema({
    year     : Number,
    month    : String,
    cost     : Number,
});

export default mongoose.model('MonthlyCost', monthlyCostSchema);

import mongoose from 'mongoose'

const costByServiceSchema = new mongoose.Schema({
    service             : String,
    date                :  Date,
    netAmortizedCost    : Number,
    unBlendedCost       : Number,
});

export default mongoose.model('ServiceCost', costByServiceSchema);

import mongoose from 'mongoose';
const eventsSchema = new mongoose.Schema({
    user                : String,
    date                : Date,
    title               : String,
    description         : String,
    type                : String
});

export default mongoose.model('Events', eventsSchema);

import mongoose from 'mongoose';
const eventsSchema = new mongoose.Schema({
    user                : String,
    title               : String,
    description         : String,
    type                : String,
    start               : String,
    end                 : String,
    createdAt           : Date
});

export default mongoose.model('Events', eventsSchema, 'events');

import mongoose from 'mongoose';
const eventsSchema = new mongoose.Schema({
    user                : String,
    title               : String,
    description         : String,
    type                : String,
    start               : String,
    end                 : String,
    createdAt           : {
		type: Date,
		default: Date.now,
		required: 'Must have start date - default value is the created date'
	}
});

export default mongoose.model('Calls', eventsSchema, 'calls');

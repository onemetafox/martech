import mongoose from 'mongoose';
const eventsSchema = new mongoose.Schema({
    contact : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contacts',
      required: true
    },
    team         : String,
    type                : String,
    start               : String,
    end                 : String,
    createdAt           : {
		type: Date,
		default: Date.now,
		required: 'Must have start date - default value is the created date'
	}
});

export default mongoose.model('Events', eventsSchema, 'events');

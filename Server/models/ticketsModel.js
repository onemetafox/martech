import mongoose from 'mongoose';
const ticketsSchema = new mongoose.Schema({
    contact : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contacts',
      required: true
    },
    description         : String,
    type                : String,
    start               : String,
    end                 : String,
    status              : String,
    createdAt           : {
      type: Date,
      default: Date.now,
      required: 'Must have start date - default value is the created date'
    }
});

export default mongoose.model('Tickets', ticketsSchema, 'tickets');

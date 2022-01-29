import mongoose from 'mongoose';
const contactsSchema = new mongoose.Schema({
    name                : String,
    ntid                : String,
    email               : String,
    phone               : String,
    timezone            : String,
    location            : String,
    createdAt           : {
      type: Date,
      default: Date.now,
      required: 'Must have start date - default value is the created date'
    }
});

export default mongoose.model('Contacts', contactsSchema, 'contacts');

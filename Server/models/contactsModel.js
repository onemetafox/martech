import mongoose from 'mongoose';
const contactsSchema = new mongoose.Schema({
    name                : String,
    ntid                : String,
    email               : String,
    phone               : String,
    timezone            : String,
    location            : String,
    createdAt           : Date
});

export default mongoose.model('Contacts', contactsSchema, 'contacts');

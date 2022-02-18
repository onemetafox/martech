import mongoose from 'mongoose';
const edpdatasetsSchema = new mongoose.Schema({
    title               : String,
    description         : String,
    createdAt           : {
      type: Date,
      default: Date.now,
      required: 'Must have start date - default value is the created date'
    }
});

export default mongoose.model('Edpdatasets', edpdatasetsSchema, 'edpdatasets');

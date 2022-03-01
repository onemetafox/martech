import mongoose from 'mongoose';
const edpdqsSchema = new mongoose.Schema({
  table_name               : String,
  rule_name                : String,
  custom_query_check       : String,
  description              : String, 
    createdAt              : {
      type: Date,
      default: Date.now,
      required: 'Must have start date - default value is the created date'
    }
});

export default mongoose.model('Edpdqs', edpdqsSchema, 'edpdqs');

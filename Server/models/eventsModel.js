const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config');
// model definition
const eventsSchema = new Schema({
    user                : String,
    date                : Date,
    title               : String,
    description         : String,
    type                : String
});

export default mongoose.model('Events', eventsSchemaSchema);

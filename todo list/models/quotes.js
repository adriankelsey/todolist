const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    quote:{
        type: String,
        required: true
    },
    author:{
        type: String,
        requored: true
    },
}, { timestamps : true });

const Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;


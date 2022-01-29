const mongoose = require('mongoose');

const QuotesSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Quote content is required."],
        minlength: [5, "Quote content must have at least 5 characters"]
    },
    author: {
        type: String,
        required: [true, "Author is required."],
    },
    rating: Number
})

const Quote = mongoose.model('Quote', QuotesSchema);
module.exports = Quote;
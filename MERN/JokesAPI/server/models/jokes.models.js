const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required."],
        minlength: [5, "setup must have at least 5 characters"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required."],
        milength: [5, "punchline must have at least 5 chcaracters."]
    },
    rating: Number
})

const Joke = mongoose.model('Joke', JokesSchema);
module.exports = Joke;
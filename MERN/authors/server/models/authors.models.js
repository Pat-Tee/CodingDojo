const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required."],
        minlength: [3, "Author name must have at least 3 characters"]
    }
})

const Author = mongoose.model('Author', AuthorsSchema);
module.exports = Author;
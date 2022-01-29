const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required."],
        minlength: [3, "Product title must have at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Description is required."],
        minLength: [5, "Product description must have at least 5 characters."]
    },
    price: {
        type: Number,
        min: [0, "Must be greater than 0"]
    }
})

const Product = mongoose.model('Product', ProductsSchema);
module.exports = Product;
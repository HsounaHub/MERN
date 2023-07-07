// import mongoose to build model
const mongoose = require("mongoose");

// the model - the rules the everyone need to follow
const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength:[5, "{PATH} must be at least 5 chars"]

    },
    Price:{
        type: Number,
        required: [true, "{PATH} is required"],
        min:[0,"{PATH} Can't be below 0"]
    },
    Description: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength:[3, "{PATH} must be at least 3 chars"]
    }

}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
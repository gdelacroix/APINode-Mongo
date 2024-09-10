const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: String,
});

const ProductSchema = new Schema({
    name: String,
    price: Number,
    promotion:Boolean,
    discount:Number,
    category:CategorySchema
  });
  
const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
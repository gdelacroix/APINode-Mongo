var express = require('express');
var router = express.Router();
const { Product } = require("../models/product.js");

/* GET products listing. */
router.get("/", async (req, res) => {
  const allProducts = await Product.find();
  return res.status(200).json(allProducts);
});

/* GET product by id */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  return res.status(200).json(product);
});

/* POST add product */
router.post("/add", async (req, res) => {
  const newProduct = new Product({ ...req.body });
  const insertedProduct = await newProduct.save();
  return res.status(201).json(insertedProduct);
});

/* PUT update product */
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  await Product.updateOne({ _id:id }, req.body);
  const updatedProduct = await Product.findById(id);
  return res.status(200).json(updatedProduct);
});

/* DELETE delete product by id */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  return res.status(200).json(deletedProduct);
});


module.exports = router;

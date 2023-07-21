const express = require('express');
const app = express();
const Product = require('../models/products')
app.use(express.urlencoded({ extended: true }));


const showAddProductPage = (req, res) => {res.render('addProducts')}

// Adding product to DB
const createProduct = async (req, res) => {
  try {
    const { productName, productQuantity } = req.body;
    // Create a new product instance
    const newProduct = new Product({
      name: productName,
      quantity: parseInt(productQuantity),
    });
    const savedProduct = await newProduct.save();
    res.send('Product saved successfully!');
  } catch (error) {
    res.status(500).send('Failed to save the product.');
  }
}; 

// Fetching products from DB 
const getProducts = async (req, res) => {
  const prod = await Product.find({});
  res.render('showProducts', { prod });
};


// Deleting Products from DB
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    await Product.findByIdAndRemove(productId);
    res.redirect('/products');
  } catch (error) {
    res.status(500).send('Failed to delete product.');
  }
};

// Updating product quantity in DB
const showPage = async (req,res) =>{
  const prod = await Product.find({});
  res.render('updateQunatity', { prod });
}


const updateQuantity = async (req, res) => {
  const productId = req.params.id;
  const newQuantity = req.body.newQuantity;

  try {
    // Find the product by its ID and update the quantity
    await Product.findByIdAndUpdate(productId, { quantity: newQuantity });
    res.redirect('/products');
  } catch (error) {
    console.error('Error updating product quantity:', error);
    res.status(500).send('Failed to update product quantity.');
  }
};


module.exports = {
  showAddProductPage,
  createProduct,
  getProducts,
  deleteProduct,
  showPage,
  updateQuantity,
  
}
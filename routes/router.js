const express = require('express');
const router = express.Router();
const {createProduct, showAddProductPage, getProducts, deleteProduct, updateQuantity, showPage} = require('../controllers/controller')
const Product = require('../models/products')

//render add product page
router.get('/',showAddProductPage);
router.get('/add',showAddProductPage);
router.post('/products/create',createProduct);

//render all products page
router.get('/products',getProducts);
router.get('/productUp',showPage);

// handling delete routes
router.post('/products/:id', deleteProduct);

// handling update routes
router.post('/productUp/:id', updateQuantity);

module.exports = router;
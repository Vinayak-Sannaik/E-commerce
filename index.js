// Import all required dependencies
require('dotenv').config();
const express = require('express');
const router = require('./routes/router')
const app = express();
const db = require('./connection');
const port = process.env.PORT;
const Product = require('./models/products') 

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/products/create',router);
app.use('/products/:id',router);
app.use('/productUp/:id',router);
app.get('/home',(req,res) =>{
  res.render('home');
})

app.use('/', router);



app.listen(port,(req,res)=>{
  console.log(`server is running on : ${port}`);
});



const express = require('express');
const routes = express.Router();

const productController = require('./controllers/ProductController');
//Primeira Rota
routes.get('/products', productController.index);

//Exportando Routes
module.exports = routes;
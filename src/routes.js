const express = require('express');
const routes = express.Router();

const productController = require('./controllers/ProductController');
//Primeira Rota
routes.get('/products', productController.index);
routes.post('/products', productController.store);
//Exportando Routes
module.exports = routes;

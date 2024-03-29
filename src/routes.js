const express = require('express');
const routes = express.Router();

const productController = require('./controllers/ProductController');
//Primeira Rota
routes.get('/products', productController.index);
routes.get('/products/:id', productController.show);
routes.post('/products', productController.store);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.destroy);
//Exportando Routes
module.exports = routes;

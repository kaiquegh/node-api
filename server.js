const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Inciando App
const app = express();

//Iniciando MongoDB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useUnifiedTopology: true,
      useNewUrlParser: true 
    }
);
requireDir('./src/models');

const Product = mongoose.model('Product');

//Primeira Rota
app.get('/', (req, res) => {
  Product.create({
    title: 'Node.js',
    description: 'Build api with Node.js',
    url: "https://github.com/DaianeBarizon/node-api"
  });

  return res.send('Hello World Daiane');
});

app.listen(3001);
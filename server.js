const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Inciando App
const app = express();
app.use(express.json());

//Iniciando MongoDB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useUnifiedTopology: true,
      useNewUrlParser: true 
    }
);
requireDir('./src/models');

//Recebe todos os tipos de requisição
app.use('/api', require('./src/routes'));

app.listen(3001);
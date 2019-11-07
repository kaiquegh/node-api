const express = require('express');
const mongoose = require('mongoose');

//Inciando App
const app = express();

//Iniciando MongoDB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useUnifiedTopology: true,
      useNewUrlParser: true 
    }
);

//Primeira rota
app.get('/', (req, res) => {
    res.send('Hello World Daiane')
});
app.listen(3001);
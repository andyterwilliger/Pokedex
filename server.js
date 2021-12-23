const express = require('express');

const pokemon = require('./models/pokemon');

const morgan = require('morgan');

const app = express();

const port = 3000;

//middleware










//routes

app.get('/pokemon', (req, res) => {
    res.send("I have never seen Pokemon or owned any merch")
});









app.listen(port, () => {
    console.log('listening...')
});
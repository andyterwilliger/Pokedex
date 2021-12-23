const express = require('express');

const pokemon = require('./models/pokemon');

const morgan = require('morgan');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log('listening...')
});
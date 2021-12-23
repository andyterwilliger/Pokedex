const express = require('express');

const pokemon = require('./models/pokemon');

const morgan = require('morgan');

const app = express();

const port = 3000;

//middleware

app.use(morgan('dev'));

app.use(express.urlencoded({extended : false}));

app.use(express.static('public'));






//routes INDUCES

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        allPokemon: pokemon 
    })
});

app.get('/fruits/new' , (req, res) => {
    res.send ('new pokes')
});

app.delete('/pokemon/:id', (req, res) => {
    res.send ('bye bye')
});

app.put('/pokemon/:id', (req, res) => {
    res.send ('new data about pokes')
});

app.get('/pokemon/:id/edit', (req, res) => {
    res.send('editing pokes')
});

app.get('/pokemon/:id', (req, res) => {
    res.send('pokes')
})


app.get('/pokemon/:id', (req, res) => {
    res.send("pics of pokemon I have never seen")
});






app.listen(port, () => {
    console.log('listening...')
});
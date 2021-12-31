const express = require('express');

const pokemon = require('./models/pokemon');

const morgan = require('morgan');

const methodOverride = require('method-override');

const app = express();

const port = 3000;

//middleware

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use(function (req, res, next) {
    next();
})

app.use(methodOverride('_method'));






//routes INDUCES

app.get('/', (req, res) => res.redirect('/pokemon'));

//index
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        allPokemon: pokemon,
    })
});

//new
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
});

//delete
app.delete('/pokemon/:indexOfPokemonArray', (req, res) => {
    pokemon.splice(req.params.indexOfPokemonArray, 1);
    res.redirect('/pokemon');
});

//update
app.put('/pokemon/:indexOfPokemonArray', (req, res) => {
    pokemon[req.params.indexOfPokemonArray] = req.body;
    res.redirect('/pokemon');
});



//create
app.post('/pokemon', (req, res) => {
    pokemon.unshift(req.body)
    res.redirect('/pokemon')
});


//app.put('/pokemon/:id', (req, res) => {
//  res.send ('new data about pokes')
//});

//edit
app.get('/pokemon/:indexOfPokemonArray/edit', (req, res) => {
    res.render('edit.ejs', {
        pokeItem: pokemon[req.params.indexOfPokemonArray],
        index: req.params.indexOfPokemonArray,
    });
});

//show
app.get('/pokemon/:indexOfPokemonArray', (req, res) => {
    res.render('show.ejs', { pokeItem: pokemon[req.params.indexOfPokemonArray] });
});






app.listen(port, () => {
    console.log('listening...')
});


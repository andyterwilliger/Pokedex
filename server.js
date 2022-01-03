const express = require('express');

const pokemon = require('./models/pokemon');

const morgan = require('morgan');

const methodOverride = require('method-override');

const app = express();

app.use((req, res, next) => {
    res.locals.url = req.originalUrl;
    res.locals.host = req.get('host');
    res.locals.protocol = req.protocol;
    next();
});

const port = 3000;

//middleware

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use(function(req, res, next) {
    next();
})

app.use(methodOverride('_method'));






//routes INDUCES

app.get('/', (req, res) => res.redirect('/pokemon'));

//index
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokeItem: pokemon
    })
});

//new
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
});

//delete
app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});

//update
app.put('/pokemon/:id', (req, res) => {
     pokemon[req.params.id] = req.body;
     req.body.type = [req.body.type];
     req.body.stats = {
         hp: req.body.hp,
         attack: req.body.attack,
         defense: req.body.defense,
         spattack: req.body.spattack,
         spdefense: req.body.spdefense,
         speed: req.body.speed
     }
    res.redirect('/pokemon');
});



//create
app.post('/pokemon', (req, res) => {
    pokemon.unshift({
        id: req.body.id,
        img: req.body.img,
        name: req.body.name,
        type: [req.body.type],
        stats:{
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed,
        }
    })
    
    res.redirect('/pokemon')
    
});


//app.put('/pokemon/:id', (req, res) => {
//  res.send ('new data about pokes')
//});

//edit
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokeItem: pokemon[req.params.id],
        index: req.params.id
    });
});

//show
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs',
        {
            pokeItem: pokemon[req.params.id],
            id: req.params.id
        });

});






app.listen(port, () => {
    console.log('listening...')
});


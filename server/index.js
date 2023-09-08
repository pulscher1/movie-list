const express = require('express');
const app = express();
const knex = require("knex")(require('./knexfile.js')['development'])
//const knex = require('knex')(require('./knexfile')[process.env.NODE_ENV || 'development'])
//const knexfile = require("./knexfile.js")
const port = 8081;

// var cors = require('cors');
// app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('My API is up and running Yo!')
})

app.get('/movies', (req, res) => {
    knex('movies')
    .select('*')
    .then((movies) => { 
        var movies = movies.map(movies => movies.Title)
         res.json(movies)})
    .catch((err) => res.status(500).json(err));
})


app.listen(port, () => console.log(`Express listening on port ${port}`))


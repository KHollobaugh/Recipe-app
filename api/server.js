const express = require('express');
const server = express();
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
const cors = require('cors');
const port = process.env.PORT || 8000;

server.use(express.json());
server.use(cors());

//Make sure API working

server.get('/', (req, res) => {
    res.send(`Api running on port ${port}`)
})


// GET a list of recipes 

server.get('/api/recipes', (req, res) => {
    db('recipes')
    .then(recipes => res.status(200).json(recipes))
    .catch(error => res.status(500).json({
        message: 'failed to get notes'
    }))
})

//GET recipes by id
server.get('/api/recipes/:id', (req, res) => {
    const { id } = req.params;
    db('recipes')
    .where({ id: id })
    .first()
    .then(recipes => res.status(200).json(recipes))
    .catch(error => res.status(500).json({ message: `failed to get recipe by id ${id}`}))
})

module.exports = server;
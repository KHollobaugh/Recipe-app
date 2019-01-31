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

server.get('/api/recipes', (req, res) => {
    db('recipes')
    .then(notes => res.status(200).json(notes))
    .catch(error => res.status(500).json({
        message: 'failed to get notes'
    }))
})

module.exports = server;
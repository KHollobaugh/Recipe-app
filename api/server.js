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

//POST a new recipe with title, body, and link

server.post('/api/recipes', (req, res) => {
    const body = req.body;
    db('recipes')
    .insert(body)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(error => res.status(500).json({
        message: 'Error posting new recipe'
    }))
})

//PUT - edit an existing recipe

server.put('/api/recipes/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    db('recipes')
    .where({ id: id })
    .update(changes)
    .then(count => {
        res.status(200).json({ count })
    })
    .catch(error => res.status(500).json({ message: `Failed to edit note #${id}`}))
})

//DELETE note by id

server.delete('/api/recipes/:id', (req, res) => {
    const { id } = req.params;
    db('recipes')
    .where({ id: id })
    .del()
    .then(count => res.status(200).json(count))
    .catch(err => {
        res.status(401).json({ message: `Failed to delete recipe #${id}`})
    })
    .catch(err => res.json(err))
})

module.exports = server;
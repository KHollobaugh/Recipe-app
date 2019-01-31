const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');

beforeEach(async () => {
    await db('recipes').truncate();
})

describe('server.js', () => {

    describe('/get request to / to test server', () => {
        it('should return a status code 200', async () => {
            const response = await request(server).get('/');
            expect(response.status).toBe(200);
        })
    })

    describe('/get request to /api/recipes', () => {
        it('should return a status code 200', async () => {
            const response = await request(server).get('/api/recipes');
            expect(response.status).toBe(200);
        })

        it('should return json', async () => {
            const response = await request(server).get('/api/recipes');
            expect(response.type).toBe('application/json');
        })

        it('should return an array', async () => {
            const response = await request(server).get('/api/recipes');
            expect(response.body).toEqual(expect.any(Array));
        })

        it('should return content', async () => {
            const response = await request(server).get('/api/recipes');
            expect(response.body).toBeTruthy();
        })
    })


})
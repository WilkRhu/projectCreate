const request = require('supertest');
const app = require('../../src/web/app');
const knex = require('knex');
const knexfile = require('../../knexfile');
const connect = require('../../config/connection/index');
const { userSucess, userNoName } = require('../supoort/models/userModelMock.js');

beforeAll(() => {
    app.db =  knex(knexfile.test);
});

describe('Users', () => {
    test('Return all users', () => {
        return request(app).get('/user')
        .set('auth', userSucess.token)
        .set('Accept', 'application/json')
        .then(res => {
            expect(res.status).toBe(200);
        })
    })

    test('You must register the user', async () => {
        const res = await request(app).post('/user')
        .send(userSucess);
        expect(res.status).toBe(201);
     });

     test('prqoperty name is mandatory', async () => {
        const res = await request(app).post('/user')
        .send(userNoName);
        expect(res.status).toBe(400);
     });
        

     test('must return the user by id', async () => {
        const createUser = await connect('users').insert(userSucess);
        const res = await request(app).get(`/user/${createUser[0]}`)
        expect(res.status).toBe(200);
        expect(res.body.name).toBe(userSucess.name);
     });

     
})
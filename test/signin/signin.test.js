const request = require('supertest');
const app = require('../../src/web/app');
const connect = require('../../config/connection/index');
const { userSucess } = require('../supoort/models/userModelMock');
const criptPassword = require('../../src/service/middleware/criptPassword');

describe('SignIn', () =>{
    test('SignIn Sucess', async () => {
        const user = {
            name: userSucess.name,
            email: userSucess.email,
            password: criptPassword(userSucess.password)
        };

        await connect('users').insert(user);
        const signin = await request(app).post('/signin')
        .send({email: user.email, password: userSucess.password});
        expect(signin.status).toBe(200);
    })

    test('SignIn 404 User not found', async () => {
        const userNotFound = {
            email: "fulanodetal@gmail.com",
            password: "123456"
        };

        const signin = await request(app).post('/signin')
        .send(userNotFound);
        expect(signin.status).toBe(404);
    })

    test('SignIn Invalid Password', async () => {
        const user = {
            name: userSucess.name,
            email: userSucess.email,
            password: criptPassword(userSucess.password)
        };

        await connect('users').insert(user);
        const signin = await request(app).post('/signin')
        .send({email: user.email, password: "123456"});
        expect(signin.status).toBe(401);
        expect(signin.body).toBe('Invalid Password!');
    })

    test('SignIn Error Validation Email', async () => {
        const userNotFound = {
            password: "123456"
        };

        const signin = await request(app).post('/signin')
        .send(userNotFound);
        expect(signin.status).toBe(400);
        expect(signin.body).toBe('Error Validation')
    })

    test('SignIn Error Validation Password', async () => {
        const userNotFound = {
           email: "fulano@gmail.com"
        };

        const signin = await request(app).post('/signin')
        .send(userNotFound);
        expect(signin.status).toBe(400);
        expect(signin.body).toBe('Error Validation')
    })

    


})
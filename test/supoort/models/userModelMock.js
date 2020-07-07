const faker = require('faker');
const createToken = require('../../../src/service/middleware/createToken');

const userSucess ={
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    token: createToken(name)
};


const userNoName ={
    email: faker.internet.email(),
    password: faker.internet.password(),
    token: createToken(name)
};


module.exports = {
    userSucess,
    userNoName
};
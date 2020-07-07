const bcrypt = require('bcrypt');
const criptPassword = require('../../service/middleware/criptPassword');
const createToken = require('../../service/middleware/createToken');

const userSchema = (data) => {
    const user = {
        name: data.name,
        email: data.email,
        password: criptPassword(data.password),
        token: createToken(data),
    }

    return user;
}

module.exports = userSchema;
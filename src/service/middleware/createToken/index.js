const jwt = require('jsonwebtoken');


const createToken = (token) => {
    token.password = undefined;
   return jwt.sign(token, process.env.KEY_SISTEM);
}

module.exports = createToken;
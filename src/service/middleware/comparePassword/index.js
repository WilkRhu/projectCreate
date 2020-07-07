const bcrypt = require('bcrypt');

const comparePassword =  (password, userPassword) => {
   return bcrypt.compare(password, userPassword)
}

module.exports = comparePassword;
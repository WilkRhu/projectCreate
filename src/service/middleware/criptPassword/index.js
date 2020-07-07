const bcrypt = require('bcrypt');

const criptPassword = (password) => {
   const saltRound = 10;
  return bcrypt.hashSync(password, saltRound);
}

module.exports = criptPassword;
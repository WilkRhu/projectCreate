const connect = require('../../../config/connection');
const User = require('../../domains/user');
const userValidation = require('../../service/validations/userValidation');


const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const {error, value} =  userValidation.validate({ name, email, password});
        if(!error){
            const create = await connect('users').returning("id").insert(User(value));
            const user = await connect('users').select('*').where('id', create[0]);
            user.password = undefined;
            return res.status(201).json(user);
        } else {
            return res.status(400).json(`Erro validate: ${error}`);
        }
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = createUser;
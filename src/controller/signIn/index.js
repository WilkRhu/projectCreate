const connect = require('../../../config/connection/index');
const signInValidation = require('../../service/validations/signInValidation');
const comparePassword = require('../../service/middleware/comparePassword');

const signIn = async (req, res) => {
    try{
        const {email, password} = req.body;
        const {value, error} = signInValidation.validate({email, password});
        if(!error) {
            const signin = await connect('users').select('*').where('email', value.email);
            if(signin.length === 0) return res.status(404).json('User not found!');
            const pass_ok = await comparePassword(password, signin[0].password);
            if(pass_ok){
                signin[0].password = undefined;
                return res.status(200).json(signin[0]);
            } else {
                return res.status(401).json("Invalid Password!")
            }
        } else {
            return res.status(400).json('Error Validation')
        }
        
    } catch(error) {
        return res.status(400).json(error.message)
    }
}

module.exports = signIn;
const connect = require('../../../config/connection');


const getUserAll = async (req, res) => {
   try {
    const user = await connect('users').select('*');
    return res.status(200).json(user);
   } catch(error) {
    return res.statu(400).json(error.message)
   }
}

const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await connect('users').select('*').where('id', id);
        return res.status(200).json(user[0]);
       } catch(error) {
        return res.statu(400).json(error.message)
       }
}

module.exports = {
    getUserAll,
    getUser
};
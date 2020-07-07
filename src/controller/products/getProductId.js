const connect = require("../../../config/connection/index");

const getProductId = async (req, res) => {
    try {
        const {id} = req.params;
        const products = await connect('products').select('*').where('id', id);
        if(products.length !== 0){
            return res.status(200).json(products[0]);
        } else {
            return res.status(404).json('User not found!');
        }
    } catch(error) {
        return res.status(400).json(error.message);
    }

}
module.exports = getProductId;
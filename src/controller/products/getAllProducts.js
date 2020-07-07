const connect = require("../../../config/connection/index");

const getAllProduct = async (req, res) => {
    try {
        const products = await connect('products').select('*');
        return res.status(200).json(products[0]);
    } catch(error) {
        return res.status(400).json(error.message);
    }

}
module.exports = getAllProduct;
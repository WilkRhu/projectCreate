const Products = require('../../domains/poducts/index');
const connect = require('../../../config/connection');

const updateProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const products = req.body;
        const existProduct = await connect('products').select('*').where('id', id);
        if (existProduct.length !== 0) {
            const product = await connect('products').returning("id").where('id', existProduct[0].id).update(products);
            const returnProduct = await connect('products').select('*').where('id', process.env.NODE_ENV === 'test' ? id : product[0]);
            return res.status(201).json(returnProduct[0]);
        } else {
            return res.status(404).json('User not found');
        }
    } catch (error) {
        return res.status(400).json(error.message)
    }

}

module.exports = updateProducts;
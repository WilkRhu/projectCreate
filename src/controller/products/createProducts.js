const connect = require('../../../config/connection');
const productsValidations = require('../../service/validations/productsValidation');
const Product = require('../../domains/poducts/index');

const createProducts = async (req, res) => {
    try {
        const { name, description, price, category, stock} = req.body;
        const { value, error } = productsValidations.validate({ name, description, price, category, stock });
        if(!error){
            const product = await connect('products').returning("id").insert(Product(value));
            const retProducts = await connect('products').select('*').where('id', product[0]);
            return res.status(201).json(retProducts[0]);
        } else {
            return res.status(400).json('Error validation');
        }
    } catch(error) {
        return res.json(400).json(error.message);
    }
}

module.exports = createProducts;
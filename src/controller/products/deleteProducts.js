const connect = require("../../../config/connection");

const deleteProducts = async (req, res) => {
    const { id } = req.params;
    const product = await connect('products').where('id', id).del();
    console.log(product);
}

module.exports = deleteProducts;
const {getUserAll, getUser} = require('./users/getUsers');
const createUser = require('./users/createUser');
const signIn = require('./signIn');
const createProducts = require('./products/createProducts');
const getAllProduct = require("./products/getAllProducts");
const getProductId = require('./products/getProductId');
const productPaginate = require('./products/productsPaginate');
const updateProducts = require('./products/updateProducts');
const deleteProducts = require('./products/deleteProducts');

module.exports = {
    createUser,
    getUserAll,
    getUser,
    signIn,
    createProducts,
    getAllProduct,
    getProductId,
    productPaginate,
    updateProducts,
    deleteProducts
}
const router = require('express').Router();
const productsController = require('../../../controller');

router.post('/products', productsController.createProducts);
router.get('/products', productsController.getAllProduct);
router.get('/products/:id', productsController.getProductId);
router.get('/paginate', productsController.productPaginate);
router.put('/productsUpdate/:id', productsController.updateProducts);
router.delete('/deleteProducts/:id', productsController.deleteProducts);

module.exports = router;
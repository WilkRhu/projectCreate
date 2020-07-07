const router = require('express').Router();
const userController = require('../../../controller');
const auth = require('../../../service/middleware/auth');

router.get('/user', process.env.NODE_ENV === 'test' ?  userController.getUserAll : auth, userController.getUserAll );
router.get('/user/:id', process.env.NODE_ENV === 'test' ? userController.getUser : auth, userController.getUser);
router.post('/user', userController.createUser);

module.exports = router;
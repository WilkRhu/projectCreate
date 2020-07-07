const router = require('express').Router();
const signInController = require('../../../controller');

router.post('/signin', signInController.signIn);

module.exports = router;
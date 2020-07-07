const router = require('express').Router();
const routerApi = require('express').Router();
const userRouter = require('./users/userRouter');
const signInRouter = require('./signIn/index');
const productsRouter = require('./products/productsRouter')

router.use(userRouter, signInRouter, productsRouter);

routerApi.use('/', router);


module.exports = routerApi;
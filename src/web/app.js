require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routers = require('../web/routes/index');
const knex = require('knex');
const knexfile = require('../../knexfile');

app.db = knex(process.env.NODE_ENV === 'test' ? knexfile.test : knexfile.prod);


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(routers)

module.exports = app;
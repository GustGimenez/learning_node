const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
const router = express.Router();

// Mongo connection

// Models

// Routers
const index_router = require('./routers/index');

app.use('/', index_router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

module.exports = app;
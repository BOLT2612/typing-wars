const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();
app.use(bodyParser.json());
routes(app);

const path = require('path');

module.exports = app;

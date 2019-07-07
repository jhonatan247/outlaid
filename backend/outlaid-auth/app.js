var express = require('express');
var cors = require('cors');

var AuthenticationRouter = require('./authentication/routes')
  .AuthenticationRouter;

var AccountRouter = require('./authentication/routes').AccountRouter;

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', AuthenticationRouter);
app.use('/api/accounts', AccountRouter);

module.exports = app;

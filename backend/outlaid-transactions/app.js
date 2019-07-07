var express = require('express');
var cors = require('cors');

var TransactionRouter = require('./transactions/routes').TransactionRouter;

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/transactions', TransactionRouter);

module.exports = app;

'use strict';
const TransactionDefinition = require('../table_definitions')
  .TransactionDefinition;

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    'Transactions',
    TransactionDefinition.build(DataTypes),
    {}
  );
  Account.associate = function(models) {};
  return Account;
};

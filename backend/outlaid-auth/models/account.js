'use strict';
const AccountDefinition = require('../table_definitions').AccountDefinition;

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    'Account',
    AccountDefinition.build(DataTypes),
    {}
  );
  Account.associate = function(models) {};
  return Account;
};

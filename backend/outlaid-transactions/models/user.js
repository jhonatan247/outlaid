'use strict';
const UserDefinition = require('../table_definitions').UserDefinition;

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    'Users',
    UserDefinition.build(DataTypes),
    {}
  );
  Account.associate = function(models) {};
  return Account;
};

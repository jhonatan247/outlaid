'use strict';
const UserDefinition = require('../table_definitions').UserDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', UserDefinition.build(Sequelize));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};

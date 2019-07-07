'use strict';

module.exports.build = DataTypes => {
  return {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    owner: {
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      type: DataTypes.INTEGER
    },
    ds: {
      allowNull: false,
      type: DataTypes.DATE
    },
    y: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    category: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  };
};

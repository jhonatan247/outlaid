'use strict';

module.exports.build = DataTypes => {
  return {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      },
      type: DataTypes.STRING
    },
    DNI: {
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true
      },
      type: DataTypes.STRING
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

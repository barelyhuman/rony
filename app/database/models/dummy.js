const Sequelize = require('sequelize');

module.exports = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'name',
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'age',
    defaultValue: 0,
  },
};

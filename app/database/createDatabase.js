const Sequelize = require('sequelize');
const glob = require('glob');
const path = require('path');
const databaseConfig = require('../config/database');

const {
  database, user, password, host, connector, url,
} = databaseConfig[process.env.NODE_ENV || 'development'];

module.exports = () => {
  let sequelize;

  if (url) {
    sequelize = new Sequelize(url);
  } else {
    sequelize = new Sequelize(database, user, password, {
      host,
      dialect: connector,
    });
  }


  const db = glob.sync('./models/**/*.js', { cwd: __dirname })
    .map((filename) => ({
      // eslint-disable-next-line global-require
      schema: require(filename),
      name: path
        .basename(filename)
        .replace(path.extname(filename), ''),
    }))
    .map(({ name, schema }) => sequelize.define(name, schema))
    .reduce((dbInstance, model) => ({
      ...dbInstance,
      [model.name]: model,
    }),
    {});

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    sequelize.sync({ force: true });
  } else {
    sequelize.sync({ force: false });
  }

  return db;
};

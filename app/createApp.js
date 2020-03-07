const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const router = require('./routes/createRouter')();
const database = require('./database/createDatabase')();

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    req.db = database;
    next();
  });

  app.use('/api', router);

  return app;
};

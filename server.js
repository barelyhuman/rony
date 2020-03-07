const debug = require('debug')('app:server.js');

const app = require('./app/createApp.js')();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  debug(`Listening on ${port}`);
});

const { Router } = require('express');

module.exports = Router({ mergeParams: true }).get('/v1/dummy-path/get', async (req, res) => {
  try {
    return res.send({
      data: [],
    });
  } catch (err) {
    return res.status(400).send({
      message: String(err),
    });
  }
});

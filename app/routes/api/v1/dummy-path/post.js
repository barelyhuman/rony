const { Router } = require('express');

module.exports = Router({ mergeParams: true })
  .post('/v1/dummy-path/post', async (req, res) => {
    try {
      return res.send({
        success: true,
      });
    } catch (err) {
      return res.status(400).send({
        message: String(err),
      });
    }
  });

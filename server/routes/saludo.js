const express = require('express');

const router = express.Router();

router.get('/saludo', (req, res) => {
  res.json({ msg: 'hola Sergio' });
});

module.exports = router;

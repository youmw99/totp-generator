var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const totp = require("totp-generator");
  const token = totp(req.query.key);
  res.json('index', { token: token });
});

module.exports = router;

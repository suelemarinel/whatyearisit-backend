var express = require('express');
var router = express.Router();

// GET /year
router.get('/', function(req, res, next) {
  const currentYear = new Date().getFullYear();
  res.json({ year: currentYear.toString() });
});

module.exports = router;
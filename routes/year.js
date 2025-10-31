var express = require('express');
var router = express.Router();

// GET /year
router.get('/', function(req, res, next) {
  const currentYear = new Date();
  res.json({ year: currentYear.getFullYear().toString() });
});

module.exports = router;
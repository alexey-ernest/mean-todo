var express = require('express');
var router = express.Router();
var todos = require('./todos');

router.use('/todos', todos);

module.exports = router;

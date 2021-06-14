const express = require('express');
const router = express.Router();

//router to api
router.use('/api', require('./api'));

module.exports = router;

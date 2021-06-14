const express = require('express');
const router = express.Router();

//router to v1
router.use('/v1', require('./v1'));

module.exports = router;
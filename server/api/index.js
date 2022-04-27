"use strict";

const router = require("express").Router();

//Add routes here, In case we'll need to display more data (not just Sydney temperartures)
router.use('/weatherSydney', require('./weatherSydney'));

module.exports = router;
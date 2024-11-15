const express = require('express')
const router = express.Router();

//fullname
const fullName = require('../Controller/FullName')
router.get('/name',fullName.getFullName)

module.exports = router


const express = require('express')
const router = express.Router();

//fullname
const fullName = require('../Controller/FullName')
router.get('/name',fullName.getFullName)

//Hobbies
const hobby = require('../Controller/Hobby')
router.get('/hobby',hobby.getHobby)
module.exports = router


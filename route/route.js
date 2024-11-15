const express = require('express')
const router = express.Router();

//fullname
const fullName = require('../Controller/FullName')
router.get('/name',fullName.getFullName)

//Hobbies
const hobby = require('../Controller/Hobby')
router.get('/hobby',hobby.getHobby)

//dream
const dream =require('../Controller/Dream')
router.get('/dream',dream.getDream)
module.exports = router


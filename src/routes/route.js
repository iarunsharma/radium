const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

const CollegeController =require("../controllers/Collegecontroller.js")

router.post('/functionup/colleges', CollegeController.registercollege )
router.post('/functionup/interns',CollegeController.createintern)
router.get('/functionup/collegeDeatils',CollegeController.alldetails)


module.exports = router;
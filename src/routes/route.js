const express = require('express');
const router = express.Router();

const cowinController= require("../controllers/cowinController.js")
const tempController=require('../controllers/tempController.js')

// router.get("/cowin/states", cowinController.getStatesList)
// router.get("/cowin/districts/:stateId", cowinController.getDistrictsList)
// router.get("/cowin/centers", cowinController.getByPin)
// router.post("/cowin/getOtp", cowinController.getOtp)
// router.post('/cowin/confirmOtp',cowinController.confirmOtp)


router.get('/londonWeather', tempController.londonWeather)
router.get('/londonTemp', tempController.londonTemp)
router.get('/weatherOfCities',tempController.weatherOfCities)

module.exports = router;
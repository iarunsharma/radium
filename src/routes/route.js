const express = require('express');
const router = express.Router();

const cryptomodel = require('../models/cryptomodel.js');
const cryptoController= require("../controllers/cryptoController")

router.get("/getcrypto", cryptoController.getcrypto)


module.exports = router;
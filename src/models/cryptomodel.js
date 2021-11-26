const mongoose = require('mongoose')
const cryptoSchema = new mongoose.Schema({

    symbol :{
        type : String,
        unique : false  //furter change it to true
    },

    name : {
        type : String,
        unique : false  // furter change it to true
    }, 

    marketCapUsd:{
        type : String 
    },

    priceUsd: String

},{timestamps : true})

module.exports = mongoose.model('Crypto', cryptoSchema)

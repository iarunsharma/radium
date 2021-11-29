const authorModels = require('../models/authorModel')

const mongoose = require('mongoose');
 
const createAuthor= async function (req, res) {
    var myAuthor= req.body
    let authorSaved= await authorModels.create(myAuthor)
    res.send({msg: authorSaved})    
    }
 
module.exports.createAuthor = createAuthor;
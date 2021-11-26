const axios = require("axios");
const cryptomodel = require('../models/cryptomodel');

const getcrypto = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "http://api.coincap.io/v2/assets"
    };
    const crypto = await axios(options);

    let coins = crypto.data.data.sort(function (a, b) { return b.changePercent24Hr - a.changePercent24Hr })

    for (let i = 0; i < coins.length; i++) {

      let data = (({ symbol, name, marketCapUsd, priceUsd }) => ({ symbol, name, marketCapUsd, priceUsd }))(coins[i])
      cryptomodel.findOneAndUpdate({ "name": data.name }, data, { upsert: true })
    }
    const cryptocoins = await cryptomodel.find()
    res.status(200).send({ data: cryptocoins });

  }
  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }

};


module.exports.getcrypto = getcrypto;

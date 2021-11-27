const axios = require("axios");
const { get } = require("mongoose");

const londonWeather = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=f1a93c7f2832ca822dc0920253b1614a',
        }
        const response = await axios(options);

        console.log(response)
        res.status(200).send({ msg: "sucessfull", "data": response.data  })
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: "something went wrong" })
    }
}


//----------------------Problem-2---------------------------------------------------------------------------------------------//

const londonTemp = async function (req,res){
    try{
        let options = {
            method : "get",
            url : 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=f1a93c7f2832ca822dc0920253b1614a',
        }
        const london = await axios(options)
        res.status(200).send({ msg: "sucessfull", "data": london.data.main.temp  })
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: "something went wrong" })
}
}


//----------------------------------Problem-3-------------------------------------------------------------------------------------------

const weatherOfCities = async function (req,res){
try{
    let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let array = []
    for (i=0;i<cities.length;i++){
        const obj = {city :cities[i]};
        const cityWeather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=f1a93c7f2832ca822dc0920253b1614a`)
        console.log(cityWeather.data.main.temp)
        obj.temp = cityWeather.data.main.temp
        array.push(obj)
       }
    let sorted= array.sort( function (prev,next) {return prev.temp - next.temp})
    console.log(sorted)
    res.status(200).send({ msg: "sucessfull", "data": sorted  })
}
catch (err) {
    console.log(err.message)
    res.status(500).send({ msg: "something went wrong" })
}
}


module.exports.londonWeather = londonWeather;
module.exports.londonTemp = londonTemp;
module.exports.weatherOfCities = weatherOfCities;
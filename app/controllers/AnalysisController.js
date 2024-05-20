const axios = require("axios");
const adafruit = require("../config/adafruit.config");
const { Log } = require("../models/models")

const storeData = (req, res) => {
    axios
    .get(adafruit.url)
    .then((response) => {
        const data = response.data;
        let light = [];
        let temperature = [];
        let power = [];

        data.forEach((item) => {
            if (item.name === 'data_anhsang') {
                light.push(item.last_value);
                light.push(item.last_value_at);
            }
            if (item.name === 'data_nhietdo') {
                temperature.push(item.last_value);
                temperature.push(item.last_value_at);
            }
            if (item.name === 'data_diennang') {
                power.push(item.last_value);
                power.push(item.last_value_at);
            }
        });

        Log.create({
            date: light[1] || temperature[1] || power[1], 
            light: light[0],
            temperature: temperature[0],
            power: power[0]
        }).then(() => {
            console.log("Data stored successfully");
        }).catch((error) => {
            console.error("Error storing data:", error);
        });
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
}

const home = async (req,res) => {
    try {
        const data = await Log.find()
        res.json(data)
    }
    catch (error) {
        res.json({
            error: error
        })
    }
}

setInterval(storeData, 25000)
module.exports = {
    home
}
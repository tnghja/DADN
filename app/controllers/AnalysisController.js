const axios = require("axios");
const adafruit = require("../config/adafruit.config");
const { Log } = require("../models/models")

async function fetchAdafruitData(feedName) {
    const url = `https://io.adafruit.com/api/v2/${adafruit.username}/feeds/${feedName}/data`;
    const headers = {
        'X-AIO-Key': adafruit.feedKey
    };
    try {
        const response = await axios.get(url, { headers });
        return response.data[0]; // Assuming we want the latest data
    } catch (error) {
        console.error(`Error fetching data from Adafruit IO feed ${feedName}:`, error);
        throw error;
    }
}

const storeData = async (req, res) => {
    try {
        let light, temperature, power, timestamp;
        for (const feedName of adafruit.feedNames ) {
            const adafruitData = await fetchAdafruitData(feedName);
            if (feedName === 'bbc-brightness') {
                light = adafruitData.value;
                timestamp = adafruitData.created_at;
            } else if (feedName === 'bbc-temp') {
                temperature = adafruitData.value;
                timestamp = adafruitData.created_at;
            } else if (feedName === 'bbc-movement') {
                power = adafruitData.value;
                timestamp = adafruitData.created_at;
            }
        }

        console.log(light, temperature, power, timestamp);
         Log.create({
            time: timestamp,
            light: light,
            temperature: temperature,
            power: power
        });

        console.log('Data stored successfully');
    } catch (error) {
        console.error('An error occurred:', error);
    }
};
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
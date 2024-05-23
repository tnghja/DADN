const {Log} = require("../models/models");
const getAllDeviceLog = async (device_id) => {
    try {
      const devices = await Log.find({ device_id: device_id });
      return devices;
    } catch (error) {
      console.error("Error fetching devices: ", error);
      throw error;
    }
  }

module.exports = {getAllDeviceLog}
const {Device ,EnergyLog, TempatureLog} = require("../models/models");

const getAllDeviceEnergyLog = async (device_id) => {
  try {
    // Fetch logs filtered by device_id
    const logs = await EnergyLog.find({ device_id: device_id });

    // Fetch device details and combine with logs
    const detailedLogs = await Promise.all(logs.map(async (log) => {
      const device = await Device.findOne({ device_id: log.device_id });
      return {
        name: device.deviceName,
        power: log.power,
        date: log.date
      };
    }));

    // Group logs by device name
    const groupedLogs = detailedLogs.reduce((acc, log) => {
      if (!acc[log.name]) {
        acc[log.name] = [];
      }
      acc[log.name].push({
        power: log.power,
        date: log.date
      });
      return acc;
    }, {});

    // Format the result as an array of objects with name and data
    const result = Object.keys(groupedLogs).map(name => ({
      name,
      data: groupedLogs[name]
    }));

    return result;
  } catch (error) {
    console.error("Error fetching device logs: ", error);
    throw error;
  }
};


const getAllDeviceTempatureLog = async (room_id) => {
  try {
    const logs = await TempatureLog.find({ room_id: room_id });
    const result = logs.map(log => ({
      date : log.date,
      data: log.tempature
    }));

    return result;
  } catch (error) {
    console.error("Error fetching device logs: ", error);
    throw error;
  }
};

const getAllDeviceLightLog = async (room_id) => {
  try {
    const logs = await LightLog.find({ room_id: room_id });
    const result = logs.map(log => ({
      date : log.date,
      data: log.light
    }));

    return result;
  } catch (error) {
    console.error("Error fetching device logs: ", error);
    throw error;
  }
};

module.exports = { getAllDeviceEnergyLog, getAllDeviceLightLog, getAllDeviceTempatureLog };

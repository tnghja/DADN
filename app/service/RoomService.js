// service/RoomService.js
const { Room, Device } = require("../models/models");

const getAllDevices = async (room_id) => {
  try {
    const devices = await Device.find({ room_id: room_id }).populate('room_id');
    return devices;
  } catch (error) {
    console.error("Error fetching devices: ", error);
    throw error;
  }
};

module.exports = { getAllDevices };

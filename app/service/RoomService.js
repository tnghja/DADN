// service/RoomService.js
const { Room, Device, Calendar } = require("../models/models");

const getAllDevices = async (room_id) => {
  try {
    const devices = await Device.find({ room_id: room_id });
    return devices;
  } catch (error) {
    console.error("Error fetching devices: ", error);
    throw error;
  }
};

const getAllEvents = async (room_id) => {
  try {
    const currentDate = new Date().toISOString();
    const currentDateString = currentDate.split('T')[0];
    const events = await Calendar.find({ room: room_id });
    const filteredEvents = events.filter(event => {
            const eventDateString = event.date.split('T')[0]; 
            return eventDateString > currentDateString;
        });
    return filteredEvents;
  } catch (error) {
    console.error("Error fetching devices: ", error);
    throw error;
  }
};

module.exports = { getAllDevices, getAllEvents };

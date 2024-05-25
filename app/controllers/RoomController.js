const roomService = require("../service/RoomService");

const getAllDevices =  async (req, res) => {
    const roomId = req.params.id;
    try {
      const devices = await roomService.getAllDevices(roomId);
      res.status(200).json(devices);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching devices' });
    }
  };
const getAllEvents = async (room_id) => {
  try {
    const currentDate = new Date();
    const events = await Calendar.find({ room: room_id, date: { $gt: currentDate } });
    return events;
  } catch (error) {
    console.error("Error fetching devices: ", error);
    throw error;
  }
};
module.exports = {
  getAllDevices
}
  
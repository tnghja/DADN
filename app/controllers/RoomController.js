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
const getAllEvents = async (req, res) => {
  try {
    const roomId = req.params.id;
    const events = await roomService.getAllEvents(roomId);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching events' });
  }
};
module.exports = {
  getAllDevices,getAllEvents
}
  
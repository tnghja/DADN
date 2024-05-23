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

module.exports = {
  getAllDevices
}
  
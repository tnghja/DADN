const logService = require("../service/LogService");

const getAllDeviceLog =  async (req, res) => {
    const deviceId = req.params.id;
    try {
      const devices = await logService.getAllDeviceLog(deviceId);
      res.status(200).json(devices);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching devices' });
    }
  };

module.exports = {getAllDeviceLog}
  
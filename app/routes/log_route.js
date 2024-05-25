const express = require('express')
const router = express.Router()

const logController = require('../controllers/LogController');

router.get('/:id', logController.getAllDeviceEnergyLog)
router.get('/:id/tempature', logController.getAllDeviceTempatureLog)
router.get('/:id/light', logController.getAllDeviceLightLog)
module.exports = router


const express = require('express')
const router = express.Router()

const logController = require('../controllers/LogController');

router.get('/:id', logController.getAllDeviceLog)

module.exports = router


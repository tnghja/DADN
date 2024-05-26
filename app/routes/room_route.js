const express = require('express')
const router = express.Router()

const roomController = require('../controllers/RoomController');

router.get('/:id', roomController.getAllDevices)
router.get('/:id/event', roomController.getAllEvents)
module.exports = router


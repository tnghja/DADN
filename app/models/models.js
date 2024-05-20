const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const AreaSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const RoomSchema = new mongoose.Schema({
  room_id: { type: String, required: true },
  area_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Area' },
});

const DeviceSchema = new mongoose.Schema({
  pin: { type: String, required: true },
  type: { type: String, required: true },
  deviceName: { type: String, required: true },
  username: { type: String, required: true },
  room_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
});

const LightSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ada_id: { type: String, required: true },
  status: { type: Boolean, default: false },
  area_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Area' },
  is_applied_timer: { type: Boolean, default: false },
  is_applied_sensor: { type: Boolean, default: false },
});

const ScheduleSchema = new mongoose.Schema({
  on_time: { type: String, required: true },
  off_time: { type: String, required: true },
  light_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Light' },
});

const LightTimerSchema = new mongoose.Schema({
  on_time: { type: String, required: true },
  off_time: { type: String, required: true },
  light_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Light' },
});

const LogSchema = new mongoose.Schema({
  temperature: Number,
  light: Number,
  power: Number,
  date: { type: Date, default: Date.now },
  time: { type: String, required: true },
  room_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
});



const Account = mongoose.model("Account", AccountSchema);
const Device = mongoose.model("Device", DeviceSchema);
const Room = mongoose.model("Room", RoomSchema);
const Area = mongoose.model("Area", AreaSchema);
const Light = mongoose.model("Light", LightSchema);
const LightTimer = mongoose.model("LightTimer", LightTimerSchema);
const Log = mongoose.model("Log", LogSchema);

module.exports = {
  Account,
  Device,
  Room,
  Area,
  Light,
  LightTimer,
  Log,
};

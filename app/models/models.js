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
  device_id : { type: String, required: true },
  type: { type: String, required: true },
  deviceName: { type: String, required: true },
  room_id: { type: String, ref: 'Room' },
  status: { type: Boolean, default: false },
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

const EnergyLogSchema = new mongoose.Schema({
  power: Number,
  date: { type: Date, default: Date.now },
  time: { type: String, required: true },
  room_id: { type: String, ref: 'Room' },
  device_id: { type: String, ref: 'Device' },
});

const TemperatureLogSchema = new mongoose.Schema({
  temperature: Number,
  date: { type: Date, default: Date.now },
  time: { type: String, required: true },
  room_id: { type: String, ref: 'Room' },
  device_id: { type: String, ref: 'Device' },
});

const LightLogSchema = new mongoose.Schema({
  light: Number,
  date: { type: Date, default: Date.now },
  time: { type: String, required: true },
  room_id: { type: String, ref: 'Room' },
  device_id: { type: String, ref: 'Device' },
});

const calendarSchema = new mongoose.Schema({
  id: Number,
  title: String,
  room: String,
  building: String,
  date: String
})



const Account = mongoose.model("Account", AccountSchema);
const Device = mongoose.model("Device", DeviceSchema);
const Room = mongoose.model("Room", RoomSchema);
const Area = mongoose.model("Area", AreaSchema);
const LightLog = mongoose.model("LightLog", LightLogSchema);
const LightTimer = mongoose.model("LightTimer", LightTimerSchema);
const EnergyLog = mongoose.model("EnergyLog", EnergyLogSchema);
const TempatureLog = mongoose.model("TempatureLog", TemperatureLogSchema);
const Calendar = mongoose.model("Calendar", calendarSchema);
module.exports = {
  Account,
  Device,
  Room,
  Area,
  LightTimer,
  LightLog,
  EnergyLog,
  TempatureLog,
  Calendar
};

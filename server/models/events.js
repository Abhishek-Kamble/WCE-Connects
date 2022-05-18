const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
  title: { type: String, required: true },
  invocation: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  link: { type: String },
  banner: {type: String},
  contactPerson: String,
  contactNumber: String,
  contactEmail: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  }
})

var eventsBody = mongoose.model('events', eventsSchema);

module.exports = eventsBody;
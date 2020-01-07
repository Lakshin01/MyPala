const mongoose = require('mongoose');


//create Schema

const PointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });

module.exports = Location = mongoose.model('location', PointSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
});

module.exports = Charity = mongoose.model("charity", CharitySchema);

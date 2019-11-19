const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  address: {
    streetName: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipCode: {
      type: Number,
      required: true
    }
  },
  dateJoined: {
    type: Date,
    default: Date.now
  },
  tickets: {
    type: [Object]
  },
  charitiesPledged: {
    type: [Object]
  },
  admin: {
    type: Boolean
  }
});

module.exports = User = mongoose.model("user", UserSchema);

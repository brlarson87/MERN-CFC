const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PrizePoolSchema = new Schema({
  car: {
    type: String,
    required: true
  },
  carDetails: {
    type: String,
    required: true
  },
  // ******** ticketPool will change to a Number **********
  ticketPool: {
    type: Number,
    default: 0
  },
  prizeTotal: {
    type: Number,
    required: true
  },
  charityPool: {
    type: [Object]
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  pictures: {
    type: [String]
  },
  secondaryPrizes: {
    places: {
      type: Number,
      required: true
    },
    prize: {
      type: String,
      required: true
    }
  },
  ticketsPrize: {
    places: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  charityAmount: {
    type: Number
  },
  active: {
    type: Boolean
  },
  charityPledgeAmount: {
    type: Number
  }
});

module.exports = Prize = mongoose.model("prize", PrizePoolSchema);

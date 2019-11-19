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
  ticketPool: {
    type: [Object]
  },
  prizeTotal: {
    type: Number,
    required: true
  },
  charityPool: [
    {
      type: Schema.Types.ObjectId,
      ref: "charities"
    }
  ],
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

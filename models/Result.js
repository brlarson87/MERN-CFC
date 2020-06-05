// **************** RESULT MODEL ************************

// ******* prizeId reference to the prizePool ********
// ******* grandPrize { userId, ticketNumber } *******
// ******* secondaryPrizes [{ userId, ticketNumber }] *******
// ******* ticketPrizes [{ userId, ticketNumber}]********
// ******* charityWinner {charityId, name, userName, userId}********

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  prizeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  grandPrize: {
    type: Object,
    required: true,
  },
  secondaryPrizes: {
    type: [Object],
    required: true,
  },
  ticketPrizes: {
    type: [Object],
    required: true,
  },
  charityWinner: {
    type: Object,
  },
  drawingDate: {
    type: Date,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = Result = mongoose.model("result", ResultSchema);

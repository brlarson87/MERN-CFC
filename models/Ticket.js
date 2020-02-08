// **************** TICKET MODEL ************************

// ******* ObjectID reference to the prizePool it is entered in ********
// ******* ObjectID reference to the user that entered it *******
// ******* DatePurchased *******
// ******* TicketNumber which will be randomly chosen. When a random number for a pool is picked the
//         userId will be found from a query of the poolID and ticketNumber match *********

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  prizeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  ticketNumber: {
    type: Number,
    required: true
  },
  datePurchased: {
    type: Date,
    required: true
  }
});

module.exports = Ticket = mongoose.model("ticket", TicketSchema);

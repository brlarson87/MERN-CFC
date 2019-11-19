const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const Prize = require("../../models/PrizePool");
const { ObjectId } = require("mongodb");

router.put(
  "/enterTickets",
  auth,
  [
    check("amount", "Amount is required").exists(),
    check("prizeId", "prizeId is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(422).json({ errors: errors.array() });
    }
    try {
      let prize = await Prize.findById(req.body.prizeId);

      let user = await User.findById(req.user.id);

      console.log(prize.car);
      console.log(user.firstName);

      let counter = 0;

      let ticketPoolArr = [];
      let userTicketArr = [];

      while (counter < req.body.amount) {
        if (!user.tickets[0].prizeId) {
          let tn = prize.ticketPool.length + 1 || 1;
          const newTicket = {
            prizeId: req.body.prizeId,
            userId: new ObjectId(user._id),
            ticketNumber: tn,
            datePurchased: user.tickets[0].datePurchased
          };
          user.tickets.splice(0, 1);
          user.tickets.push(newTicket);
          prize.ticketPool.push(newTicket);

          //Load arrays to send back instead of full database arrays
          ticketPoolArr.push(newTicket);
          userTicketArr.push(newTicket);

          await user.save();
          await prize.save();
          counter++;
        }
      }

      res.json({ ticketPool: ticketPoolArr, userTickets: userTicketArr });
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: error });
    }
  }
);

module.exports = router;

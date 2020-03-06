const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const Prize = require("../../models/PrizePool");
const Ticket = require("../../models/Ticket");
const Charity = require("../../models/Charity");
const { ObjectId } = require("mongodb");

// @route   Put api/interactive/enterTickets
// @desc    Modify Users ticket array to reference pool entered and add a reference of the new ticket  //          Prize document chosen
// @access  Auth
router.put(
  "/enterTickets",
  auth,
  [
    check("amount", "Amount is required").exists(),
    check("prizeId", "prizeId is required").exists(),
    check("activeUserTickets", "Active number of tickets is required").exists()
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
      let startingIndex = user.tickets.length - req.body.activeUserTickets;

      for (let i = startingIndex; i < startingIndex + req.body.amount; i++) {
        let ticketNumber = prize.ticketPool + 1;

        let overRidingTicket = {
          prizeId: prize._id,
          userId: req.user.id,
          ticketNumber,
          datePurchased: user.tickets[i].datePurchased
        };
        //console.log(overRidingTicket);

        user.tickets.set(i, overRidingTicket);

        await user.save();
        let ticket = new Ticket(overRidingTicket);
        prize.ticketPool += 1;
        await ticket.save();
        await prize.save();
      }

      res.json({ prize, user });
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: error });
    }
  }
);

// @route   PUT api/interactive/enterCharity
// @desc    Enters charity to PrizePool as an object with CharityId and UserID
// @access  Auth route
router.put("/enterCharity", auth, async (req, res) => {
  const { prizeId, charityId } = req.body;
  const userId = req.user.id;

  try {
    let prize = await Prize.findById(ObjectId(req.body.prizeId));

    let user = await User.findById(req.user.id);

    let charity = await Charity.findById(req.body.charityId);

    let charityUser = {
      userId,
      charityId,
      name: charity.name
    };

    let prizeCharity = {
      prizeId,
      charityId
    };

    console.log(charityUser);
    console.log(prizeCharity);

    prize.charityPool.push(charityUser);
    await prize.save();
    user.charitiesPledged.push(prizeCharity);
    await user.save();

    res.json({ prize, user });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error });
  }
});

module.exports = router;

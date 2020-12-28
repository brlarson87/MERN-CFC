const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const Prize = require("../../models/PrizePool");
const Ticket = require("../../models/Ticket");
const Charity = require("../../models/Charity");
const Result = require("../../models/Result");
//const { ObjectId } = require("mongodb");

//UTILS
const raffle = require("../../utils/raffle");

// @route   Put api/interactive/enterTickets
// @desc    Modify Users ticket array to reference pool entered and add a reference of the new ticket  //          Prize document chosen
// @access  Auth
router.put(
  "/enterTickets",
  auth,
  [
    check("amount", "Amount is required").exists(),
    check("prizeId", "prizeId is required").exists(),
    check("activeUserTickets", "Active number of tickets is required").exists(),
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

      for (
        let i = startingIndex;
        i < startingIndex + req.body.amount &&
        prize.ticketPool < prize.prizeTotal;
        i++
      ) {
        let ticketNumber = prize.ticketPool + 1;

        let overRidingTicket = {
          prizeId: prize._id,
          userId: req.user.id,
          ticketNumber,
          datePurchased: user.tickets[i].datePurchased,
        };

        user.tickets.set(i, overRidingTicket);

        await user.save();
        let ticket = new Ticket(overRidingTicket);
        prize.ticketPool += 1;
        await ticket.save();
        await prize.save();
      }

      //*****************************************************************//
      //************* CREATE RESULT IF PRIZEPOOL FILLS*******************//
      //*****************************************************************//
      if (prize.ticketPool === prize.prizeTotal) {
        //
        // CALLS RAFFLE FUNCTION TO RETURN AN ARRAY OF NUMBERS IN SEQUENCE [GRANDPRIZE, SECONDARYPRIZE, TICKETSPRIZE, CHARITYWINNER]
        // EXAMPLE RETURN [2890, [123,12345,5,555,76], [1, 345, 123, 5674], {userId: '123455', charityId: '1746d8fg', name: 'charity name'}]
        //
        let resultSet = raffle(
          prize.prizeTotal,
          prize.secondaryPrizes.places,
          prize.ticketsPrize.places,
          prize.charityPool
        );

        // RESULT OBJECT INIT
        let resultObject = {
          prizeId: prize._id,
          grandPrize: undefined,
          secondaryPrizes: [],
          ticketPrizes: [],
          drawingDate: Date.now(),
        };

        // GRAND PRIZES
        let grandPrizeWinner = await Ticket.findOne({
          prizeId: prize._id,
          ticketNumber: resultSet[0],
        }).select("userId ticketNumber");
        resultObject.grandPrize = grandPrizeWinner;

        // SECONDARY PRIZES
        for (let i = 0; i < prize.secondaryPrizes.places; i++) {
          let secondaryPrizeWinners = await Ticket.findOne({
            prizeId: prize._id,
            ticketNumber: resultSet[1][i],
          }).select("userId ticketNumber");
          resultObject.secondaryPrizes.push(secondaryPrizeWinners);
        }

        // TICKET PRIZES
        for (let i = 0; i < prize.ticketsPrize.places; i++) {
          let ticketPrizeWinners = await Ticket.findOne({
            prizeId: prize._id,
            ticketNumber: resultSet[2][i],
          }).select("userId ticketNumber");
          resultObject.ticketPrizes.push(ticketPrizeWinners);
        }

        // CHARITY WINNER
        // resultObject.charityWinner = resultSet[3];

        const result = new Result(resultObject);
        await result.save();
      }
      //*****************************************************************//
      //*****************************************************************//
      //*****************************************************************//

      let allActivePrizes = await Prize.find({ active: true });

      res.json({ prize, user, allActivePrizes });
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

  //USE CONST VARIABLES ^^^
  try {
    let prize = await Prize.findById(req.body.prizeId);

    let user = await User.findById(req.user.id);

    let charity = await Charity.findById(req.body.charityId);

    let charityUser = {
      userId,
      charityId,
      name: charity.name,
    };

    let prizeCharity = {
      prizeId,
      charityId,
      name: charity.name,
    };

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

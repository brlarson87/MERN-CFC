const express = require("express");
const router = express.Router();
const admin = require("../../middleware/admin");
const { check, validationResult } = require("express-validator");
const Prize = require("../../models/PrizePool");

// @route POST api/prizes
// @desc Add Prizepool
// @access private admin
router.post(
  "/",
  admin,
  [
    check("car", "Car is required").exists(),
    check("carDetails", "Car details are required").exists(),
    check("prizeTotal", "Prize total is required").exists(),
    check("pictures", "Pictures are required").exists(),
    check("secondaryPrizes.places", "Secondary places is required").exists(),
    check("secondaryPrizes.prize", "Secondary prize is required").exists(),
    check("ticketsPrize.places", "Ticket prize places is required").exists(),
    check("ticketsPrize.amount", "Amount of tickets is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const prizePool = ({
      car,
      carDetails,
      prizeTotal,
      pictures,
      secondaryPrizes: { places, prize },
      ticketsPrize: { places, amount },
      active,
      charityPledgeAmount
    } = req.body);

    try {
      const prize = new Prize(prizePool);

      await prize.save();

      res.json({ prize });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
);

// @route GET api/prizes
// @desc Get all Prizes
// @access Public
router.get("/", async (req, res) => {
  try {
    const prizes = await Prize.find({ active: true });
    res.json(prizes);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// @route GET api/prizes/:id
// @desc Get single prize
// @access Public
router.get("/:id", async (req, res) => {
  try {
    const prize = await Prize.find({ _id: req.params.id });
    res.json(prize);
  } catch (error) {
    console.log("here");
    res.status(400).json({ error });
  }
});

// @route delete api/ticketsPool/:id
// @desc clear prize tickets
// @access Development
router.delete("/ticketsPool/:id", async (req, res) => {
  try {
    let prize = await Prize.findById(req.params.id);

    prize.ticketPool = [];

    await prize.save();

    res.json(prize);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;

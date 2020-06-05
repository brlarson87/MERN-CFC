const express = require("express");
const router = express.Router();
const Result = require("../../models/Result");

router.get("/:id", async (req, res) => {
  try {
    const result = await Result.find({ prizeId: req.params.id });

    const newResult = {
      grandPrizeTicketNumber: result[0].grandPrize.ticketNumber,
      drawingTime: result[0].drawingDate,
      secondaryPrizes: result[0].secondaryPrizes.map(
        (prize) => prize.ticketNumber
      ),
      ticketPrizes: result[0].ticketPrizes.map((p) => p.ticketNumber),
    };

    res.json(newResult);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const admin = require("../../middleware/admin");
const { check, validationResult } = require("express-validator");
const Charity = require("../../models/Charity");

router.post(
  "/",
  admin,
  [
    check("name", "Name is required").exists(),
    check("url", "Url is required").exists(),
    check("desc", "Description is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { name, url, desc } = req.body;

    try {
      const charity = new Charity({ name, url, desc });
      await charity.save();
      res.status(200).json(charity.name);
    } catch (error) {
      console.log("error");
      res.status(404).json({ error: "could not create new charity" });
    }
  }
);

module.exports = router;

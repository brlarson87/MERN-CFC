const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../../models/User");
const setTicket = require("../../utils/setTicket");

// router.get("/", (req, res) => {
//   console.log("connected");
//   res.json({ name: "Blake" });
// });

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  "/",
  [
    check("firstName", "First name is required").exists(),
    check("lastName", "Last name is required").exists(),
    check("password", "Password is required").exists(),
    check("address.streetName", "Street name is required").exists(),
    check("address.city", "City is required").exists(),
    check("address.state", "State is required").exists(),
    check("address.zipCode", "Zipcode is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      email,
      password,
      address: { streetName, city, state, zipCode }
    } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(401).json({ msg: "User already exists " });
      }

      user = new User({
        firstName,
        lastName,
        email,
        password,
        address: {
          streetName,
          city,
          state,
          zipCode
        }
      });

      const { admin } = req.body;

      if (admin) {
        user.admin = true;
      } else {
        user.admin = false;
      }

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user._id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) res.json({ err });
          res.json({ token });
        }
      );
    } catch (error) {
      res.status(400).json({ error });
    }
  }
);

// @route   POST api/users/me/purchaseTickets
// @desc    Buy tickets
// @access  Private
router.post(
  "/me/purchaseTickets",
  auth,
  [check("amount", "amount is required").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const ticketAmount = req.body.amount;

    try {
      let user = await User.findById({ _id: req.user.id });

      for (let i = 0; i < ticketAmount; i++) {
        user.tickets.push(setTicket(user._id));
        await user.save();
      }

      res.json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
);

// Development Route.
// Will need Prize Id in the future when pool is ended
router.delete("/deleteTickets", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id);

    user.tickets = [];

    await user.save();

    res.json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;

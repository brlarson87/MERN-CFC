const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// MODELS
const User = require("../../models/User");

// @route   GET api/auth
// @desc    Return logged in user
// @access  Public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById({ _id: req.user.id }).select("-password");
    res.json(user);
  } catch (error) {
    res.status(400);
  }
});

// @route   POST api/auth
// @desc    Login and return User
// @access  Public
router.post(
  "/",
  [
    check("email", "Email is required"),
    check("password", "Password is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const payload = {
        user: {
          id: user._id,
        },
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
      res.status(400).json({ msg: error.message });
    }
  }
);

module.exports = router;

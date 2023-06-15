const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const { body } = require('express-validator');

//REGISTER
router.post("/register", async (req, res) => {

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});


//LOGIN
router.post("/login",body('username').notEmpty().withMessage("Username required"), body('password').notEmpty().withMessage("Password required") ,async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.errors });
  }

  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      return res.status(404).json({ username: "User not found" });
    }
    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        const {password, ...others} = user._doc;
        res.status(200).json(others);
      } else {
        return res.status(400).json({ password: "Wrong password" });
      }
    });
  }
  );
});

module.exports = router;
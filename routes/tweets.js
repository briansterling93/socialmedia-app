const express = require("express");
const router = new express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const config = require("dotenv").config();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/User.js");
const Tweets = require("../models/Tweets.js");
const Sequelize = require("sequelize");

//GET
//get all user tweets
router.get("/", async (req, res) => {
  try {
    const allTweets = await Tweets.findAll({
      attributes: ["id", "text", "likes", "user_id", "createdAt"],
    });

    res.json({ allTweets });
  } catch (error) {
    console.log(error);
  }
});

//POST
//post new user tweet
router.post(
  "/newtweet",
  [
    check("text", "text is required").not().isEmpty(),
    check("user_id", "item's link/path is required").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      } else {
        let { text, likes, user_id } = req.body;

        await Tweets.create({
          //create new item
          text: text,
          likes: likes,
          user_id: user_id,
        });

        res.send(req.body);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;

const express = require("express");
const router = new express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const config = require("dotenv").config();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/User.js");
const Sequelize = require("sequelize");

//Find all users
//GET request
router.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll({
      attributes: ["first_name", "display_name", "email_address", "createdAt"],
    });

    res.json({ allUsers });
  } catch (error) {
    console.log(error);
  }
});

//Create New User
//POST Request
router.post(
  "/newuser",
  [
    check("first_name", "name is required").not().isEmpty(),
    check("display_name", "display name is required").not().isEmpty(),
    check("email_address", "email is required").isEmail(),
    check("password", "password is required").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    } else
      try {
        let { first_name, display_name, email_address, password } = req.body;

        let existingEmail = await User.findOne({
          where: {
            email_address: email_address,
          },
        });

        let existingDisplayname = await User.findOne({
          where: {
            display_name: display_name,
          },
        });

        if (existingEmail || existingDisplayname) {
          if (existingDisplayname) {
            return res.send("Display name already in use");
          } else {
            return res.send("Email address already in use");
          }
        } else {
          const salt = await bcrypt.genSalt(10);

          const newUser = await User.create({
            first_name,
            display_name,
            email_address,
            password: await bcrypt.hash(password, salt),
          });

          const payload = {
            user: {
              id: newUser.id,
            },
          };

          jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
              if (err) {
                throw err;
              }
              res.json({ token });
            }
          );
        }
      } catch (error) {
        console.log(error);
        res.status(404);
      }
  }
);

//Log in to user account
//POST
router.post(
  "/login",
  [
    (check("email_address", "email is required").isEmail(),
    check("password", "password is required").not().isEmpty()),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    } else
      try {
        let { email_address, password } = req.body;

        const findUser = await User.findOne({
          where: {
            email_address: email_address,
          },
        });

        if (!findUser) {
          return res.send("Invalid credentials");
        } else {
          const credentialCompare = await bcrypt.compare(
            password,
            findUser.password
          );

          if (!credentialCompare) {
            res.json("invalid credentials");
          } else {
            const payload = {
              user: {
                id: findUser.id,
              },
            };

            jwt.sign(
              payload,
              process.env.JWT_SECRET,
              { expiresIn: 3600 },
              (error, token) => {
                if (error) res.json({ error: "Credential Error" });
                else {
                  res.json({ token });
                }
              }
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
  }
);

module.exports = router;

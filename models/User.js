const Sequelize = require("sequelize");
const db = require("../config/database.js");

const User = db.define("users", {
  first_name: {
    type: Sequelize.STRING,
  },
  display_name: {
    type: Sequelize.STRING,
  },
  email_address: {
    type: Sequelize.STRING,
  },
  tweets: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

module.exports = User;

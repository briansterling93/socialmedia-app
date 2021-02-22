const Sequelize = require("sequelize");
const db = require("../config/database.js");

const Likes = db.define("likes", {
  text: {
    type: Sequelize.STRING,
  },
  tweet_id: {
    type: Sequelize.STRING,
  },
});

module.exports = Likes;

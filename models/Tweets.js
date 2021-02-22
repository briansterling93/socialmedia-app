const Sequelize = require("sequelize");
const db = require("../config/database.js");

const Tweets = db.define("tweets", {
  text: {
    type: Sequelize.STRING,
  },
  likes: {
    type: Sequelize.NUMBER,
  },
  user_id: {
    type: Sequelize.NUMBER,
  },
});

module.exports = Tweets;

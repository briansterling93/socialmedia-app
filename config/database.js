const Sequelize = require("sequelize");

module.exports = new Sequelize(
  "sportsconnect",
  "root",
  "password",
  {
    host: "localhost",
    dialect: "mysql",
  },
  {
    production: {
      use_env_variable: "DATABASE_URL",
    },
  }
);

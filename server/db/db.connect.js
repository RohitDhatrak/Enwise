const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
    }
);

sequelize
    .authenticate()
    .then(() => console.log("Connected to the DB"))
    .catch(() => console.log("Error connecting to the DB"));

module.exports = sequelize;

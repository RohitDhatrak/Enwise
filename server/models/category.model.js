const Sequelize = require("sequelize");
const sequelize = require("../db/db.connect");

const Category = sequelize.define("category", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
});

module.exports = Category;

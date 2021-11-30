import Sequelize from "sequelize";
import { sequelize } from "../db/db.connect";

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    saveHistory: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
});

module.exports = User;

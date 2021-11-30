import Sequelize from "sequelize";
import { sequelize } from "../db/db.connect";
const User = require("./user.model");
const Video = require("./video.model");

const History = sequelize.define("history", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    },
});

Video.hasMany(History);
History.belongsTo(Video);
User.hasMany(History);
History.belongsTo(User);

module.exports = History;

import Sequelize from "sequelize";
import { sequelize } from "../db/db.connect";
const User = require("./user.model");
const Video = require("./video.model");

const Liked = sequelize.define("like", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    },
});

Video.hasMany(Liked);
Liked.belongsTo(Video);
User.hasMany(Liked);
Liked.belongsTo(User);

module.exports = Liked;

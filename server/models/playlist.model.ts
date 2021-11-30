import Sequelize from "sequelize";
import { sequelize } from "../db/db.connect";
const User = require("./user.model");

const Playlist = sequelize.define("playlist", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey: true,
    },
    thumbnailId: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    videoCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

User.hasMany(Playlist);
Playlist.belongsTo(User);

module.exports = Playlist;

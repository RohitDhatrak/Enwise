const Sequelize = require("sequelize");
const sequelize = require("../db/db.connect");
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
});

User.hasMany(Playlist);
Playlist.belongsTo(User);

module.exports = Playlist;

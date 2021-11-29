const Sequelize = require("sequelize");
const sequelize = require("../db/db.connect");
const User = require("./user.model");
const Video = require("./video.model");

const WatchLater = sequelize.define("watchlater", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    },
});

Video.hasMany(WatchLater);
WatchLater.belongsTo(Video);
User.hasMany(WatchLater);
WatchLater.belongsTo(User);

module.exports = WatchLater;

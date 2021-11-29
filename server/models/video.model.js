const Sequelize = require("sequelize");
const sequelize = require("../db/db.connect");

const Video = sequelize.define("video", {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    creator: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
    },
});

module.exports = Video;

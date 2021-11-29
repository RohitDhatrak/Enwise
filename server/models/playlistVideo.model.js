const Sequelize = require("sequelize");
const sequelize = require("../db/db.connect");
const Playlist = require("./playlist.model");
const Video = require("./video.model");

const PlaylistVideo = sequelize.define("playlistVideo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey: true,
    },
});

Playlist.hasMany(PlaylistVideo);
PlaylistVideo.belongsTo(Playlist);
Video.hasMany(PlaylistVideo);
PlaylistVideo.belongsTo(Video);

module.exports = PlaylistVideo;

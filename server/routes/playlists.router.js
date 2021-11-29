const express = require("express");
const router = express.Router();
const Playlist = require("../models/playlist.model");
const PlaylistVideo = require("../models/playlistVideo.model");

router
    .route("/")
    .get(async (req, res) => {
        try {
            const playlists = await Playlist.findAll({ where: { userId } });
            res.status(200).json({ playlists });
        } catch (err) {
            res.status(500).json({
                err,
                message: "Couldn't get the playlists",
            });
        }
    })
    .post(async (req, res) => {
        try {
            const { userId, title } = req.body;
            const playlist = await Playlist.create({ userId, title });
            res.status(200).json({ playlist });
        } catch (err) {
            res.status(500).json({
                err,
                message: "Couldn't create the playlist",
            });
        }
    })
    .delete(async (req, res) => {
        try {
            const { userId, playlistId } = req.body;
            const isDeleted = Playlist.destroy({ id: playlistId, userId });
            await PlaylistVideo.destroy({ playlistId: null });
            res.status(200).json({ isDeleted: !!isDeleted });
        } catch (err) {
            res.status(500).json({
                err,
                message: "Couldn't delete the playlist",
            });
        }
    });

module.exports = router;

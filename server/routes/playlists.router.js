const express = require("express");
const router = express.Router();
const Playlist = require("../models/playlist.model");
const PlaylistVideo = require("../models/playlistVideo.model");

router.route("/:userId").get(async (req, res) => {
    try {
        const { userId } = req.params;
        const playlists = await Playlist.findAll({ where: { userId } });
        res.status(200).json(playlists);
    } catch (err) {
        res.status(500).json({
            message: "Couldn't get the playlists",
        });
    }
});

router
    .route("/")
    .post(async (req, res) => {
        try {
            const { userId, title } = req.body;
            const playlist = await Playlist.create({
                userId,
                title,
                videoCount: 0,
            });
            res.status(200).json(playlist);
        } catch (err) {
            res.status(500).json({
                message: "Couldn't create the playlist",
            });
        }
    })
    .delete(async (req, res) => {
        try {
            const { userId, playlistId } = req.body;
            const playlist = await Playlist.findOne({
                where: { id: playlistId, userId },
            });
            await Playlist.destroy({
                where: {
                    id: playlistId,
                    userId,
                },
            });
            PlaylistVideo.destroy({ where: { playlistId: null } });
            res.status(200).json(playlist);
        } catch (err) {
            res.status(500).json({
                message: "Couldn't delete the playlist",
            });
        }
    });

module.exports = router;

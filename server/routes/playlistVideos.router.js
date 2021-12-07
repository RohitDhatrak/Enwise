const express = require("express");
const router = express.Router();
const Playlist = require("../models/playlist.model");
const PlaylistVideo = require("../models/playlistVideo.model");
const Video = require("../models/video.model");

router
    .route("/:playlistId")
    .get(async (req, res) => {
        try {
            const { playlistId } = req.params;
            const playlistVideos = await PlaylistVideo.findAll({
                include: [Video],
                where: { playlistId },
            });
            const playlist = await Playlist.findOne({
                where: { id: playlistId },
            });
            if (playlist.videoCount !== playlistVideos.length) {
                if (playlistVideos.length === 0) {
                    await Playlist.update(
                        { videoCount: 0, thumbnailId: null },
                        { where: { id: playlistId } }
                    );
                } else {
                    await Playlist.update(
                        { videoCount: playlistVideos.length },
                        { where: { id: playlistId } }
                    );
                }
            }
            res.status(200).json(playlistVideos);
        } catch (err) {
            res.status(500).json({
                message: "Couldn't get the videos from the playlist",
            });
        }
    })
    .post(async (req, res) => {
        try {
            const { playlistId } = req.params;
            const { videoId, userId } = req.body;
            await PlaylistVideo.create({
                playlistId,
                videoId,
                userId,
            });
            const playlist = await Playlist.findOne({
                where: { id: playlistId },
            });
            if (playlist.videoCount === 0) {
                await Playlist.update(
                    { videoCount: 1, thumbnailId: videoId },
                    { where: { id: playlistId } }
                );
            } else {
                await Playlist.update(
                    { videoCount: playlist.videoCount + 1 },
                    { where: { id: playlistId } }
                );
            }
            const playlists = await Playlist.findAll({ where: { userId } });
            res.status(200).json(playlists);
        } catch (err) {
            res.status(500).json({
                message: "Couldn't add video to the playlist",
            });
        }
    })
    .delete(async (req, res) => {
        try {
            const { playlistId } = req.params;
            const { videoId, userId } = req.body;
            await PlaylistVideo.destroy({
                where: {
                    playlistId,
                    videoId,
                },
            });
            const playlist = await Playlist.findOne({
                where: { id: playlistId },
            });
            if (playlist.videoCount === 1) {
                await Playlist.update(
                    { videoCount: 0, thumbnailId: null },
                    { where: { id: playlistId } }
                );
            } else {
                await Playlist.update(
                    { videoCount: playlist.videoCount - 1 },
                    { where: { id: playlistId } }
                );
            }
            const playlists = await Playlist.findAll({ where: { userId } });
            res.status(200).json(playlists);
        } catch (err) {
            res.status(500).json({
                message: "Couldn't delete video from the playlist",
            });
        }
    });

router.route("/:userId/:videoId").get(async (req, res) => {
    try {
        const { userId, videoId } = req.params;
        const playlistVideos = await PlaylistVideo.findAll({
            where: { userId, videoId },
        });
        res.status(200).json(playlistVideos);
    } catch (err) {
        res.status(500).json({
            message: "Couldn't get the videos from the playlist",
        });
    }
});

module.exports = router;

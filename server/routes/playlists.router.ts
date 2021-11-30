import express from "express";
const router = express.Router();
const Playlist = require("../models/playlist.model");
const PlaylistVideo = require("../models/playlistVideo.model");
const Video = require("../models/video.model");

router
    .route("/")
    .get(async (req, res) => {
        try {
            const { userId } = req.body;
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
            const playlist = await Playlist.create({
                userId,
                title,
                videoCount: 0,
            });
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
            const isDeleted = await Playlist.destroy({
                where: {
                    id: playlistId,
                    userId,
                },
            });
            PlaylistVideo.destroy({ where: { playlistId: null } });
            res.status(200).json({ isDeleted: !!isDeleted });
        } catch (err) {
            res.status(500).json({
                err,
                message: "Couldn't delete the playlist",
            });
        }
    });

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
            res.status(200).json({ playlist: playlistVideos });
        } catch (err) {
            res.status(500).json({
                err,
                message: "Couldn't get the videos from the playlist",
            });
        }
    })
    .post(async (req, res) => {
        try {
            const { playlistId } = req.params;
            const { videoId } = req.body;
            const video = await PlaylistVideo.create({ playlistId, videoId });
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
            res.status(200).json({ video });
        } catch (err) {
            res.status(500).json({
                err,
                message: "Couldn't add video to the playlist",
            });
        }
    })
    .delete(async (req, res) => {
        try {
            const { playlistId } = req.params;
            const { videoId } = req.body;
            const isDeleted = await PlaylistVideo.destroy({
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
            res.status(200).json({ isDeleted: !!isDeleted });
        } catch (err) {
            res.status(500).json({
                err,
                message: "Couldn't delete video from the playlist",
            });
        }
    });

module.exports = router;

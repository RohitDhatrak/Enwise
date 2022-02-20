const express = require("express");
const router = express.Router();
const Video = require("../models/video.model");
const History = require("../models/history.model");
const Liked = require("../models/liked.model");
const WatchLater = require("../models/watchLater.model");
const PlaylistVideo = require("../models/playlistVideo.model");
const { videosIndex } = require("../utils/generateSearchIndex");

router
    .route("/")
    .get(async (req, res) => {
        try {
            const videos = await Video.findAll();
            res.status(200).json(videos);
        } catch (err) {
            res.status(500).json({ message: "Couldn't find videos" });
        }
    })
    .post(async (req, res) => {
        try {
            const { videoId, title, creator, category } = req.body;
            const video = await Video.create({
                id: videoId,
                title,
                creator,
                category,
            });
            res.status(200).json({ video });
        } catch (err) {
            res.status(500).json({
                message: "Couldn't add video to the database",
            });
        }
    })
    .delete(async (req, res) => {
        try {
            const { videoId } = req.body;
            const isDeleted = await Video.destroy({ where: { id: videoId } });
            History.destroy({ where: { videoId: null } });
            Liked.destroy({ where: { videoId: null } });
            WatchLater.destroy({ where: { videoId: null } });
            PlaylistVideo.destroy({ where: { videoId: null } });
            res.status(200).json({ isDeleted: !!isDeleted });
        } catch (err) {
            res.status(500).json({
                message: "Erorr while removing the video from the database",
            });
        }
    });

router.route("/search").post(async (req, res) => {
    const { query } = req.body;
    const results = videosIndex.search({ query, suggest: true });
    const videos = [];
    for (const result of results) {
        const video = await Video.findOne({ where: { id: result } });
        videos.push(video);
    }
    res.status(200).json(videos);
});

module.exports = router;

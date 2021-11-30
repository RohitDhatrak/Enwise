import express from "express";
const router = express.Router();
const WatchLater = require("../models/watchLater.model");
const Video = require("../models/video.model");

router
    .route("/")
    .get(async (req, res) => {
        try {
            const { userId } = req.body;
            const watchLater = await WatchLater.findAll({
                include: [Video],
                where: { userId },
            });
            res.status(200).json({ watchLater });
        } catch (err) {
            res.status(500).json({
                err,
                message:
                    "There was some error while getting watch later playlist",
            });
        }
    })
    .post(async (req, res) => {
        try {
            const { userId, videoId } = req.body;
            const watchLater = await WatchLater.create({ userId, videoId });
            res.status(200).json({ watchLater });
        } catch (err) {
            res.status(500).json({
                err,
                message:
                    "There was some error while saving the video to watch later",
            });
        }
    })
    .delete(async (req, res) => {
        try {
            const { userId, videoId } = req.body;
            const isDeleted = await WatchLater.destroy({
                where: { videoId, userId },
            });
            res.status(200).json({ isDeleted: !!isDeleted });
        } catch (err) {
            res.status(500).json({
                err,
                message: "Error while removing video from watch later",
            });
        }
    });

module.exports = router;

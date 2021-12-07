const express = require("express");
const router = express.Router();
const WatchLater = require("../models/watchLater.model");
const Video = require("../models/video.model");

router.route("/:userId").get(async (req, res) => {
    try {
        const { userId } = req.params;
        const watchLater = await WatchLater.findAll({
            include: [Video],
            where: { userId },
        });
        res.status(200).json(watchLater);
    } catch (err) {
        res.status(500).json({
            message: "There was some error while getting watch later playlist",
        });
    }
});

router
    .route("/")
    .post(async (req, res) => {
        try {
            const { userId, videoId } = req.body;
            const watchLater = await WatchLater.create({ userId, videoId });
            res.status(200).json(watchLater);
        } catch (err) {
            res.status(500).json({
                message:
                    "There was some error while saving the video to watch later",
            });
        }
    })
    .delete(async (req, res) => {
        try {
            const { userId, videoId } = req.body;
            const watchLater = await WatchLater.findOne({
                include: [Video],
                where: { userId },
            });
            await WatchLater.destroy({
                where: { videoId, userId },
            });
            res.status(200).json(watchLater);
        } catch (err) {
            res.status(500).json({
                message: "Error while removing video from watch later",
            });
        }
    });

module.exports = router;

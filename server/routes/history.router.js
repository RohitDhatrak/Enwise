const express = require("express");
const router = express.Router();
const History = require("../models/history.model");
const Video = require("../models/video.model");
const User = require("../models/user.model");

router.route("/:userId").get(async (req, res) => {
    try {
        const { userId } = req.params;
        const history = await History.findAll({
            include: [Video],
            where: { userId },
        });
        res.status(200).json(history);
    } catch (err) {
        res.status(500).json({
            message: "Some error occured while fetching the history",
        });
    }
});

router
    .route("/")
    .post(async (req, res) => {
        try {
            const { videoId, userId } = req.body;
            const user = await User.findOne({ where: { id: userId } });
            if (user.saveHistory) {
                const video = await History.findOne({
                    include: [Video],
                    where: { userId },
                });
                if (video) {
                    res.status(200).json(video);
                } else {
                    await History.create({ userId, videoId });
                    const video = await History.findOne({
                        include: [Video],
                        where: { userId },
                    });
                    res.status(200).json(video);
                }
            }
        } catch (err) {
            res.status(500).json({
                message: "Some error occured while adding to history",
            });
        }
    })
    .delete(async (req, res) => {
        try {
            const { userId, videoId } = req.body;
            const history = await History.findOne({
                include: [Video],
                where: { userId },
            });
            await History.destroy({
                where: { videoId, userId },
            });
            res.status(200).json(history);
        } catch (err) {
            res.status(500).json({
                message: "Error while removing video from watch history",
            });
        }
    });

router.route("/clear").delete(async (req, res) => {
    try {
        const { userId } = req.body;
        await History.destroy({
            where: { userId },
        });
        res.status(200).json({ success: true, message: "History cleared" });
    } catch (err) {
        res.status(500).json({
            success: false,
            message:
                "There was some problem while deleting your watch history please try again later",
        });
    }
});

module.exports = router;

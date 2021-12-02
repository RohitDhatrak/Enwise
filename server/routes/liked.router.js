const express = require("express");
const router = express.Router();
const Liked = require("../models/liked.model");
const Video = require("../models/video.model");

router.route("/:userId").get(async (req, res) => {
    try {
        const { userId } = req.params;
        const liked = await Liked.findAll({
            include: [Video],
            where: { userId },
        });
        res.status(200).json(liked);
    } catch (err) {
        res.status(500).json({
            message: "There was some error while getting liked videos",
        });
    }
});

router
    .route("/")
    .post(async (req, res) => {
        try {
            const { userId, videoId } = req.body;
            const video = await Liked.create({ userId, videoId });
            res.status(200).json({ video });
        } catch (err) {
            res.status(500).json({
                message: "There was some error while saving the liked video",
            });
        }
    })
    .delete(async (req, res) => {
        try {
            const { userId, videoId } = req.body;
            const isDeleted = await Liked.destroy({
                where: { videoId, userId },
            });
            res.status(200).json({ isDeleted: !!isDeleted });
        } catch (err) {
            res.status(500).json({
                message: "Error while removing video from liked videos",
            });
        }
    });

module.exports = router;

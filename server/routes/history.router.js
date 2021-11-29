const express = require("express");
const router = express.Router();
const History = require("../models/history.model");
const Video = require("../models/video.model");

router
    .route("/")
    .get(async (req, res) => {
        try {
            const { userId } = req.body;
            const history = await History.findAll({
                include: [Video],
                where: { userId },
            });
            res.status(200).json({ history });
        } catch (err) {
            res.status(500).json({
                err,
                message: "Some error occured while fetching the history",
            });
        }
    })
    .post(async (req, res) => {
        try {
            const { videoId, userId } = req.body;
            const history = await History.create({ userId, videoId });
            res.status(200).json({ history });
        } catch (err) {
            res.status(500).json({
                err,
                message: "Some error occured while adding to history",
            });
        }
    })
    .delete(async (req, res) => {
        try {
            const { userId, videoId } = req.body;
            const isDeleted = await History.destroy({
                where: { videoId, userId },
            });
            res.status(200).json({ isDeleted: !!isDeleted });
        } catch (err) {
            res.status(500).json({
                err,
                message: "Error while removing video from watch history",
            });
        }
    });

module.exports = router;

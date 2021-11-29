const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { encrypt, matchPasswords } = require("../utils/hashPassoword");

router.route("/password").post(async (req, res) => {
    try {
        const { oldPassword, newPassword, userId } = req.body;
        const user = await User.findOne({ where: { id: userId } });
        const doesMatch = await matchPasswords(user.password, oldPassword);
        if (doesMatch) {
            const hashedPassword = await encrypt(newPassword);
            await User.update(
                { password: hashedPassword },
                { where: { id: userId } }
            );
            res.status(200).json({
                message: "Password changed successfully",
            });
        } else {
            res.status(401).json({
                message: "Password does not match",
            });
        }
    } catch (err) {
        res.status(500).json({
            err,
            message: "Couldn't change the password",
        });
    }
});

router.route("/privacy").post(async (req, res) => {
    try {
        const { history, userId } = req.body;
        await User.update(
            { saveHistory: !!history },
            { where: { id: userId } }
        );
        const user = await User.findOne({ where: { id: userId } });
        res.status(200).json({
            userId: user.id,
            isAdmin: user.isAdmin,
            saveHistory: user.saveHistory,
        });
    } catch (err) {
        res.status(500).json({
            err,
            message: "Couldn't update the history settings",
        });
    }
});

module.exports = router;

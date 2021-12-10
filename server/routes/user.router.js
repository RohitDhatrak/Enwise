const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { encrypt, decrypt } = require("../utils/hashOperations");

router.route("/password").post(async (req, res) => {
    try {
        const { oldPassword, newPassword, userId } = req.body;
        const user = await User.findOne({ where: { id: userId } });
        const doesMatch = await decrypt(user.password, oldPassword);
        if (doesMatch) {
            const hashedPassword = await encrypt(newPassword);
            await User.update(
                { password: hashedPassword },
                { where: { id: userId } }
            );
            res.status(200).json({
                success: true,
                message: "Password changed successfully",
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Old password is incorrect",
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Couldn't change the password please try again later",
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
            id: user.id,
            isAdmin: user.isAdmin,
            saveHistory: user.saveHistory,
        });
    } catch (err) {
        res.status(500).json({
            message:
                "Couldn't update the history settings please try again later",
        });
    }
});

module.exports = router;

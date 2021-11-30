import express from "express";
const router = express.Router();
const User = require("../models/user.model");
const { matchPasswords } = require("../utils/hashPassoword");

router.route("/").post(async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (user) {
            const doesMatch = await matchPasswords(user.password, password);
            if (doesMatch) {
                res.status(200).json({
                    userId: user.id,
                    isAdmin: user.isAdmin,
                    saveHistory: user.saveHistory,
                });
            } else {
                res.status(401).json({
                    message: "Password does not match",
                });
            }
        } else {
            res.status(401).json({
                message: "Email is not registered",
            });
        }
    } catch (err) {
        res.status(500).json({
            err,
            message: "Some error occurred while logging in",
        });
    }
});

module.exports = router;

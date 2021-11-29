const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { encrypt } = require("../utils/hashPassoword");

router.route("/").post(async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            const hashedPassword = await encrypt(password);
            const newUser = await User.create({
                email,
                password: hashedPassword,
                isAdmin: false,
                saveHistory: true,
            });
            res.status(200).json({
                userId: newUser.id,
                isAdmin: newUser.isAdmin,
                saveHistory: newUser.saveHistory,
            });
        } else {
            res.status(401).json({
                message: "This email is already registered",
            });
        }
    } catch (err) {
        res.status(500).json({
            err,
            message: "Some error occurred while signup",
        });
    }
});

module.exports = router;

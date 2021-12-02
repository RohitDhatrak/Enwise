const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { decrypt } = require("../utils/hashOperations");
const { signToken } = require("../utils/tokenOperations");

router.route("/").post(async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (user) {
            const doesMatch = await decrypt(user.password, password);
            if (doesMatch) {
                const jwt = signToken(user.id);
                res.status(200).json({
                    id: user.id,
                    isAdmin: user.isAdmin,
                    saveHistory: user.saveHistory,
                    jwt,
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
            message: "Some error occurred while logging in",
        });
    }
});

module.exports = router;

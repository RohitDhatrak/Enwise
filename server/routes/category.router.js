const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");

router
    .route("/")
    .get(async (req, res) => {
        try {
            const categories = await Category.findAll();
            res.status(200).json({ categories });
        } catch (err) {
            res.status(500).json({
                message: "Couldn't get the categories",
            });
        }
    })
    .post(async (req, res) => {
        try {
            const { name } = req.body;
            const category = await Category.create({ name });
            res.status(200).json({ category });
        } catch (err) {
            res.status(500).json({
                message: "Couldn't add the category",
            });
        }
    });

module.exports = router;

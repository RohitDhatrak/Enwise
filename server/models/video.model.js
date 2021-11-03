const mongoose = require("mongoose");
const { Schema } = mongoose;

const VideoSchema = Schema(
    {
        createdAt: Number,
        updatedAt: Number,
        _id: {
            type: String,
            required: [true, "Video id is required"],
            unique: true,
        },
        thumbnail: {
            type: String,
            required: [true, "Thumbnail is required"],
        },
        title: {
            type: String,
            required: [true, "Title is require"],
        },
    },
    {
        timestamps: true,
    }
);

const Video = mongoose.model("Video", VideoSchema);
module.exports = { Video };

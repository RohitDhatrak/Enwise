const { Index } = require("flexsearch");
const Video = require("../models/video.model");

const videosIndex = new Index({ tokenize: "forward" });

async function generateSearchIndex() {
    const videos = await Video.findAll();

    for (const video of videos) {
        let searchString = video.title.trim() + " " + video.creator.trim();
        for (const category of video.category)
            searchString += category.trim() + " ";
        videosIndex.add(video.id.valueOf(), searchString);
    }

    console.log("Search index generated successfully");
}

module.exports = {
    videosIndex,
    generateSearchIndex,
};

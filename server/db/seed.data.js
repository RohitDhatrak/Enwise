const axios = require("axios");

const videos = [
    {
        videoId: "9vJRopau0g0",
        title: "The Super Mario Effect - Tricking Your Brain into Learning More | Mark Rober | TEDxPenn",
        creator: "TEDx Talks",
        category: ["TED", "Learning"],
    },
    {
        videoId: "kF4ju6j6aLE",
        title: "String theory - Brian Greene",
        creator: "TED-Ed",
        category: ["TED", "Physics"],
    },
    {
        videoId: "j6K0iQg_p1w",
        title: "Clover Hogan: What to do when climate change feels unstoppable | TED",
        creator: "TED",
        category: ["TED", "Climate Change"],
    },
    {
        videoId: "JXeJANDKwDc",
        title: "What Are You Doing With Your Life? The Tail End",
        creator: "Kurzgesagt – In a Nutshell",
        category: ["Kurzgesagt", "Life"],
    },
    {
        videoId: "fxbCHn6gE3U",
        title: "The surprising habits of original thinkers | Adam Grant",
        creator: "TED",
        category: ["TED", "Creativity"],
    },
];

async function seedData() {
    for (const video of videos) {
        try {
            await axios.post("http://localhost:4444/video", video);
            console.log("added video");
        } catch (e) {
            console.log("error adding video");
            console.log(e?.response?.data);
        }
    }
}

module.exports = { seedData };

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
        category: ["TED", "Science"],
    },
    {
        videoId: "fxbCHn6gE3U",
        title: "The surprising habits of original thinkers | Adam Grant",
        creator: "TED",
        category: ["TED", "Creativity"],
    },
    {
        videoId: "8KkKuTCFvzI",
        title: "Robert Waldinger: What makes a good life? Lessons from the longest study on happiness | TED",
        creator: "TED",
        category: ["TED", "Life"],
    },
    {
        videoId: "u4L130DkdOw",
        title: "See how the rest of the world lives, organized by income | Anna Rosling Rönnlund",
        creator: "TED",
        category: ["TED"],
    },
    {
        videoId: "Ks-_Mh1QhMc",
        title: "Your body language may shape who you are | Amy Cuddyth",
        creator: "TED",
        category: ["TED", "Psychology"],
    },
    {
        videoId: "LqL3tyCQ1yY",
        title: "Jeff Bezos Fireside Chat",
        creator: "Internet Association",
        category: ["Business"],
    },
    {
        videoId: "vhhgI4tSMwc",
        title: "Why 30 is not the new 20 | Meg Jay",
        creator: "TED",
        category: ["TED", "Life"],
    },
    {
        videoId: "fLJsdqxnZb0",
        title: "The happy secret to better work | Shawn Achor",
        creator: "TED",
        category: ["TED", "Work"],
    },
    {
        videoId: "c0KYU2j0TM4",
        title: "The power of introverts | Susan Cain",
        creator: "TED",
        category: ["TED"],
    },
    {
        videoId: "R1vskiVDwl4",
        title: "Celeste Headlee: 10 ways to have a better conversation | TED",
        creator: "TED",
        category: ["TED"],
    },
    {
        videoId: "rrkrvAUbU9Y",
        title: "The puzzle of motivation | Dan Pink",
        creator: "TED",
        category: ["TED"],
    },
    {
        videoId: "lyu7v7nWzfo",
        title: "Your brain hallucinates your conscious reality | Anil Seth",
        creator: "TED",
        category: ["TED", "Science"],
    },
    {
        videoId: "iG9CE55wbtY",
        title: "Do schools kill creativity? | Sir Ken Robinson",
        creator: "TED",
        category: ["TED", "Creativity"],
    },
    {
        videoId: "H14bBuluwB8",
        title: "Grit: the power of passion and perseverance | Angela Lee Duckworth",
        creator: "TED",
        category: ["TED", "Life"],
    },
    {
        videoId: "j6K0iQg_p1w",
        title: "Clover Hogan: What to do when climate change feels unstoppable | TED",
        creator: "TED",
        category: ["TED", "Climate Change"],
    },
    {
        videoId: "RcGyVTAoXEU",
        title: "How to make stress your friend | Kelly McGonigal",
        creator: "TED",
        category: ["TED", "Life"],
    },
    {
        videoId: "JXeJANDKwDc",
        title: "What Are You Doing With Your Life? The Tail End",
        creator: "Kurzgesagt – In a Nutshell",
        category: ["Kurzgesagt", "Life"],
    },
];

const categories = [
    {
        name: "TED",
    },
    {
        name: "Life",
    },
    {
        name: "Science",
    },
    {
        name: "Business",
    },
    {
        name: "Learning",
    },
    {
        name: "Creativity",
    },
    {
        name: "Work",
    },
    {
        name: "Kurzgesagt",
    },
    {
        name: "Psychology",
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

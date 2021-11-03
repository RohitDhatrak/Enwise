const express = require("express");
const cors = require("cors");
const video = require("./server/routes/video.router");
const library = require("./server/routes/library.router");
const user = require("./server/routes/user.router");
const login = require("./server/routes/login.router");
const signup = require("./server/routes/signup.router");
const {
    routeNotFound,
} = require("./server/middlewares/route-not-found.middleware");
const {
    errorHandler,
} = require("./server/middlewares/error-handler.middleware");
const { initializeDBConnection } = require("./server/db/db.connect");

const port = 4444;
const whitelist = [
    "https://development--media-bookscape.netlify.app",
    "https://media-bookscape.netlify.app/",
    "http://localhost:3000",
];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

initializeDBConnection();

// const { modifiedData } = require("./data");
// const { Product } = require("./server/models/product.model");

// modifiedData.map(async (product) => {
//     const newProduct = new Product(product);
//     await newProduct.save();
// });

// app.use("video", video);
// app.use("library", library);
// app.use("user", user);
// app.use("login", login);
// app.use("signup", signup);

/* Error handlers do not move should be at the end*/
app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log("server started on port " + port);
});

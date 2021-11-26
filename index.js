const express = require("express");
const cors = require("cors");
const video = require("./server/routes/video.router");
const user = require("./server/routes/user.router");
const login = require("./server/routes/login.router");
const signup = require("./server/routes/signup.router");
require("./server/db/db.connect");
const {
    routeNotFound,
} = require("./server/middlewares/route-not-found.middleware");
const {
    errorHandler,
} = require("./server/middlewares/error-handler.middleware");

const port = process.env.PORT || 4444;
const whitelist = ["https://media-bookscape.netlify.app/"];
const corsOptions = {
    origin: whitelist,
    optionsSuccessStatus: 200,
    credentials: true,
};

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
    app.use(cors({ origin: true, credentials: true }));
} else {
    app.use(cors(corsOptions));
}

// app.use("video", video);
// app.use("login", login);
// app.use("signup", signup);
// app.use("user", user);

/* Error handlers do not move should be at the end*/
app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log("server started on port " + port);
});

const path = require("path");
const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// set "view engine"
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("trust proxy", 1);

// set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// set up express session
app.use(
  session({
    secret: "some secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: 'auto'
    }
  })
);

// Set up Passport
require("./config/passport")(app);

// create routes
const index = require("./routes/index");
const auth = require("./routes/auth");
const users = require("./routes/users");

// set up routes
app.use("/", index);
app.use("/auth", auth);
app.use("/users", users);

module.exports = app;

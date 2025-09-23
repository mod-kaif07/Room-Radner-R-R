if (process.env.NODE_ENV != "Production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
// const { console } = require("inspector");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local"); // ✅ correct name
const User = require("./models/user.js"); // ✅ model names usually start with capital letter

const listingRoutes = require("./routes/listings.js");
const reviewRoutes = require("./routes/review.js");
const userRoutes = require("./routes/user.js");

const dbUrl = process.env.ATLAS_URL;
const mongoUrl = "mongodb://127.0.0.1:27017/airbnb";

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret:process.env.SECRET,
  },
  touchAfter: 24 * 3600, // 24 hours
});
store.on("error", () => {
  console.log("ERROR in MONGO SESSION STORE", err);
});
let sessionOption = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
};

let port = 8080;

main()
  .then(() => {
    console.log("Connected to DataBase sucessfully");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbUrl);
}

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.sucssMsg = req.flash("success");
  res.locals.errMsg = req.flash("error");
  next();
});

app.get("/", (req, res) => {
  res.render("listings/home");
});

//listing route and review route
app.use("/listing", listingRoutes);
app.use("/listing/:id/review", reviewRoutes);
app.use("/", userRoutes);

app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, "Page Not Found !!"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.render("error", { message });
});

app.listen(port, (req, res) => {
  console.log(`App is listern at Port ${port}`);
});

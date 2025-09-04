const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const { console } = require("inspector");

const listingRoutes = require("./routes/listings.js");
const reviewRoutes = require("./routes/review.js");

let port = 8080;

main()
  .then(() => {
    console.log("Connected to DataBase sucessfully");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
}

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));



app.get("/", (req, res) => {
  res.render("listings/home");
});


//listing route and review route 
app.use("/listing", listingRoutes);
app.use("/listing/:id/review", reviewRoutes);


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

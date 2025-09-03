const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing_dat = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const { listingSchema, reviewValidationSchema } = require("./schema.js");
const review = require("./models/review.js");
const { console } = require("inspector");
const listingRoutes = require("./routes/listings.js");

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

const validateReview = (req, res, next) => {
  const { error } = reviewValidationSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};

app.get("/", (req, res) => {
  res.render("listings/home");
});

app.use("/listing", listingRoutes);

//review routes
app.post(
  "/listing/:id/review",
  validateReview,
  wrapAsync(async (req, res) => {
    let listing = await listing_dat.findById(req.params.id);
    let newReview = new review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    res.redirect(`/listing/${listing.id}`);
  })
);

//review Delete route
app.delete(
  "/listing/:id/review/:rewid",
  wrapAsync(async (req, res) => {
    let { id, rewid } = req.params;
    await listing_dat.findByIdAndUpdate(id, { $pull: { reviews: rewid } });
    await review.findByIdAndDelete(rewid);
    res.redirect(`/listing/${id}`);
  })
);

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

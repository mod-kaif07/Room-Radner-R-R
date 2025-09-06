const express = require("express");
const router = express.Router({ mergeParams: true });  //agar kio chiz parent route key pass hn ukko child route mein use karna hn to "merge parms ka use karna hoga "
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {reviewValidationSchema } = require("../schema.js");
const review = require("../models/review.js");
const listing_dat = require("../models/listing.js");


// Middleware for validation
const validateReview = (req, res, next) => {
  const { error } = reviewValidationSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};

//review routes
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
   const { id } = req.params;
    let listing = await listing_dat.findById(id);
    if (!listing) throw new ExpressError(404, "Listing not found");

    const newReview = new review(req.body.review);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
   req.flash("success","Review Added Successfully.")
    res.redirect(`/listing/${listing._id}`);
  })
);

//review Delete route
router.delete(
  "/:rewid",
  wrapAsync(async (req, res) => {
    let { id, rewid } = req.params;
    await listing_dat.findByIdAndUpdate(id, { $pull: { reviews: rewid } });
    await review.findByIdAndDelete(rewid);
     req.flash("success","Review Deleted Successfully.")
    res.redirect(`/listing/${id}`);
  })
);

module.exports = router;

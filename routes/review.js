const express = require("express");
const router = express.Router({ mergeParams: true }); //agar kio chiz parent route key pass hn ukko child route mein use karna hn to "merge parms ka use karna hoga "
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewValidationSchema } = require("../schema.js");
const review = require("../models/review.js");
const listing_dat = require("../models/listing.js");
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");
const ReviewControllers = require("../controllers/reviews.js");

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
  isLoggedIn,
  validateReview,
  wrapAsync(ReviewControllers.addReview)
);

//review Delete route
router.delete(
  "/:rewid",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(ReviewControllers.deleteReview)
);

module.exports = router;

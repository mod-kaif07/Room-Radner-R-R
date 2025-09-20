const listing_dat = require("./models/listing.js");
const review = require("./models/review.js");

// middleware.js
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirecturl = req.originalUrl;
    req.flash("error", "You must be logged in first!");

    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirecturl) {
    res.locals.redirecturl = req.session.redirecturl;
  }
  next();
};

// Middleware: Check if logged-in user is the owner of the listing

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await listing_dat.findById(id);

  if (!listing.owner.equals(res.locals.currentUser._id)) {
    req.flash(
      "error",
      "Access denied: Only the owner can modify this listing."
    );
    return res.redirect(`/listing/${id}`);
  }
  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  const { id, rewid } = req.params; // Ensure your route uses :rewid
  const foundReview = await review.findById(rewid);

  if (!foundReview.author.equals(res.locals.currentUser._id)) {
    req.flash(
      "error",
      "Access denied: Only the review author can modify this review."
    );
    return res.redirect(`/listing/${id}`);
  }
  next();
};

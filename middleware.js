const listing_dat = require("./models/listing.js");

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
    req.flash("error", "Access denied: Only the owner can modify this listing.");
    return res.redirect(`/listing/${id}`);
  }
  next();
};

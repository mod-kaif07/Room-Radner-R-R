const { model } = require("mongoose");
const review = require("../models/review.js");
const listing_dat = require("../models/listing.js");

module.exports.addReview = async (req, res) => {
  const { id } = req.params;
  let listing = await listing_dat.findById(id);
  if (!listing) throw new ExpressError(404, "Listing not found");

  let newReview = new review(req.body.review);
  newReview.author = req.user._id;
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  req.flash("success", "Review Added Successfully.");
  res.redirect(`/listing/${listing._id}`);
};

module.exports.deleteReview = async (req, res) => {
  let { id, rewid } = req.params;
  await listing_dat.findByIdAndUpdate(id, { $pull: { reviews: rewid } });
  await review.findByIdAndDelete(rewid);
  req.flash("success", "Review Deleted Successfully.");
  res.redirect(`/listing/${id}`);
};

const express = require("express");
const router = express.Router();
const listing_dat = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const { isLoggedIn,isOwner } = require("../middleware.js");
const flash = require("connect-flash");

const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};

router.get("/about", (req, res) => {
  res.render("listings/about");
});

router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListing = await listing_dat.find({});
    res.render("listings/index", { allListing });
  })
);

//Add New listing
router.get("/addnew", isLoggedIn, (req, res) => {
  res.render("listings/new");
});

//Show Route
router.get(
  "/:id",

  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const showdata = await listing_dat
      .findById(id)
      .populate("reviews")
      .populate("owner");
    if (!showdata) {
      throw new ExpressError(404, "This listing is no longer available ");
    }

    res.render("listings/show", { showdata });
  })
);

// Create Route
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newlistingdata = new listing_dat(req.body.listing);
    newlistingdata.owner = req.user._id;
    newlistingdata.save();
    req.flash("success", "Listing Added Successfully.");
    res.redirect("/listing");
  })
);

// edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const editable_data = await listing_dat.findById(id);
    if (!editable_data) {
      req.flash("error", "The requested listing could not be found.");
      return res.redirect("/listing"); // prevent rendering edit.ejs with null data
    }

    res.render("listings/edit", { editable_data });
  })
);

//update Route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const updatelisting = req.body.listing; // form data

    const finddeatils = await listing_dat.findByIdAndUpdate(id, updatelisting, {
      new: true,
      runValidators: true,
    });
    if (!finddeatils) {
      throw new ExpressError(
        404,
        "The requested listing is no longer available."
      );
    }
    req.flash("success", "Listing updated successfully.");
    res.redirect(`/listing/${id}`);
  })
);

//Delete route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const find_id_delete = await listing_dat.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted Successfully.");
    res.redirect("/listing");
  })
);

module.exports = router;

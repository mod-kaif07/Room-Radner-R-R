const express = require("express");
const router= express.Router();
const listing_dat = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js"); // Joi validation


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
router.get("/addnew", (req, res) => {
  res.render("listings/new");
});

//Show Route
router.get(
  "/:id",

  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const showdata = await listing_dat.findById(id).populate("reviews");
    if (!showdata) {
      throw new ExpressError(404, "Listing not found!");
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

    newlistingdata.save();

    res.redirect("/listing");
  })
);

// edit Route
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const editable_data = await listing_dat.findById(id);
    res.render("listings/edit", { editable_data });
  })
);

//update Route
router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let updatelisting = req.body.listing; // contains form data
    const finddeatils = await listing_dat.findByIdAndUpdate(id, updatelisting, {
      new: true,
      runValidators: true,
    });
    res.redirect(`/listing/${id}`);
  })
);

//Delete route
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const find_id_delete = await listing_dat.findByIdAndDelete(id);
    res.redirect("/listing");
  })
);


module.exports = router;
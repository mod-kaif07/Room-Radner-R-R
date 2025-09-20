const express = require("express");
const router = express.Router();
const listing_dat = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const { isLoggedIn, isOwner } = require("../middleware.js");
const flash = require("connect-flash");

const listingControllers = require("../controllers/listing.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};

//about route
router.get("/about", listingControllers.aboutSection);

//Combining the listing main route and create route  using router.route
router
  .route("/")
  .get(wrapAsync(listingControllers.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingControllers.createPost)
  );

//Add New listing
router.get("/addnew", isLoggedIn, listingControllers.newForm);

//Combining the show-route & update-route and Delete-route  using router.route
router
  .route("/:id")
  .get(wrapAsync(listingControllers.showDetails))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingControllers.rendertUpdate)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingControllers.deleteListing));

// //Show Route
// router.get("/:id", wrapAsync(listingControllers.showDetails));

// edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingControllers.renderEditform)
);

//update Route
// router.put(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   validateListing,
//   wrapAsync(listingControllers.rendertUpdate)
// );

// //Delete route
// router.delete(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(listingControllers.deleteListing)
// );

module.exports = router;

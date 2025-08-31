const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing_dat = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const { listingSchema } = require("./schema.js");

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

const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  
  if (error) {
    const msg = error.details.map(el => el.message).join(",");
    throw new ExpressError(400,msg);
  } else {
    next();
  }
};
app.get("/", (req, res) => {
  res.render("listings/home");
});

app.get("/about", (req, res) => {
  res.render("listings/about");
});

app.get(
  "/listing",
  wrapAsync(async (req, res) => {
    const allListing = await listing_dat.find({});
    res.render("listings/index", { allListing });
  })
);

//Add New listing
app.get("/listing/addnew", (req, res) => {
  res.render("listings/new");
});

//Show Route
app.get(
  "/listing/:id",

  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const showdata = await listing_dat.findById(id);
    if (!showdata) {
      throw new ExpressError(404, "Listing not found!");
    }
    res.render("listings/show", { showdata });
  })
);

// Create Route
app.post(
  "/listing",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newlistingdata = new listing_dat(req.body.listing);
    newlistingdata.save();
    res.redirect("/listing");
  })
);

// edit Route
app.get(
  "/listing/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const editable_data = await listing_dat.findById(id);
    res.render("listings/edit", { editable_data });
  })
);

//update Route
app.put(
  "/listing/:id",
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
app.delete(
  "/listing/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const find_id_delete = await listing_dat.findByIdAndDelete(id);
    res.redirect("/listing");
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

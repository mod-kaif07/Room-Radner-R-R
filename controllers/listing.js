const listing_dat = require("../models/listing.js");
const mbxGeoCoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_API;
const geoCodingClient = mbxGeoCoding({ accessToken: mapToken });

module.exports.aboutSection = (req, res) => {
  res.render("listings/about");
};

module.exports.index = async (req, res) => {
  const allListing = await listing_dat.find({});
  res.render("listings/index", { allListing });
};

module.exports.newForm = (req, res) => {
  res.render("listings/new");
};

module.exports.showDetails = async (req, res) => {
  const { id } = req.params;
  const showdata = await listing_dat
    .findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!showdata) {
    throw new ExpressError(404, "This listing is no longer available ");
  }

  res.render("listings/show", { showdata });
};

module.exports.createPost = async (req, res, next) => {
  let resposne = await geoCodingClient
    .forwardGeocode({
      query: req.body.listing.address,
      limit: 1,
    })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;
  const newlistingdata = new listing_dat(req.body.listing);
  newlistingdata.owner = req.user._id;
  newlistingdata.image = { url, filename };
  newlistingdata.location = resposne.body.features[0].geometry;
  let savedlisting = await newlistingdata.save();

  req.flash("success", "Listing Added Successfully.");
  res.redirect("/listing");
};

module.exports.renderEditform = async (req, res) => {
  let { id } = req.params;
  const editable_data = await listing_dat.findById(id);
  if (!editable_data) {
    req.flash("error", "The requested listing could not be found.");
    return res.redirect("/listing"); // prevent rendering edit.ejs with null data
  }
  let orginialimage = editable_data.image.url;
  orginialimage = orginialimage.replace("/upload", "/upload/w_250");
  res.render("listings/edit", { editable_data, orginialimage });
};

module.exports.rendertUpdate = async (req, res) => {
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

  // If new image uploaded, replace the old one
  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    finddeatils.image = { url, filename };
    await finddeatils.save();
  }
  req.flash("success", "Listing updated successfully.");
  res.redirect(`/listing/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  const find_id_delete = await listing_dat.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted Successfully.");
  res.redirect("/listing");
};

module.exports.filter = async (req, res, next) => {
  try {
    // console.log("Filter route hit:", req.method, req.url, req.body); // Debugging
    const { subCategory } = req.body;

    if (!subCategory) {
      req.flash("error", "Please select a valid room category.");
      return res.redirect("/listing");
    }

    const listings = await listing_dat
      .find({ subCategory: subCategory })
      .populate("owner");

    res.render("listings/category", {
      allListing: listings,
      subCategory,
    });
  } catch (err) {
    console.error("Error in filter:", err); // Debugging
    next(new ExpressError(500, "An error occurred while filtering listings."));
  }
};

module.exports.filter_country = async (req, res, next) => {
  let { country } = req.body;
  if (!country) {
    req.flash("error", "Mention Country Name ");
    return res.redirect("/listing");
  }
  const CountryListing = await listing_dat
    .find({
      country: { $regex: new RegExp(country, "i") }, // case-insensitive search
    })
    .populate("owner");
  res.render("listings/country", {
    allListing: CountryListing,
  });
};

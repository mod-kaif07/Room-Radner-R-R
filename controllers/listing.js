const listing_dat = require("../models/listing.js");

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
  let url = req.file.path;
  let filename = req.file.filename;
  const newlistingdata = new listing_dat(req.body.listing);
  newlistingdata.owner = req.user._id;
  newlistingdata.image = { url, filename };
  await newlistingdata.save();
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

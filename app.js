const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing_dat = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

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
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
 res.render("listings/home")
});

app.get("/listing", async (req, res) => {
  const allListing = await listing_dat.find({});
  res.render("listings/index", { allListing });
});

//Add New Route
app.get("/listing/addnew", (req, res) => {
  res.render("listings/new");
});

//Show Route
app.get("/listing/:id", async (req, res) => {
  const { id } = req.params;
  const showdata = await listing_dat.findById(id);
  res.render("listings/show", { showdata });
});

// Create Route
app.post("/listing", async (req, res) => {
  const newlistingdata = new listing_dat(req.body.listing);
  newlistingdata
    .save()
    .then(() => {
      console.log("Data sucessfully Added");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/listing");
});

// edit Route
app.get("/listing/:id/edit", async (req, res) => {
  let { id } = req.params;
  const editable_data = await listing_dat.findById(id);
  res.render("listings/edit", { editable_data });
});

//update Route
app.put("/listing/:id", async (req, res) => {
  let { id } = req.params;
  let updatelisting = req.body.listing; // contains form data
  const finddeatils = await listing_dat.findByIdAndUpdate(id, updatelisting, {
    new: true,
    runValidators: true,
  });
  res.redirect(`/listing/${id}`);
});

//Delete route
app.delete("/listing/:id", async (req, res) => {
  let { id } = req.params;
  const find_id_delete = await listing_dat.findByIdAndDelete(id);
  res.redirect("/listing");
});

app.listen(port, (req, res) => {
  console.log(`App is listern at Port ${port}`);
});

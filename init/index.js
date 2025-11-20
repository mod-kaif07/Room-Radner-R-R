const mongoose = require("mongoose");
const listing_dat = require("../models/listing.js");
const initData= require("./data.js");


main()
  .then(() => {
    console.log("Connected to DataBase sucessfully");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/roomrander");
}

const intmd= async()=>{
     await listing_dat.deleteMany({});
   initData.data=initData.data.map((obj)=>({...obj,owner:"68bd6da3d315e35592ac31ed"}))
    await listing_dat.insertMany(initData.data);
    console.log("Data Successfully added");
}

intmd();
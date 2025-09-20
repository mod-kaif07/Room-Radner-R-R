const mongoose = require("mongoose");
const review = require("./review");
const { Schema } = mongoose;

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 100,
    },
    description: {
      type: String,
      required: true,
      maxLength: 500,
    },
    image: {
     url:String,
     filename:String,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    location: {
      type: String,
      required: true,
      maxLength: 100,
    },
    country: {
      type: String,
      required: true,
      maxLength: 100,
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    owner:{
      type:Schema.Types.ObjectId,
      ref:"User"
    },
  },
  { timestamps: true }
);

listingSchema.post("findOneAndDelete", async (Listing) => {
  if (Listing) {
    await review.deleteMany({ _id: { $in: Listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;

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
      url: String,
      filename: String,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    address: {
      type: String,
      required: true,
      maxLength: 100,
    },
    country: {
      type: String,
      required: true,
      maxLength: 100,
    },
    subCategory: {
      type: String,
      enum: [
        // Student categories
        "Shared Room",
        "Single Room",
        "Dormitory",
        "Studio Room",
        "PG",
        // Working Professional categories
        "Private Single Room",
        "Co-living Room",
        "1 BHK Apartment",
        "Shared Apartment",
        "Service Apartment",
        // Universal categories
        "Budget Room",
        "Standard Room",
        "Premium Room",
      ],
      required: true,
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ["Point"], // 'location.type' must be 'Point'
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
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

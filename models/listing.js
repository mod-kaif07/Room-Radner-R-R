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
      filename: {
        type: String,
        default: "listingimage",
      },
      url: {
        type: String,
        default:
          "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
        match: /^https?:\/\/.+/i, // just check it's a URL
      },
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

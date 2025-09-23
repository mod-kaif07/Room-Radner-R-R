const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    address: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.object({
      filename: Joi.string().required(), // required now
      url: Joi.string().uri().required(), // required now
    }),
    subCategory: Joi.string().required(),
  }).required(),
});

module.exports.reviewValidationSchema = Joi.object({
  review: Joi.object({
    comment: Joi.string().min(5).max(500).required(),
    rating: Joi.number().min(1).max(5).required(),
    createdAt: Joi.date().default(Date.now),
  }).required(),
});

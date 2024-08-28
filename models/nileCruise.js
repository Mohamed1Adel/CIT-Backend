const mongoose = require("mongoose");

const nileCruiseSchema = mongoose.Schema({
  title: String,
  category: String,
  destination: String,
  description: String,
  box6: String,
  box7: String,
  box8: String,
  box9: String,
  box10: String,
  images: [
    {
      img_url: String,
    },
  ],
  packages: [
    {
      id: Number,
      packTitle: String,
      startDate: String,
      endDate: String,
      single: String,
      double: String,
      triple: String,
    },
  ],
  itenary: [
    {
      id: Number,
      dayTitle: String,
      dayContent: String,
      optTour:String,
    },
  ],
  termsAndConditions: String,
  cancellation: String,
  include: String,
  exclude: String,
  children: String,
  nileCruise: Boolean,
  hotOffer: Boolean,
  egypt_cruise: Boolean,
});

const nileCruise = mongoose.model("nileCruise", nileCruiseSchema);

module.exports = nileCruise;

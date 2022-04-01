const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  id: Number,
  url: String,
  name: String,
  type: String,
  language: String,
  genres: Array,
  status: String,
  runtime: Number,
  averageRuntime: Number,
  premiered: String,
  ended: String,
  offcialSite: String,
  schedule: Object,
  rating: Object,
  weight: Number,
  network: Object,
  webChannel: String,
  dvdCountry: String,
  externals: Object,
  image: Object,
  summary: String,
  updated: Number,
  _links: Object,
});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;

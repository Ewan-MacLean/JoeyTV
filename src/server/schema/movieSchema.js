const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    _id: {},
    id: Number,
    url: String,
    name: String,
    type: String,
    language: String,
    genres: [],
    status: String,
    runtime: Number,
    averageRuntime: Number,
    premiered: String,
    ended: "",
    offcialSite: String,
    schedule: {},
    rating: {},
    weight: Number,
    network: {},
    webChannel: "",
    dvdCountry: "",
    externals: {},
    image:{},
    summary: String,
    updated: Number,
    _links: {}
})

const Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;
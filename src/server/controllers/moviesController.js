const Movies = require("../schema/movieSchema");

const getMovies = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const movies = await Movies.find();
  console.log(movies);
  res.json(movies);
};

module.exports = getMovies;

const express = require('express');

const getMovies = require('../controllers/moviesController')

const router = express.Router()

router.get('/', getMovies)

module.exports = router;

const express = require('express');

const getUserComments = require('../controllers/userCommentsController')

const router = express.Router()

router.get('/', getUserComments)

module.exports = router;
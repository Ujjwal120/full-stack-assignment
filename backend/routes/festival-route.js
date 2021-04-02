const express = require('express');

const festivalController = require('../controller/festival-controller');

const router = express.Router();

router.get('/:page', festivalController.getFestivalPhotos);

module.exports = router;

const express = require('express');

const techController = require('../controller/tech-controller');

const router = express.Router();

router.get('/:page', techController.getTechPhotos);

module.exports = router;

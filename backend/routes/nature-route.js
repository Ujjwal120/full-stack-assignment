const express = require('express');

const natureController = require('../controller/nature-controller');

const router = express.Router();

router.get('/:page', natureController.getNaturePhotos);

module.exports = router;
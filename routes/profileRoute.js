// routes/api.js
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controller');

router.get('/data', controllers.getAllData);
router.post('/data', controllers.createData);

module.exports = router;

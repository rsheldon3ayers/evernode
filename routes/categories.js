'use strict';

const express = require('express');
const router = express.Router();

const cat = require('../controllers/categories');

router
  .get('/categories', cat.index)
  .get('/categories/new', cat.new)
  .post('/categories', cat.create);

module.exports = router;

/*----------------------------------
Filename:routes/index.js
Author's name: Md Ripon Hossain
StudentID: 301215985
Web App name: Favourite_books
--------------------------------------
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;

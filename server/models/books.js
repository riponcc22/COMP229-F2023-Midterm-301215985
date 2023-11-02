/*----------------------------------
Filename:models/books.js
Author's name: Md Ripon Hossain
StudentID: 301215985
Web App name: Favourite_books
--------------------------------------
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);

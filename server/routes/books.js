
/*----------------------------------
Filename:routes/books.js
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

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err,books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

  res.render('books/add',{title:'Add Books'});

    /*****************
     * ADD CODE HERE *
     *****************/

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {


    /*****************
     * ADD CODE HERE *
     *****************/
//dectare variable
    let newBook=book({
      "Title":req.body.Title,
      "Description":req.body.Description,
      "Price": req.body.Price,
      "Author": req.body.Author,
      "Genre":req.body.Genre

});
//create and add the new book 
book.create(newBook,(err,book)=>{
  if(err)
  {console.log(err)
  res.end(err);
  }

  //refresh book list
  else{
      res.redirect('/books');
  }
});
});

// GET the Book Details page in order to edit an existing Book
router.get('/details/:id', (req, res, next) => {

  

    /*****************
     * ADD CODE HERE *
     *****************/

    let id=req.params.id;
    book.findById(id,(err,bookToEdit)=>{

        if(err){

            console.log(err)
            res.end(err);
        }

        else{
            res.render('books/details',{title:'Edit book list',books:bookToEdit});
        }
    });
});

// POST - process the information passed from the details form and update the document
router.post('/details/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

    let id=req.params.id;
     let updateBook=book({
        "_id":id,
        "Title":req.body.Title,
        "Description":req.body.Description,
        "Price": req.body.Price,
        "Author": req.body.Author,
        "Genre":req.body.Genre
 });
book.updateOne({_id:id}, updateBook,(err)=>{
    if(err){

        console.log(err)
        res.end(err);
    }

     //refresh book list
     else{
        res.redirect('/books');
    }
});

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

    let id=req.params.id;
 
book.remove({_id:id},(err)=>{
    if(err){

        console.log(err)
        res.end(err);
    }

     //refresh book list
     else{
        res.redirect('/books');
    }
});

});


module.exports = router;

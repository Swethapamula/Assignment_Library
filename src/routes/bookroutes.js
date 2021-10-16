const express=require('express');
const booksRouter= express.Router();
const Bookdata=require('../model/Bookdata')
function router(nav){
/*var books=[
    {
        title:"HarryPorter",
        name:"J.K.Rowling",
        genre:"Fantasy",
        Image:"Harry_Potter.jpg"
    },
    {
       title:"HotelTransylvania",
       name:"Genndy Tartakovsky",
       genre:"Fiction",
       Image:"hoteltrans.jpg"
   },
   {
       title:"Tom and Jerry",
       name:"Joseph Barberaee",
       genre:"comedy",
       Image:"TomandJerry.jpg"
   },

   {
    title:"Baby SittersClub",
    name:"Ann M. Martin",
    genre:"comedy",
    Image:"babySitter.jpg"
}


];*/





booksRouter.get("/", function(req,res){

    Bookdata.find()
    .then(function(books)
    {
        res.render("books",
        {
        
        nav,
        title: 'Library',
        books
        }
          
        );
    

    })

});
booksRouter.get('/:id', function(req,res){
   const id=req.params.id;
   Bookdata.findOne({_id:id})
   .then(function(book)
   {
       res.render('book',
   {    
       nav,
       title: 'Library',
       book


   })
})
   
})
return booksRouter;
}

module.exports=router;
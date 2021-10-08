const express=require('express');
const booksRouter= express.Router();
function router(nav){
var books=[
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


];





booksRouter.get("/", function(req,res){
   res.render("books",
    {
    
    nav,
    title: 'Library',
    books
    }
      
    );

});
booksRouter.get('/:id', function(req,res){
   const id=req.params.id;
   res.render('book',
   {    
       nav,
       title: 'Library',
       book:books[id]


   })

})
return booksRouter;
}

module.exports=router;
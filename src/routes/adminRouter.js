const express=require('express');
const adminRouter= express.Router();
const Bookdata= require('../model/Bookdata');
const multer=require('multer');

const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/Images')
    },
    filename:function(req,file,cb){
        cb(null, file.originalname)

    }
});

const upload=multer(
        {
        storage:storage,
        limits:{filesize:1024*1024*5}
    });


function router(nav){

adminRouter.get("/", function(req,res){
   res.render("addbook",
    {
    nav,
    title: 'Add Book',
    }
      
    );

});


 adminRouter.post('/add',upload.single('Image'), function (req,res){
var Item ={
       title: req.body.title,
        Author:req.body.author,
        genre:req.body.genre,
        Image:req.file.filename
    

    }
   var book= Bookdata(Item);
   book.save();
   res.redirect('/books');
   
  })
 
return  adminRouter;
}

module.exports=router;
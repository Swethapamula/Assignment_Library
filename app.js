const express = require('express');
const nav= [{link:'/home',name:'home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/logout',name:'Logout'}];
const booksRouter= require("./src/routes/bookroutes")(nav);
const authorRouter= require("./src/routes/authorroutes")(nav);
const homeRouter=require("./src/routes/homeroutes")(nav);
const loginRouter = require("./src/routes/loginrouter");
const signupRouter=require("./src/routes/signuprouters");
const addbooksRouter=require("./src/routes/addbookrouters")(nav);
const addauthorRouter=require("./src/routes/addauthorroutes")(nav);
const logoutRouter=express.Router(); 
const port= process.env.port || 50000;


const app =new express();
app.use(express.static('./public'));
app.set ("view engine","ejs");
app.set("views", "./src/views");
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/home',homeRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook',addbooksRouter);
app.use("/addauthor",addauthorRouter);
app.use("/logout",logoutRouter);




/* app.get("/", function(req,res){
     res.render("login",
      {
      nav,
      title: 'Library'
      }

        
      );

 });*/

  app.get("/", function(req,res){
     res.render("login")
  });


 logoutRouter.get("/", function(req,res){
    res.render("login")
 });
    


 


 app.listen(port,()=>{console.log("Server ready at port" +port)});
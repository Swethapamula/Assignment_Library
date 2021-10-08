const express=require('express');
const authorRouter= express.Router();
function router1(nav)
{
  var authors=[
      {
          name:'Leo Tolstoy',
          Language:'Russian',
          Period:'1847–1910',
          Img:'LeoTolstoy.jpg'
      },
      {
          name:'Barbara Cartland',
          Language:'British',
          Period:'1901–2000',
          Img:'Barbara_Cartland.jpg'


      },
      {
          name:'Agatha Christie	',
          Language:'British',
          Period:'1890–1976',
          Img:'agatha.jpg'

      },
      {
          name:'William Shakespeare',
          Language:'British',
          Period:'1564-1616',
          Img:'Shakespeare.jpg'

      }
  ]



    authorRouter.get("/", function(req,res){
        res.render("authors",
         {
         nav,
         title: 'Library',
         authors
         }
           
         );
    
    });
    authorRouter.get('/:id', function(req,res){
        const id=req.params.id;
        res.render('author',
        {    
            nav,
            title: 'Library',
            author:authors[id]
     
     
        })
     
     });
     
    return authorRouter;

}
module.exports=router1;
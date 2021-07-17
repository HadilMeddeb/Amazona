const express =require('express');
const router= express.Router;
import  Product from './models/Product.js';


router.get('/products',(req,res,next)=>{
   
    try{
        
        Product.find({},(error,result)=>{
            if(error)
                {
                    console.log('erreur');
                    res.send('erreur ..');
                }
            else
            {
                    console.log(result);
                    res.send(result);   
            }
            
        })  
    }
    catch(e)
        {
            res.send('error catch ',e);
        }
  
    
});





module.exports=router;

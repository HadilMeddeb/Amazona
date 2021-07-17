const express=require('express');
const logger= require('morgan');
const mongoose=require('mongoose');
const cors=require('cors');
const productRouter= require('./routes/products.js');

const port = process.env.PORT||6000;
const server = express();
server.listen(port,()=>console.log("server is working on port : ",port));

server.use(logger('dev'));
server.use('express');
server.use(cors());

//connecting to database
mongoose.connect("mongodb://localhost/productdatabase",{ useNewUrlParser: true,useUnifiedTopology: true },(error)=>{
    if(error)
        {
         console.log(error);   
        }
    else
        {
         console.log("connected to fooddatabase");
        }
});


server.get('/',productRouter);


//which mean whenever the frontend enter this url ('/api/Products) the backend will render for him DataProducts
    
    
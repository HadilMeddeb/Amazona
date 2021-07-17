const mongoose= require('mongoose');
const productSchema=mongoose.Schema({
    
     _id:{type:String,
          required:true
         },
      name:
          {type:String,
          required:true
          },
      category:
          {type:String,
          required:true
          },
      img:
           {type:String,
           required:true
          },
      price:
          { type:Number,
            required:true
          },
      brand:
          {type:String ,
           required:true
          },
      rating:
             { type:Number,
               required:true
             },
      numReviews:
             { type:Number,
               required:true
             },
      description:
                 {type:String ,
                  required:true
                 },
      countInStock:
              { type:Number,
                required:true
              },

});
const product=mongoose.model("product",productSchema);
module.exports=product;
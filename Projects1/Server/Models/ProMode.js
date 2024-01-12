const mongoose = require ('mongoose')
const ItemSchema =new mongoose.Schema({

    categoy:{
        type:String,
        required:true,
    },
    
    Poname: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  });

  module.exports = mongoose.model("Item",ItemSchema)
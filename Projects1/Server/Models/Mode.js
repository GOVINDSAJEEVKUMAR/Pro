const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type :String,
        required:[true,"Please Provide a name"],

    },
    email :{
        type:String,
        required :true,
        unique:true,
    },
    password :{
        type:String,
        required:true,
        minlength:6,
    },
});

// const ItemSchema =new mongoose.Schema({

    
    
//   ProName: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
// });


    const Login = mongoose.model('Login', UserSchema);
    // const Prod = mongoose.model('Item', ItemSchema);

module.exports = mongoose.model(
    "Login",UserSchema,
    // "Item",ItemSchema
    )
const express = require ('express')
const jsonwebtoken = require('jsonwebtoken')
const Login = require ("../Models/Mode")
const Item = require("../Models/ProMode")
const Feed = require("../Models/Feed")
// const authorize= require ("../Auth")



const getAll = async(req,res)=>{
    try{
        const Logied = await Login.find({})
    res.status(200).json({Logied})
    }catch(error){
    res.status(500).json({msg:error})
    }
}
const bcrypt = require("bcrypt")

const SignUp = async(req,res)=>{
    let exsitingUSer;
    const { name,email,password }= req.body;
        exsitingUSer = await Login.findOne({email:email});
        if(exsitingUSer){
        return res.status(400).json("User Already Exist")
}
   const ciperText = bcrypt.hashSync(password,10) ;

   let result = await Login.create({
    name:name,
    email:email,
    password:ciperText
})
 res.status(200).json({
    msg:"added",
    sucess:true
   });
}


const login =async(req,res)=>{
    const {email,password} = req.body;
    let userExisted;
    userExisted = await Login.findOne({email: email});
    if(!userExisted){
        return res.status(400).json({message : "Please check credentials"});
    }
    const validPassword = bcrypt.compareSync(password,userExisted.password);
    if(!validPassword){
        return res.status(400).json({message:"invalid credentials"})
    }
    
    return res.status(200).json({message:"Succesfully logged in."})

    
}

const logout = async(req,res)=>{

}


const addProduct = async(req,res)=>{
    const{categoy,Poname,image,price} = req.body;
    try{
        const Product = ({
            
            categoy:req.body.categoy,
            Poname:req.body.Poname,
            image:req.body.image,
            price:req.body.price

        });
        let result = await Item.create({
            categoy:categoy,
            Poname:Poname,
            image:image,
            price:price
            
        });
        res.status(200).send({success:true, msg:"Success",data:Product});
    } catch (error){
        res.status(400).send({success:false,msg:error.message});
    }
}


const getProduct = async(req,res)=>{
    try{
        const GetProduct = await Item.find({})
    res.status(200).json({GetProduct})
    }catch(error){
    res.status(500).json({msg:error})
    }
}

const editProduct = async(req,res)=>{

}

const deleteProduct = async(req,res)=>{
    try {
        const DeletPro = await Item.findOneAndDelete(req.params.Poname);
        if (!DeletPro) {
            return res.status(404).send();
        }
        res.send(DeletPro);
    } catch (error) {
        res.status(500).send(error);
    }
};

const feedBack= async(req,res)=>{
    const {Username,Message} = req.body;
    try{
        const Feedback =({
            Username:req.body.Username,
            Message:req.body.Message
        });
        let result = await Feed.create({
            Username:Username,
            Message:Message
        });
        res.status(200).send({success:true,msg:"Success",data:Feedback});

    }catch(error){
        res.status(400).send({success:false,msg:error.message});

    }
}

module.exports={
    getAll,
    SignUp,
    login,
    addProduct,
    getProduct,
    feedBack,
    deleteProduct
}

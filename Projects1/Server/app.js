const express = require('express')
const connectDB = require('./ConnectData/ConnectDB')
const notFound = require('./MiddeleWare/notFound')
const errorHandler = require('./MiddeleWare/errorHandler')
const UserRoute = require ('./Routes/Route')
const Mode = require('./Models/Mode')
const cors = require("cors")
const app = express()





app.use(cors({origin:["http://127.0.0.1:5173","http://localhost:5173/"],credentials:true,}));

require('dotenv').config

app.use(express.json())

app.use("/project",UserRoute)
app.use(notFound);
app.use(errorHandler);



const port = process.env.PORT || 8910

const startApp=async()=>{
    try {
        await connectDB("mongodb+srv://govindsajeevGovind:GovindSajeevKumar@cluster0.vk9zxhk.mongodb.net/?retryWrites=true&w=majority");
        console.log('Connected to database');
        app.listen(port,()=>{
            console.log('server running on port 8980');
        })
        
    } catch (error) {
        console.log(error);
    } 
}


startApp()

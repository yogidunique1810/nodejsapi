require("dotenv").config()
const express = require("express");
const mongoose = require('mongoose');
var cors = require('cors')
const app = express();
const productRoutes = require("./routes/productRoutes")
const errorMiddleware = require("./middleware/errorMiddleware")
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/product",productRoutes)


const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
app.get("/",(req,res)=>{
    throw new Error("fake message")
})
var corsOptions = {
    origin: ['http://example.com'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))
app.use(errorMiddleware)
mongoose
.connect(MONGO_URL)
.then(()=>{console.log("connected to the db")
app.listen(PORT,(err)=>{
    if(err) console.log("error while connecting")
    console.log(`connected to the port ${PORT}`)
})
})
.catch((error)=>console.log(`not connected , error is ${error}`))


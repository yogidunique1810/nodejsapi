//require("dotenv").config()
const errorMiddleware = (err,req,res,next)=>{
    //console.log("env",process.env);
    const statusCode = res.statusCode?res.statusCode:500;
    res.status(statusCode);
    res.json({message:err.message, stack:process.env.ENV==="development"?err.stack:null})
}

module.exports=errorMiddleware
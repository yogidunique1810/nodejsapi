const productModel = require("../model/productModel")
const asyncHandler = require('express-async-handlr')

const findProductById = asyncHandler(async(req,res)=>{
    try{
    const {id}=req.params;
    const productList = await productModel.findById(id);
    res.status(200).json({product:productList})
    }catch(error){
        res.status(500);
        throw new Error(error.message);
        
        console.log(error);
        
        res.status(500).json({error:error})
    }
})

const findAllProduct = asyncHandler(async(req,res)=>{
    try{
    const productList = await productModel.find({});
    res.status(200).json({product:productList})
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }

})

const updateProductById = asyncHandler(async(req,res)=>{
    try{
    const {id}=req.params;
    const productList = await productModel.findByIdAndUpdate(id,req.body);
    const newProductList = await productModel.findById(id);
    res.status(200).json({product:newProductList})
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

const deleteProductById = asyncHandler(async(req,res)=>{
    try{
    const {id}=req.params;
    const productList = await productModel.findByIdAndDelete(id);
    
    res.status(200).json({product:productList})
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }

})

const insertProduct= asyncHandler(async(req,res)=>{
    try{
        console.log("success");
        const product = await productModel.create(req.body);
        res.status(200).json({message:req.body, product:product})
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {findProductById,findAllProduct,updateProductById,deleteProductById,insertProduct}
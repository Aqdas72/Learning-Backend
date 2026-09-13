import { Router } from "express";
import productModel from "../model/product.model.js";
import mongoose from "mongoose";

const routes = Router();

//? CRUD Operation

//* Create
routes.post("/products",async (req,res)=>{
    const {name , description, category, price, stock, brand, rating, tags,isAvailable } = req.body;
    const newProduct = new productModel({name , description, category, price, stock, brand, rating, tags,isAvailable});
    await newProduct.save();

    res.status(201).json({
        status:true,
        Product:newProduct,
        message:"Product Saved"
    });

})
//* Read
routes.get("/products",async (req,res)=>{
    const Products = await productModel.find();
    res.status(200).json({
        status:true,
        Products
    });
})
//* Update
routes.put("/products/:id",async (req,res)=>{
    const {name , description, category, price, stock, brand, rating, tags,isAvailable } = req.body;
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json({
        status:true,
        Product:updatedProduct
    });
})
//* Delete
routes.delete("/products/:id",async (req,res)=>{
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status:true,
        Product:deletedProduct
    });
})

export default routes;
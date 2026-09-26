import express from "express";
import { authorizeRole } from "../middleware/authorizeRole.js";
import Product from "../models/products.model.js"
import { authenticateJWT } from "../middleware/authenticateJWT.js";

const routes = express.Router();

/**
 *  POST   /products
    GET    /seller/products
    PUT    /products/:id
    DELETE /products/:id
*/

//* Upload product
routes.post("/",authenticateJWT,authorizeRole("seller"),async (req,res)=>{
    //code to add a new product
    const {name,description,price,stock} = req.body;
    try {
        const productExist = await Product.findOne({$and:[{name:name},{sellerId:req.user.userId}]});

        if(productExist){
            return res.status(200).json({
                message:"This product already exist",
                product:productExist
            })
        }

        const newProduct = await Product.create({name,description,price,stock,sellerId:req.user.userId});

        res.status(201).json({
            message:"Product Added successfuly",
            product:newProduct
        })

    } catch (error) {
        res.status(500).json({
            message:"Something wents wrong",
            Error:error.message
        })
    }
});

//* get All products
routes.get("/seller/",authenticateJWT,authorizeRole("seller"),async (req,res)=>{
    try {
        const allProducts = await Product.find({sellerId:req.user.userId},{__v:0});
        if(!allProducts){
            return res.status(404).json({
                message:"No product added by this seller"
            })
        }

        res.status(200).json({
            message:"All products listed by the seller",
            TotalProduct:allProducts.length,
            products:allProducts
        })

    } catch (error) {
        res.status(500).json({
            message:"Something wents wrong"
        })   
    }
})

//* Update products
routes.patch("/:id",authenticateJWT,authorizeRole("seller"),async(req,res)=>{
    const {id} = req.params;
    try {
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({
                message:"Invalid Product Id"
            })
        }

        res.status(200).json({
            message:"Product updated successfuly",
            updatedProduct:product
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
            Error:error.message
        })
    }
})

//* Delete products
routes.delete("/:id",authenticateJWT,authorizeRole("seller"),async(req,res)=>{
    const {id} = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if(!deletedProduct){
            return res.status(404).json({
                message:"Invalid Product Id"
            })
        }

        res.status(200).json({
            message:"Product Deleted successful",
            Deletedproduct:deletedProduct
        })
    } catch (error) {
        res.status(500).json({
            message:"Something wents wrong",
            Error:error.message
        })
    }
})


export default routes;
import express from "express"

import Order from "../models/order.model.js"
import Products from "../models/products.model.js"
import { authenticateJWT } from "../middleware/authenticateJWT.js";
import { authorizeRole } from "../middleware/authorizeRole.js";


const routes = express.Router();

/**
 *  GET  /products
    GET  /products/:id
    POST /orders
    GET  /orders/my 
*/

//* Get all products
routes.get("/products",authenticateJWT,authorizeRole("user"),async(req,res)=>{
    try {
        const allProducts = await Products.find();

        res.status(200).json({
            message:"All products",
            TotalProducts:allProducts.length,
            Products:allProducts
        })
    } catch (error) {
        res.status(500).json({
            message:"Something wents wrong"
        })
    }
})

//* Get by product Id
routes.get("/products/:id",authenticateJWT,authorizeRole("user"),async(req,res)=>{
    const {id} = req.params;
    try {
        const product = await Products.findOne({id});
        if(!product){
            return res.status(404).json({
                message:"Invalid Product Id"
            })
        }

        res.status(200).json({
            message:"Product found",
            Product:product
        })
    } catch (error) {
        res.status(500).json({
            message:"Something wents wrong"
        })
    }
})


//* create order
routes.post("/",authenticateJWT,authorizeRole("user","admin","seller"),async(req,res)=>{
    const {products,totalAmount,status} = req.body;
    try {
        const order = await Order.create({
            userId:req.user.userId,
            products,
            totalAmount,
            status
        })

        res.status(201).json({
            message:"This is your order",
            Order:order
        })
    } catch (error) {
        res.status(500).json({
            message:"Something wents wrong"
        })
    }
})

//* get my order
routes.get("/my",authenticateJWT,authorizeRole("user"),async(req,res)=>{
    try {
        const myOrders = await Order.find({userId});
        if(!myOrders){
            return res.status(404).json({
                message:"No Orders"
            })
        }

        res.status(200).json({
            message:"All Orders",
            Orders:myOrders
        })
    } catch (error) {
       res.status(500).json({
        message:"Something wents wrong"
       }) 
    }
})



export default routes;
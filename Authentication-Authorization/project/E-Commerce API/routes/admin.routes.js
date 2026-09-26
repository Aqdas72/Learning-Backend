import express from "express";

import User from "../models/user.model.js"
import Order from "../models/order.model.js"
import Product from "../models/products.model.js"

import { authenticateJWT} from "../middleware/authenticateJWT.js";
import {authorizeRole} from "../middleware/authorizeRole.js"
import { authenticateSession } from "../middleware/authenticateSession.js";

const routes = express.Router();

//POST /admin/login using session authentication
//POST /admin/logout 

//* Login
routes.post("/login",
    authenticateJWT,
    authorizeRole("admin"),
    async(req,res)=>{
        try {
            console.log(req.user)
            const adminID = req.user.userId;
            req.session.adminID = adminID; //create session cookie = connect.sid

            res.status(200).json({
                message:"Admin Login",
                admin:adminID
            })
        } catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            })
        }
    }
)

//* CRUD operation
/**
 *  GET    /admin/users
    GET    /admin/orders
    GET    /admin/products
    DELETE /admin/users/:id
    DELETE /admin/products/:id
 * 
*/ 

//* Get all users
routes.get("/users",authenticateSession,async(req,res)=>{
    try {
        //fetch all users from database
        const users = await User.find(); 
        res.status(200).json({
            message:"All users fetched successfully",
            users:users
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
});

//* Get all orders
routes.get("/orders",authenticateSession,async(req,res)=>{
    try {
        //fetch all orders from database
        const orders = await Order.find();
        res.status(200).json({
            message:"All orders fetched successfully",
            TotalOrder:orders.length,
            Orders:orders
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
});

//* get all products
routes.get("/products",authenticateSession,async(req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).json({
            message:"All Products fetched successfully",
            TotalProducts:products.length,
            Products:products
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

//* User deletion
routes.delete("/users/:id",authenticateSession,async(req,res)=>{
    const {id} = req.body;
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        res.status(200).json({
            message:"User Deleted Successfuly",
            DeletedUser:deleteUser
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

//* product deletion
routes.delete("/product/:id",async(req,res)=>{
    const {id} = req.body;
    try {
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.status(200).json({
            message:"User Deleted Successfuly",
            DeletedProduct:deleteProduct
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
})


//* Logout
routes.post("/logout",authenticateSession,(req,res)=>{
    req.session.destroy((err) => {

    if (err) {
        return res.status(500).json({
            message: "Logout failed",
            error: err.message
        });
    }

    res.clearCookie("connect.sid");

    return res.status(200).json({
        message: "Admin logout successful"
    });
});
})


export default routes;
import Product from "../models/products.model.js"
export const checkOwnership = async (req,res,next)=>{
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({
                message:"Product not found"
            })
        }
        if(product.sellerId.toString() !== req.user.userId){
            return res.status(403).json({
                message:"You are not the owner of this product"
            })
        }
        next();
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}
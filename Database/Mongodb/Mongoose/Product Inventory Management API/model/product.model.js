import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    name:String,
    description: String,
    category: String,
    price: Number,
    stock: Number,
    brand: String,
    rating: Number,
    tags: [String],
    isAvailable: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const productModel = model("Products",productSchema);

export default productModel;
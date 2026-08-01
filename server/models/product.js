import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: Array,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        offerPrice: {
            type: Number,
            required: true,
        },

        image: {
            type: Array,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        inStock: {
            type: Boolean,
            default: true,
        },

        stock: {
            type: Number,
            required: true,
            default: 0,
        },

        flashSale:{
            isActive: {
                type: Boolean,
                default: false
            },

            discountPercent: {
                type: Number,
                default: 0
            },

            flashPrice: {
                type: Number,
                default: 0
            },

            expiresAt: {
                type: Date,
                default: null
            }
        }            
    },
    {
        timestamps: true,
    },
);

const Product =
    mongoose.models.product ||
    mongoose.model("product", productSchema);

export default Product;
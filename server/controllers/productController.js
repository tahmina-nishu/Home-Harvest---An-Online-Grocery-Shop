import {v2 as cloudinary} from "cloudinary"
import Product from "../models/product.js"


// Add Product : /api/product/add
export const addProduct = async (req, res)=>{
    try {
        let productData = JSON.parse(req.body.productData)

        const images = req.files

        // Check if at least one image is uploaded
        if (!images || images.length === 0) {
            return res.json({
                success: false,
                message: "Please upload at least one image"
            });
        }

        let imagesUrl = await Promise.all(
            images.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path, {
                    resource_type: 'image'
                });
                return result.secure_url
            })
        )

        // Store the data in database
        await Product.create({...productData, image: imagesUrl})

        // return the response
        return res.json({
            success: true, 
            message: "Product added"
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false, 
            message: error.message
        })
    }
}


// Get Product : /api/product/list
export const productList = async (req, res)=>{
    try {
        console.log("Fetching products...");
        console.log("Mongo Ready State:", Product.db.readyState);
        
        const products = await Product.find({})

        // send the response      
        return res.json({
            success: true, 
            products
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false, 
            message: error.message
        })
    }
}


// get single Product : /api/product/id
export const productById = async (req, res)=>{
    try {
        const { id } = req.body

        // find the product from database
        const product = await Product.findById(id);

        // Check if product exists
        if (!product) {
            return res.json({
                success: false,
                message: "Product not found"
            });
        }

        // send the response      
        return res.json({
            success: true, 
            product
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false, 
            message: error.message
        })
    }
}


// change Product inStock : /api/product/stock
export const changeStock = async (req, res)=>{
    try {
        const { id, inStock } = req.body

        // find the product and update 
        const product = await Product.findByIdAndUpdate(
            id,
            { inStock },
            { new: true }
        );

        if (!product) {
            return res.json({
                success: false,
                message: "Product not found"
            });
        }

        // send the response      
        return res.json({
            success: true, 
            message: "Stock updated"
        });

    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false, 
            message: error.message
        })
    }
}
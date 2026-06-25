import {v2 as cloudinary} from "cloudinary"
import Product from "../models/product.js"


// Add Product : /api/product/add
export const addProduct = async (req, res)=>{
    try {
        let productData = JSON.parse(req.body.productData)

        const images = req.files

        let imagesUrl = await Promise.all(
            images.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
                return result.secure_url
            })
        )

        // Store the data in database
        await Product.create({...productData, image: imagesUrl})

        // return the response
        res.JSON({
            success: true, 
            message: "Product added"
        })

    } catch (error) {
        console.log(error.message);
        res.JSON({
            success: false, 
            message: error.message
        })
    }
}


// Ge Product : /api/product/list
export const productList = async (req, res)=>{

}


// get single Product : /api/product/id
export const productById = async (req, res)=>{

}


// change Product inStock : /api/product/stock
export const changeStock = async (req, res)=>{

}
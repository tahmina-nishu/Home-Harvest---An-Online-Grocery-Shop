import {v2 as cloudinary} from "cloudinary"
import Product from "../models/product.js"

// get public id for delete the deleted product's image from cloudinary
const getPublicId = (url) => {

    const parts = url.split("/");

    const fileName = parts[parts.length - 1];

    const publicId = fileName.split(".")[0];

    return publicId;
};


// Add Product : /api/product/add
export const addProduct = async (req, res)=>{
    try {
        let productData = JSON.parse(req.body.productData)

        productData.stock = Number(productData.stock);
        productData.inStock = productData.stock > 0;

        const images = req.files;

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
        const { id } = req.params;

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


// Update Product Stock : /api/product/update-stock
export const updateProductStock = async (req, res) => {
    try {

        const { id, stock } = req.body;

        const product = await Product.findById(id);

        if (!product) {
            return res.json({
                success: false,
                message: "Product not found"
            });
        }

        product.stock = Number(stock);
        product.inStock = Number(stock) > 0;

        await product.save();

        return res.json({
            success: true,
            message: "Stock updated successfully"
        });

    } catch (error) {
        console.log(error.message);

        return res.json({
            success: false,
            message: error.message
        });
    }
};


// Delete Product : /api/product/delete/:id
export const deleteProduct = async (req, res) => {
    try {

        const { id } = req.params;


        // find product
        const product = await Product.findById(id);


        if (!product) {
            return res.json({
                success: false,
                message: "Product not found"
            });
        }


        // Delete images from Cloudinary
        if(product.image && product.image.length > 0){

            await Promise.all(
                product.image.map(async (imageUrl)=>{

                    const publicId = imageUrl
                        .split("/")
                        .pop()
                        .split(".")[0];


                    await cloudinary.uploader.destroy(publicId);

                })
            );

        }


        // Delete product from MongoDB
        await Product.findByIdAndDelete(id);


        return res.json({
            success: true,
            message: "Product deleted successfully"
        });


    } catch (error) {

        console.log(error.message);

        return res.json({
            success: false,
            message: error.message
        });

    }
};


// Flash sale offer 
export const addFlashSale = async(req,res)=>{

try{

const {
id,
discountPercent,
expiresAt
}=req.body;


const product = await Product.findById(id);


if(!product){

return res.json({
success:false,
message:"Product not found"
})

}


// calculate discount price

const flashPrice =
product.price -
(product.price * discountPercent / 100);



product.flashSale = {

isActive:true,

discountPercent,

flashPrice,

expiresAt

};



await product.save();



return res.json({

success:true,

message:"Flash sale added"

})


}catch(error){

return res.json({

success:false,
message:error.message

})

}

}
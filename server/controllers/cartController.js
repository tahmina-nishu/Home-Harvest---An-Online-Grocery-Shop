import User from "../models/User.js"


// Update user cartData : api/cart/update
export const updateCart = async (req, res)=> {
    try {
        // get userId and cartItems
        const { userId, cartItems } = req.body

        await User.findByIdAndUpdate(userId, {cartItems})

        // send the response      
        res.JSON({
            success: true, 
            message: "Cart updated"
        })

    } catch (error) {
        console.log(error.message);
        res.JSON({
            success: false, 
            message: error.message
        })
    }
}
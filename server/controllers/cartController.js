import User from "../models/User.js"


// Update user cartData : api/cart/update
export const updateCart = async (req, res)=> {
    try {
        // get userId and cartItems
        const { cartItems } = req.body;
        const userId = req.userId;

        const user = await User.findByIdAndUpdate(userId, {cartItems})

        if (!user) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }

        // send the response      
        return res.json({
            success: true, 
            message: "Cart updated"
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false, 
            message: error.message
        })
    }
}
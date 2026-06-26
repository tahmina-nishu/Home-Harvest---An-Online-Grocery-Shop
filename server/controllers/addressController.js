import Address from "../models/address.js"


// add address : /api/address/add
export const addAddress = async(req, res)=>{
    try {
        const { address } = req.body;
        const userId = req.userId;

        if (!address) {
            return res.json({
                success: false,
                message: "Address is required"
            });
        }

        // add this address in database
        await Address.create({...address, userId})

        // send the response      
        return res.json({
            success: true, 
            message: "Address added successfully"
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false, 
            message: error.message
        })
    }
}

// Get address : /api/address/get
export const getAddress = async(req, res)=>{
    try {
        const userId = req.userId;

        // find this address from address model
        const addresses = await Address.find({userId})

        // send the response      
        return res.json({
            success: true, 
            addresses
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false, 
            message: error.message
        })
    }
}
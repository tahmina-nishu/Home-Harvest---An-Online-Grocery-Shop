import Address from "../models/address.js"


// add address : /api/address/add
export const addAddress = async(req, res)=>{
    try {
        const { address, userId } = req.body

        // add this address in database
        await Address.create({...address, userId})

        // send the response      
        res.JSON({
            success: true, 
            message: "Address added successfully"
        })

    } catch (error) {
        console.log(error.message);
        res.JSON({
            success: false, 
            message: error.message
        })
    }
}

// Get address : /api/address/get
export const getAddress = async(req, res)=>{
    try {
        const { userId } = req.body

        // find this address from address model
        const addresses = await Address.find({userId})

        // send the response      
        res.JSON({
            success: true, 
            addresses
        })

    } catch (error) {
        console.log(error.message);
        res.JSON({
            success: false, 
            message: error.message
        })
    }
}
import Order from "../models/order.js";
import Product from "../models/product.js";



// place order COD : /api/order/cod
export const placeOrderCOD = async (req, res)=>{
    try {
        const userId = req.userId;
        const { items, address } = req.body;

        // check if address is available or not
        if(!address){
            // return the response
            return res.json({
                success: false, 
                message: "Add address first"
            });
        }

        // check if items are available or not
        if(!items || items.length === 0){
            // return the response
            return res.json({
                success: false, 
                message: "Add some products first"
            });
        }

        // Calculate total amount
        let amount = 0;

        for (const item of items) {

            if (item.quantity <= 0) {
                return res.json({
                    success: false,
                    message: "Invalid product quantity"
                });
            }

            const product = await Product.findById(item.product);

            if (!product) {
                return res.json({
                    success: false,
                    message: "Product not found"
                });
            }

            amount += product.offerPrice * item.quantity;
        }

        // Add 2% tax
        amount += Math.floor(amount * 0.02);

        // generate invoice number 
        const invoiceNumber = "INV-" + Date.now().toString().slice(-6);

        // Create order
        await Order.create({
            userId,
            items,
            amount,
            address,
            invoiceNumber,
            paymentType: "COD",
            isPaid: false,
            status: "Order Placed"
        });

        // return the response
        return res.json({
            success: true, 
            message: "Order placed successfully"
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false, 
            message: error.message
        })
    }
}

// Get Invoice : /api/order/invoice/:orderId
export const getInvoice = async (req, res) => {
    try {

        const { orderId } = req.params;

        const order = await Order.findById(orderId)
            .populate("items.product")
            .populate("address");

        if (!order) {
            return res.json({
                success: false,
                message: "Order not found"
            });
        }

        return res.json({
            success: true,
            order
        });

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        });
    }
}

// Get orders by userId : /api/order/user
export const getUserOrders = async (req, res) => {
    try {
        const userId = req.userId;

        const orders = await Order.find({ userId })
        .populate("items.product")
        .populate("address")
        .sort({ createdAt: -1 });

        const trackingSteps = [
            "Order Placed",
            "Order Confirmed",
            "Packed",
            "Out for Delivery",
            "Delivered"
        ];

        const updatedOrders = orders.map(order => ({
            ...order.toObject(),
            currentStep: trackingSteps.indexOf(order.status)
        }));

        // return the response
        return res.json({
            success: true, 
            orders: updatedOrders
        });

    } catch (error) {
        return res.json({
            success: false, 
            message: error.message
        })
    }
}

// Get all orders (for seller / admin) : /api/order/seller
export const getAllOrders = async (req, res) => {
    try {

        const orders = await Order.find({})
            .populate("items.product")
            .populate("address")
            .sort({ createdAt: -1 });

        const trackingSteps = [
            "Order Placed",
            "Order Confirmed",
            "Packed",
            "Out for Delivery",
            "Delivered"
        ];

        const updatedOrders = orders.map(order => ({
            ...order.toObject(),
            currentStep: trackingSteps.indexOf(order.status)
        }));

        return res.json({
            success: true,
            orders: updatedOrders
        });

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        });
    }
};

// Update Order Status : /api/order/status/:orderId
export const updateOrderStatus = async (req, res) => {
    try {

        const { orderId } = req.params;
        const { status } = req.body;

        const order = await Order.findById(orderId);

        if (!order) {
            return res.json({
                success: false,
                message: "Order not found"
            });
        }

        order.status = status;

        // Save delivery date when delivered
        if (status === "Delivered" && !order.deliveredAt) {
            order.deliveredAt = new Date();
        }

        await order.save();

        return res.json({
            success: true,
            message: "Order status updated successfully"
        });

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        });
    }
};
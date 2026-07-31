import express from 'express';
import authUser from '../middleWares/authUser.js';
import {
    getAllOrders,
    getUserOrders,
    placeOrderCOD,
    getInvoice,
    updateOrderStatus
} from '../controllers/orderController.js';
import authSeller from '../middleWares/authSeller.js';

const orderRouter = express.Router();

orderRouter.post('/cod', authUser, placeOrderCOD) 
orderRouter.get('/user', authUser ,getUserOrders) 
orderRouter.get('/seller', authSeller, getAllOrders) 
orderRouter.put('/status/:orderId', authSeller, updateOrderStatus)
orderRouter.get('/invoice/:orderId', authUser, getInvoice)

export default orderRouter;
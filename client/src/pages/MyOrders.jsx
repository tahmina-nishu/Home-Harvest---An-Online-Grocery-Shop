import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { dummyOrders } from '../assets/assets'

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([])
    const {
        currency,
        axios,
        user,
        navigate
    } = useAppContext();

    // function for fetch my orders
    const fetchMyOrders = async ()=>{
        try {
            const {data} = await axios.get('/api/order/user')
            if(data.success){
                setMyOrders(data.orders)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(user){
            fetchMyOrders()
        }
    },[user])

    // For tracking
    const trackingSteps = [
        "Order Placed",
        "Order Confirmed",
        "Packed",
        "Out for Delivery",
        "Delivered"
    ];

    // Date format
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };    

    // Estimated delivery date
    const getEstimatedDelivery = (createdAt) => {
        const deliveryDate = new Date(createdAt);
        deliveryDate.setDate(deliveryDate.getDate() + 2);
        return deliveryDate;
    };

    return (
        <div className="mt-29 pb-16">
            {/* title div START  */}
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium'>My Orders</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
            </div>
            {/* title div END  */}

            {/* Order cards START */}
            {myOrders.map((order, index)=>(
                <div key={index} className='border border-gray-300 rounded-lg my-5 p-4 py-5 max-w-4xl'>
                    <p className='flex justify-between md:items-center text-gray-700 md:font-medium max-md:flex-col'>
                        <span>OrderId : {order._id}</span>
                        <span>Payment : {order.paymentType}</span>
                        <span>Total Amount</span>
                    </p>

                    {/* show individual orders details START  */}
                    {order.items.map((item, index)=>(
                        <div className={`relative bg-white text-gray-500/70 ${order.items.length !== index + 1 && "border-b"} border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`} key={index}>
                            <div className='flex items-center mb-4 md:mb-0 '>
                                {/* product image div  */}
                                <div className='bg-primary/10 p-4 rounded-lg'>
                                    <img src={item.product.image[0]} alt="" className='w-16 h-16' />
                                </div>

                                {/* product title div  */}
                                <div className='ml-4'>
                                    <h2 className='text-xl font-medium text-gray-800'>{item.product.name}</h2>
                                    <p>Category: {item.product.category}</p>
                                </div>
                            </div>

                            {/* status & quantity div  */}
                            <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'>
                                <p>Quantity: {item.quantity || "1"}</p>
                            </div>

                            {/* amount  */}
                            <p className='text-lg text-primary font-medium'>
                                Amount: {currency}{item.product.offerPrice * item.quantity}
                            </p>                         
                        </div>
                    ))}

                            {/* show individual orders details END  */}

                            <div className="mt-5 border-t pt-4">

                                <p className="font-medium">
                                    Current Status:
                                    <span className="text-primary ml-2">
                                        {order.status}
                                    </span>
                                </p>

                                <div className="mt-3 space-y-2">

                                    {trackingSteps.map((step, i) => (

                                        <div key={i} className="flex items-center gap-3">

                                            <div className="w-5 flex justify-center">

                                                {(i < order.currentStep || (order.status === "Delivered" && i === order.currentStep)) ? (

                                                    <span className="text-green-600 text-lg font-bold">
                                                        ✔
                                                    </span>

                                                ) : i === order.currentStep ? (

                                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

                                                ) : (

                                                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>

                                                )}

                                            </div>

                                            <p
                                                className={`${
                                                    i <= order.currentStep
                                                        ? "text-gray-800 font-medium"
                                                        : "text-gray-400"
                                                }`}
                                            >
                                                {step}
                                            </p>

                                        </div>

                                    ))}

                                </div>

                                {/* ordered date */}
                                <p className="mt-4 text-sm text-gray-500">
                                    Order Date: {formatDate(order.createdAt)}
                                </p>

                                {/* Estimated delivery (show only before delivery) */}
                                {order.status !== "Delivered" && (
                                    <p className="mt-2 text-sm text-blue-700 font-medium">
                                        Estimated Delivery: {formatDate(getEstimatedDelivery(order.createdAt))}
                                    </p>
                                )}                               

                            </div>

                    <button
                        onClick={() => navigate(`/invoice/${order._id}`)}
                        className="mt-3 px-5 py-2 bg-primary text-white rounded hover:bg-primary-dull transition">
                    View Invoice
                    </button>   
                </div>
            ))}
            {/* Order cards END */}

        </div>
    )
}

export default MyOrders

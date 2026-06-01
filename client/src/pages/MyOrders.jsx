import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { dummyOrders } from '../assets/assets'

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([])
    const {currency} = useAppContext()

    // function for fetch my orders
    const fetchMyOrders = async ()=>{
        setMyOrders(dummyOrders)
    }

    useEffect(()=>{
        fetchMyOrders()
    },[])

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
                                <p>Status: {order.status}</p>
                                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                            </div>

                            {/* amount  */}
                            <p className='text-lg text-primary font-medium'>
                                Amount: {currency}{item.product.offerPrice * item.quantity}
                            </p>
                        </div>
                    ))}
                    {/* show individual orders details END  */}
                </div>
            ))}
            {/* Order cards END */}

        </div>
    )
}

export default MyOrders

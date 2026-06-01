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
                        <span>Total Amount : {currency}{order.amount}</span>
                    </p>
                </div>
            ))}
            {/* Order cards END */}

        </div>
    )
}

export default MyOrders

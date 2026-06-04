import React, { useEffect, useState } from 'react'
import {useAppContext} from '../../context/AppContext'
import { dummyOrders } from '../../assets/assets';

const Orders = () => {
    const boxIcon = "https://tse1.mm.bing.net/th/id/OIP.oDKAtl5OT4BI-OUW5h_OLQHaHO?rs=1&pid=ImgDetMain&o=7&rm=3"

    const {currency} = useAppContext(); 
    const [orders, setOrders] = useState([])

    //function for fetch the orders
    const fetchOrders = async ()=>{
        setOrders(dummyOrders)
    }

    useEffect(()=>{
        fetchOrders();
    },[])
    
    return (
        <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll pb-14">
            <div className="md:p-10 p-4 space-y-4">
                <h2 className="text-lg font-medium">Orders List</h2>
                {orders.map((order, index) => (
                    <div key={index} className="flex flex-col  md:items-center md:flex-row gap-5 justify-between p-5 max-w-4xl rounded-md border border-gray-300">
                        <div className="flex gap-5 max-w-80">
                            <img className="w-10 h-10 object-cover " src={boxIcon} alt="boxIcon" />
                            <div className="flex flex-col gap-1">
                                {order.items.map((item, index) => (
                                    <div key={index} className="flex flex-col">
                                        <p className="font-medium">
                                            {item.product.name} <span className="text-primary">x {item.quantity}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-sm md:text-base text-black/60">
                            <p className='text-black/80'>{order.address.firstName} {order.address.lastName}</p>

                            <p>{order.address.street}, {order.address.city}</p>

                            <p>{order.address.state}, {order.address.zipCode}, {order.address.country}</p>


                            <p></p>

                            <p>{order.phone}</p>
                        </div>

                        <p className="font-medium text-lg my-auto ">{currency}{order.amount}</p>

                        <div className="flex flex-col text-sm md:text-base text-black/60">
                            <p>Method: {order.paymentType}</p>
                            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                            <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Orders

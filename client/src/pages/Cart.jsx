import React, { useEffect, useState } from 'react'
import {useAppContext} from "../context/AppContext";
import { dummyAddresses } from '../assets/assets';

const Cart = () => {

    const {products, currency, cartItems, removeFromCart, getCartCount, updateCartItem, navigate, getCartAmount} = useAppContext()

    const [cartArray, setCartArray] = useState([])
    const [addresses, setAddresses] = useState(dummyAddresses)
    const [showAddress, setShowAddress] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(dummyAddresses[0])
    const [paymentOption, setPaymentOption] = useState("COD")


    // function for get product data and add in cart array
    const getCart = () => {
        let tempArray = [];

        for (const key in cartItems) {
            const product = products.find(
                (item) => String(item._id) === String(key)
            );

            if (product) {
                tempArray.push({
                    ...product,
                    quantity: cartItems[key]
                });
            }
        }

        setCartArray(tempArray);
    };

    // order place function
    const placeOrder = async ()=>{

    }

    // useEffect to execute function
    useEffect(()=>{
        if(products.length > 0 && cartItems){
            getCart()
        }
    },[products, cartItems])
    
    
    return products.length > 0 && cartItems ? (
        <div className="mt-20 flex flex-col md:flex-row items-start py-16 max-w-7xl w-full px-6 mx-auto gap-8">
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-primary">{getCartCount()} Items</span>
                </h1>

                <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr] bg-primary text-white rounded-xl px-5 py-4 mb-4">
                    <p>Product</p>
                    <p className="text-center">Price</p>
                    <p className="text-center">Quantity</p>
                    <p className="text-center">Subtotal</p>
                </div>

                {cartArray.map((product, index) => (

                    <div
                        key={index}
                        className="grid grid-cols-[2.5fr_1fr_1fr_1fr] items-center border-b border-primary/10 py-5"
                    >

                        {/* Product */}
                        <div className="flex items-center gap-4">

                            {/* Remove Button */}
                            <button
                                onClick={() => removeFromCart(product._id)}
                                className="text-xl text-gray-400 hover:text-primary transition"
                            >
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0" stroke="#fe3507" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                            </button>

                            {/* Product Image */}
                            <div
                                onClick={() => {
                                    navigate(
                                        `/products/${product.category.toLowerCase()}/${product._id}`
                                    );
                                    scrollTo(0, 0);
                                }}
                                className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden"
                            >
                                <img
                                    className="max-w-full h-full object-cover"
                                    src={product.image[0]}
                                    alt={product.name}
                                />
                            </div>

                            {/* Product Info */}
                            <div>

                                <p className="font-semibold text-gray-800">
                                    {product.name}
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    {product.weight || "1 Kg"}
                                </p>

                            </div>

                        </div>

                        {/* Price */}
                        <p className="text-center font-semibold text-primary">
                            {currency}
                            {product.offerPrice}
                        </p>

                        {/* Quantity */}
                        <div className="flex justify-center">

                            <div className="flex items-center border border-primary/20 rounded-lg overflow-hidden">

                                <button
                                    onClick={() =>
                                        cartItems[product._id] > 1
                                            ? updateCartItem(
                                                    product._id,
                                                    cartItems[product._id] - 1
                                                )
                                            : removeFromCart(product._id)
                                    }
                                    className="px-3 py-1 bg-primary/5 hover:bg-primary/10 text-primary transition"
                                >
                                    -
                                </button>

                                <span className="px-4 text-primary font-medium">
                                    {cartItems[product._id]}
                                </span>

                                <button
                                    onClick={() =>
                                        updateCartItem(
                                            product._id,
                                            cartItems[product._id] + 1
                                        )
                                    }
                                    className="px-3 py-1 bg-primary/5 hover:bg-primary/10 text-primary transition"
                                >
                                    +
                                </button>

                            </div>

                        </div>

                        {/* Subtotal */}
                        <p className="text-center font-bold text-primary">
                            {currency}
                            {(product.offerPrice * cartItems[product._id]).toFixed(2)}
                        </p>

                    </div>

                ))}

                <button onClick={()=>{navigate("/products"); scrollTo(0,0)}} className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium">
                    <svg className='group-hover:-translate-x-1 transition' width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1" stroke="#615fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Continue Shopping
                </button>

            </div>

            <div className="max-w-90 w-full bg-primary/3 p-5 mt-16 border border-primary/70">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500">{selectedAddress ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}` : "No address found"}</p>
                        <button onClick={() => setShowAddress(!showAddress)} className="text-indigo-500 hover:underline cursor-pointer">
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                                {addresses.map((address, index)=>(
                                    <p onClick={() => {setSelectedAddress(address); setShowAddress(false)}} className="text-gray-500 p-2 hover:bg-gray-100">
                                        {address.street}, {address.city}, {address.state},  {address.country} 
                                    </p>
                                ))} 
                                <p onClick={() => navigate("/add-address")} className="text-primary text-center cursor-pointer p-2 hover:bg-primary/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select onChange={e => setPaymentOption(e.target.value)} className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>{currency}{getCartAmount()} </span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>{currency}{getCartAmount() * 2 /100}</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>{currency}{getCartAmount() + getCartAmount() * 2 /100}</span>
                    </p>
                </div>

                <button onClick={placeOrder} className="w-full py-3 mt-6 cursor-pointer bg-primary text-white font-medium hover:bg-primary-dull transition">
                    {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
                </button>
            </div>
        </div>
    ) : null

}

export default Cart

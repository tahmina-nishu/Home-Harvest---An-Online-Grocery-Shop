import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {

    const {
        currency,
        addToCart,
        removeFromCart,
        updateCartItem,
        cartItems,
        navigate,
    } = useAppContext();

    // quantity likhe change korar jonno (backspace diye kete j kono nmbr likha jabe)
    const [qty, setQty] = useState(cartItems[product._id] || 1);

    useEffect(() => {
        setQty(cartItems[product._id] || 1);
    }, [cartItems, product._id]);    

    // product available hole eta show korbe
    return product && (

        // ------- ekhane onClick ta individual product er details er jonno ---------
        <div onClick={() => {
                navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
                window.scrollTo(0, 0);
            }}
            className="border border-primary/50 rounded-xl md:px-4 px-3 py-3 bg-white w-full shadow-sm hover:shadow-md transition">

            {/* product image */}
            <div className="group cursor-pointer flex items-center justify-center px-2" >
                <img
                    className="group-hover:scale-105 transition duration-300 w-46 h-36 object-cover mb-2 mt-2"
                    src={product.image[0]}
                    alt={product.name}
                />
            </div>

            <div className="text-gray-500/70 text-sm">

                {/* category */}
                <p>{product.category}</p>

                {/* product name */}
                <p className="text-gray-800 font-medium text-base md:text-lg truncate w-full">
                    {product.name}
                </p>

                {/* rating */}
                <div className="flex items-center gap-0.5 mt-1">

                    {Array(5).fill("").map((_, i) => (
                        product.rating > i ? (
                            <svg
                                key={i}
                                width="14"
                                height="13"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                                    fill="#F4C542"
                                />
                            </svg>
                        ) : (
                            <svg
                                key={i}
                                width="14"
                                height="13"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z"
                                    fill="#F4C542"
                                    fillOpacity="0.35"
                                />
                            </svg>
                        )
                    ))}

                    <p className="ml-1">({product.rating})</p>
                </div>

                {/* price + cart button */}
                <div className="flex flex-col gap-3 mt-3">

                    {/* price */}
                    <p className="text-lg md:text-xl font-semibold text-primary">
                        {currency}{product.offerPrice}{" "}
                        <span className="text-gray-500/60 text-xs md:text-sm line-through font-normal">
                            {currency}{product.price}
                        </span>
                    </p>

                    {/* add to cart */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full"
                    >
                        
                    {/* Add to cart button  */}
                    {product.stock > 0 ? (

                        !cartItems[product._id] ? (

                            <button
                                className="flex items-center justify-center gap-2 bg-primary/10 border border-primary w-full h-9 rounded-lg text-primary font-medium cursor-pointer hover:bg-primary/15 transition"
                                onClick={() => addToCart(product._id)}
                            >
                                Add to Cart
                            </button>

                        ) : (

                            <div className="flex items-center justify-between px-2 w-full h-9 bg-primary/15 text-primary rounded-lg">

                                <button
                                    onClick={() => removeFromCart(product._id)}
                                    className="cursor-pointer text-lg px-2 h-full"
                                >
                                    -
                                </button>

                                <input
                                    type="number"
                                    min="1"
                                    value={qty}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={(e) => {

                                        const value = e.target.value;


                                        // backspace allow
                                        if(value === ""){

                                            setQty("");

                                            return;
                                        }


                                        const quantity = Number(value);


                                        if(quantity < 1){
                                            return;
                                        }


                                        const updated = updateCartItem(
                                            product._id,
                                            quantity
                                        );


                                        if(updated){

                                            // update successful হলে input change হবে
                                            setQty(quantity);

                                        }
                                        else{

                                            // stock বেশি হলে আগের quantity থাকবে
                                            setQty(cartItems[product._id]);

                                        }

                                    }}
                                    onBlur={() => {
                                        let quantity = Number(qty);

                                        if (!quantity || quantity < 1) {
                                            quantity = 1;
                                        }

                                        updateCartItem(product._id, quantity);
                                    }}
                                    className="w-14 h-7 text-center border rounded outline-none bg-white"
                                />

                                <button
                                    onClick={() => addToCart(product._id)}
                                    className="cursor-pointer text-lg px-2 h-full"
                                >
                                    +
                                </button>

                            </div>

                        )

                    ) : (

                    <button
                        disabled
                        className="w-full h-9 rounded-lg bg-red-100 border border-red-300 text-red-600 font-medium cursor-not-allowed opacity-80"
                    >
                        Out of Stock
                    </button>

                    )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
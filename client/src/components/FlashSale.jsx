import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const FlashSale = () => {

    const {
        products,
        currency,
        cartItems,
        addToCart,
        removeFromCart,
        navigate,
    } = useAppContext();

    const [timeLeft, setTimeLeft] = useState({
        days: 7,
        hours: 8,
        minutes: 5,
        seconds: 11,
    });

    useEffect(() => {

        const timer = setInterval(() => {

            setTimeLeft((prev) => {

                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                }
                else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                }
                else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }
                else if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }

                return { days, hours, minutes, seconds };

            });

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    const dealProducts = products
        .filter((item) => item.inStock)
        .slice(0, 2);

    const formatTime = (value) =>
        value.toString().padStart(2, "0");

    return (

        <section className="mt-16 bg-primary/5 border border-primary/10 rounded-3xl overflow-hidden">

            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 p-6 md:p-10 items-center">

                {/* LEFT SIDE */}
                <div className="flex flex-col justify-center">

                    <p className="text-primary font-medium text-lg mb-2">
                        Deals Of The Week
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Grab The Best Offer Of This Week!
                    </h2>

                    <p className="text-gray-500 mt-4">
                        Hurry up! Special offers end soon.
                    </p>

                    {/* COUNTDOWN */}
                    <div className="flex flex-wrap gap-3 mt-8">

                        {[
                            { value: timeLeft.days, label: "Days" },
                            { value: timeLeft.hours, label: "Hrs" },
                            { value: timeLeft.minutes, label: "Mins" },
                            { value: timeLeft.seconds, label: "Secs" },
                        ].map((item, index) => (

                            <div key={index}>

                                <div className="w-16 h-16 md:w-18 md:h-18 rounded-lg bg-primary text-white flex items-center justify-center text-xl font-bold">
                                    {formatTime(item.value)}
                                </div>

                                <p className="text-center text-sm mt-1 text-gray-600">
                                    {item.label}
                                </p>

                            </div>

                        ))}

                    </div>

                    <button
                        onClick={() => {
                            navigate("/products");
                            scrollTo(0, 0);
                        }}
                        className="mt-8 bg-primary text-white px-6 py-3 rounded-full w-fit hover:scale-105 transition"
                    >
                        View All →
                    </button>

                </div>

                {/* RIGHT SIDE */}
                <div className="grid sm:grid-cols-2 gap-5">

                    {dealProducts.map((product) => (

                        <div
                            key={product._id}
                            onClick={() => {
                                navigate(
                                    `/products/${product.category.toLowerCase()}/${product._id}`
                                );
                                scrollTo(0, 0);
                            }}
                            className="bg-white rounded-2xl p-4 border border-primary/10 cursor-pointer hover:shadow-lg transition"
                        >

                            {/* OFFER BADGE */}
                            <div className="inline-flex bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                {Math.round(
                                    ((product.price - product.offerPrice) /
                                        product.price) *
                                    100
                                )}
                                % OFF
                            </div>

                            {/* IMAGE */}
                            <div className="flex justify-center mt-4">

                                <img
                                    className="group-hover:scale-105 transition duration-300 w-46 h-36 object-cover mb-2 mt-2"
                                    src={product.image[0]}
                                    alt={product.name}
                                />

                            </div>

                            {/* CATEGORY */}
                            <p className="text-gray-400 text-xs mt-3">
                                {product.category}
                            </p>

                            {/* NAME */}
                            <h3 className="font-medium text-gray-800 truncate">
                                {product.name}
                            </h3>

                            {/* RATING */}
                            <div className="flex items-center gap-1 mt-2">

                                <span className="text-yellow-500">
                                    ★★★★★
                                </span>

                                <span className="text-sm text-gray-500">
                                    ({product.rating})
                                </span>

                            </div>

                            {/* PRICE */}
                            <div className="mt-3">

                                <span className="text-primary font-bold text-xl">
                                    {currency}
                                    {product.offerPrice}
                                </span>

                                <span className="ml-2 text-gray-400 line-through text-sm">
                                    {currency}
                                    {product.price}
                                </span>

                            </div>

                            {/* CART */}
                            <div
                                className="mt-4"
                                onClick={(e) => e.stopPropagation()}
                            >

                                {!cartItems[product._id] ? (

                                    <button
                                        onClick={() =>
                                            addToCart(product._id)
                                        }
                                        className="w-full py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
                                    >
                                        Add To Cart
                                    </button>

                                ) : (

                                    <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-primary/10 text-primary">

                                        <button
                                            onClick={() =>
                                                removeFromCart(product._id)
                                            }
                                            className="text-lg"
                                        >
                                            -
                                        </button>

                                        <span>
                                            {cartItems[product._id]}
                                        </span>

                                        <button
                                            onClick={() =>
                                                addToCart(product._id)
                                            }
                                            className="text-lg"
                                        >
                                            +
                                        </button>

                                    </div>

                                )}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
};

export default FlashSale;
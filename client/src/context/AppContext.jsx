import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{

    const currency = import.meta.env.VITE_CURRENCY;;

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({})

    // function for fetch products 
    const fetchProducts = async ()=>{
        setProducts(dummyProducts)
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    // function for add product in cart
    const addToCart = (itemId)=>{
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]) {
            cartData[itemId] += 1;
        }
        else {
            cartData[itemId] = 1
        }
        setCartItems(cartData);
        toast.success("Added to cart successfully")
    }

    // function for update data in cart
    const updateCartItem = (itemId, quantity)=>{
        let cartData = structuredClone(cartItems);

        cartData[itemId] = quantity;
        
        setCartItems(cartData);
        toast.success("Cart updated successfully")
    }

    // function for remove product from cart
    const removeFromCart = (itemId)=>{
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]) {
            cartData[itemId] -= 1;
            if(cartData[itemId] === 0){
                delete cartData[itemId];
            }
        }
        toast.success("Removed from cart successfully")
        setCartItems(cartData);
    } 

    // function to count cart items
    const getCartCount = ()=>{
        let totalCount = 0;
        for(const item in cartItems){
            totalCount += cartItems[item]
        }

        return totalCount;
    }

    // function to count total amount of cart items
    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            let itemInfo = products.find((product)=> product._id === item)
            if(cartItems[item] > 0){
                totalAmount += itemInfo.offerPrice * cartItems[item]
            }
        }

        return Math.floor(totalAmount *100)/100;  // decimal er por 2 digit rakhbo ejonno. orthat eta setprecision er kaj kore
    }

    const value = {
        navigate, 
        user, 
        setUser, 
        isSeller, 
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        currency,
        addToCart,
        updateCartItem,
        removeFromCart,
        cartItems,
        searchQuery,
        setSearchQuery,
        getCartCount,
        getCartAmount,
        };

    return (
        <AppContext.Provider value={value}>
            {children} 
        </AppContext.Provider>
    );
};

export const useAppContext = ()=>{
    return useContext(AppContext)
}
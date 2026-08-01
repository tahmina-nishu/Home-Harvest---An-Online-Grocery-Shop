import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{

    const currency = import.meta.env.VITE_CURRENCY;;

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState("")

    // fetch seller status
    const fetchSeller = async () => {
        try {
            const {data} = await axios.get('/api/seller/is-auth');

            if(data.success){
                setIsSeller(true)
            }else{
                setIsSeller(false)
            }
        } catch (error) {
            setIsSeller(false)
        }
    }

    // fetch userAuth status, user data and cart items
    const fetchUser = async () => {
        try {
            //API call
            const {data} = await axios.get('/api/user/is-auth');

            if(data.success){
                setUser(data.user)
                setCartItems(data.user.cartItems)
            }else{
                setUser(null)
            }
        } catch (error) {
            setIsSeller(false)
        }
    }

    // function for fetch products 
    const fetchProducts = async ()=>{
        try {
            const {data} = await axios.get('/api/product/list')

            // check the response
            if(data.success){
                setProducts(data.products)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // function for add product in cart
    const addToCart = (itemId) => {

        // যে product add করা হচ্ছে সেটা বের করো
        const product = products.find(item => item._id === itemId);

        if (!product) return;

        let cartData = structuredClone(cartItems);

        const currentQuantity = cartData[itemId] || 0;

        // Stock limit check
        if (currentQuantity >= product.stock) {
            toast.error(`Only ${product.stock} item(s) available in stock`);
            return;
        }

        cartData[itemId] = currentQuantity + 1;

        setCartItems(cartData);
        toast.success("Added to cart successfully");
    }

    // function for update data in cart
    const updateCartItem = (itemId, quantity) => {

        const product = products.find((item) => item._id === itemId);

        if (!product) return;

        if (quantity > product.stock) {
            toast.error(`Only ${product.stock} item(s) available in stock`);
            return false;
        }

        let cartData = structuredClone(cartItems);

        cartData[itemId] = quantity;

        setCartItems(cartData);

        return true;
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

    // function for completely remove product from cart
    const deleteFromCart = (itemId) => {

        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            delete cartData[itemId];
        }

        setCartItems(cartData);

        toast.success("Removed from cart successfully");
    }

    // function to count cart items
    const getCartCount = () => {
        return Object.keys(cartItems).length;
    }

    // function to count total amount of cart items
    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            let itemInfo = products.find((product)=> product._id === item)
            if(itemInfo && cartItems[item] > 0){
                totalAmount += itemInfo.offerPrice * cartItems[item]
            }
        }

        return Math.floor(totalAmount *100)/100;  // decimal er por 2 digit rakhbo ejonno. orthat eta setprecision er kaj kore
    }


    useEffect(()=>{
        fetchProducts()
        fetchUser()
        fetchSeller()
    },[])

    // Update database cart items
    useEffect(()=>{
        // api call
        const updateCart = async ()=>{
            try {
                const {data} = await axios.post('/api/cart/update', {cartItems})

                if(!data.success){
                    toast.error(data.message)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }

        if(user){
            updateCart()
        }
        
    },[cartItems])


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
        deleteFromCart,
        cartItems,
        searchQuery,
        setSearchQuery,
        getCartCount,
        getCartAmount,
        axios,
        fetchProducts,
        setCartItems
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
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import {Toaster} from "react-hot-toast";
import Footer from './components/Footer';
import { useAppContext } from './context/AppContext';
import Login from './components/Login';
import AllProducts from './pages/AllProducts';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AddAddress from './pages/AddAddress';
import MyOrders from './pages/MyOrders';
import SellerLogin from './components/seller/SellerLogin';
import SellerLayout from './pages/seller/SellerLayout';


const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller")
  const {showUserLogin, isSeller} = useAppContext()
  
  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>

      {isSellerPath ? null : <Navbar></Navbar>}
      {showUserLogin ? <Login></Login> : null}

    <Toaster></Toaster>

      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24"}`}>
        <Routes>
          {/* Home Route  */}
          <Route path='/' element={<Home></Home>}></Route>
          
          {/* All Products Route  */}
          <Route path='/products' element={<AllProducts></AllProducts>}></Route>
          
          {/* Category Route  */}
          <Route path='/products/:category' element={<ProductCategory></ProductCategory>}></Route>
          
          {/* Individual Product details Route  */}
          <Route path='/products/:category/:_id' element={<ProductDetails></ProductDetails>}></Route>
          
          {/* Cart Route  */}
          <Route path='/cart' element={<Cart></Cart>}></Route>
          
          {/* Add address Route  */}
          <Route path='/add-address' element={<AddAddress></AddAddress>}></Route>
          
          {/* My orders page Route  */}
          <Route path='/my-orders' element={<MyOrders></MyOrders>}></Route>
          <Route path='/seller' element={isSeller ? <SellerLayout></SellerLayout> : <SellerLogin></SellerLogin>}>

          </Route>
        </Routes>
      </div>
      {isSellerPath ? null : <Footer></Footer>}
    </div>
  )
}

export default App

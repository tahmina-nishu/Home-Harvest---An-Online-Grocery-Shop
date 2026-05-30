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


const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller")
  const {showUserLogin} = useAppContext()
  
  return (
    <div>

      {isSellerPath ? null : <Navbar></Navbar>}
      {showUserLogin ? <Login></Login> : null}

    <Toaster></Toaster>

      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24"}`}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/products' element={<AllProducts></AllProducts>}></Route>
          <Route path='/products/:category' element={<ProductCategory></ProductCategory>}></Route>
          <Route path='/products/:category/:_id' element={<ProductDetails></ProductDetails>}></Route>
        </Routes>
      </div>
      {isSellerPath ? null : <Footer></Footer>}
    </div>
  )
}

export default App

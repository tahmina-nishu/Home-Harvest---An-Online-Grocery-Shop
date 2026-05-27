import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller")
  return (
    <div>
      {isSellerPath ? null : <Navbar></Navbar>}
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24"}`}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App

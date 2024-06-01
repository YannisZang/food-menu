import React, { useState } from 'react'
import NarBar from './components/NarBar/NarBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'




const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className='app'>
        <NarBar setShowLogin={setShowLogin}/>
        {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
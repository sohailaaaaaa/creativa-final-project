import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Banner from './Home/Banner'
import Products from './Home/Products'
import Features from './Home/Features'
import CallToAction from './Home/CallToAction'
import { CartProvider } from 'react-use-cart'

function App() {
  return (
    <CartProvider>
      <div>
      <Navbar/>
      <Banner/>
      <Products/>
      <Features/>
      <CallToAction/>
      <Footer/>
      </div>
      
    </CartProvider>
  )
}

export default App

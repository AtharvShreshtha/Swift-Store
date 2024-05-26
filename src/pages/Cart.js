import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import CartItems from '../components/CartItems/CartItems'

const Cart = () => {
  return (
    <div>
      <Navbar/>
      <CartItems/>
      <Footer/>
    </div>
  )
}

export default Cart

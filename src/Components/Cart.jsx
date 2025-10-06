import React from 'react'
import CartSummary from './CartSummary'
import CartItem from './CartItem'

function Cart() {
  return (
    <div className='grid grid-cols-2'>
      <CartItem/>
      <CartSummary/>
    </div>
  )
}

export default Cart

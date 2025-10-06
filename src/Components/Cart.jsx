import CartSummary from './CartSummary'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

function Cart() {
  const cartItems = useSelector(state => state.cart)
  const items = useSelector(state => state.items)

  const finalItems = items.filter(item => {
    const itemIndex = cartItems.indexOf(item.id)
    return itemIndex >= 0
  })
  return (
    <div className='grid grid-cols-2'>
      {finalItems.map(item => <CartItem item={item}/>)}
      <CartSummary/>
    </div>
  )
}

export default Cart

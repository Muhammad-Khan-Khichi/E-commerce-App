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
<div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
  <div className="space-y-5">
    {finalItems.map((item) => (
      <CartItem key={item.id} item={item} />
    ))}
  </div>

  <div className="lg:sticky lg:top-6 h-fit">
    <CartSummary />
  </div>
</div>

  )
}

export default Cart

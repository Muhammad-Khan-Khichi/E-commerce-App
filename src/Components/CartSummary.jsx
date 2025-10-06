import { useSelector } from "react-redux";

function CartSummary() {
  const cartItemIds = useSelector((state) => state.cart);

    const items = useSelector(state => state.items)

  const finalItems = items.filter(item => {
    const itemIndex = cartItemIds.indexOf(item.id)
    return itemIndex >= 0
  })

    let totalItem = cartItemIds.length
    let totalMRP = 0
    let totalDiscount = 0
    const CONVENIENCE_FEE = 99

    finalItems.forEach((cartItem) => {
      totalMRP += cartItem.original_price - cartItem.current_price
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEE

  return (
    <div className="w-full max-w-sm bg-white shadow-2xl rounded-2xl p-6 my-12">

      <h2 className="font-bold text-lg border-b pb-2 text-gray-800">
        PRICE DETAILS <span className="text-gray-500 font-medium">({totalItem})</span>
      </h2>

      
      <div className="mt-4 space-y-3 text-gray-700">
        <div className="flex justify-between font-medium">
          <span>Total MRP</span>
          <span>${totalMRP}</span>
        </div>

        <div className="flex justify-between font-medium">
          <span>Discount on MRP</span>
          <span className="text-green-600">-${totalDiscount}</span>
        </div>

        <div className="flex justify-between font-medium">
          <span>Commerce Fee</span>
          <span>${CONVENIENCE_FEE}</span>
        </div>
      </div>

      <hr className="my-4" />

    
      <div className="flex justify-between text-lg font-semibold text-gray-900">
        <span>Total Amount</span>
        <span>${finalPayment}</span>
      </div>


      <button
        className="mt-6 w-full bg-red-500 hover:bg-red-600 active:scale-[0.98] transition-all text-white font-semibold text-lg py-3 rounded-lg focus:outline-none"
      >
        PLACE ORDER
      </button>
    </div>
  );
}

export default CartSummary;

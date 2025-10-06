

function CartSummary() {
  return (
    <div className="shadow-2xl p-4">
      <h2 className="font-bold">  PRICE DETAILS (3 items)  </h2>
      <div className="flex items-center justify-between font-semibold my-2">
        <h2>Total MRP</h2>
        <p>  $2345  </p>
      </div>
      <div className="flex items-center justify-between font-semibold my-2">
        <h2>Discount on MRP</h2>
        <p>  -$999  </p>
      </div>
      <div className="flex items-center justify-between font-semibold my-2">
        <h2>Commerce Fee</h2>
        <p>  $99  </p>
      </div>
      <hr />
      <div className="flex items-center justify-between font-semibold my-2">
        <h2>Total Amount</h2>
        <p>  $3345  </p>
      </div>
      <button className="p-2 bg-red-400  rounded text-lg text-white font-medium  my-2 w-full cursor-pointer focus:outline-0 active:scale-[0.98]">PLACE ORDER</button>

    </div>
  )
}

export default CartSummary

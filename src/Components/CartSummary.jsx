function CartSummary() {
  return (
    <div className="w-full max-w-sm bg-white shadow-2xl rounded-2xl p-6 my-12">

      <h2 className="font-bold text-lg border-b pb-2 text-gray-800">
        PRICE DETAILS <span className="text-gray-500 font-medium">(3 items)</span>
      </h2>

      
      <div className="mt-4 space-y-3 text-gray-700">
        <div className="flex justify-between font-medium">
          <span>Total MRP</span>
          <span>$2345</span>
        </div>

        <div className="flex justify-between font-medium">
          <span>Discount on MRP</span>
          <span className="text-green-600">−$999</span>
        </div>

        <div className="flex justify-between font-medium">
          <span>Commerce Fee</span>
          <span>$99</span>
        </div>
      </div>

      <hr className="my-4" />

    
      <div className="flex justify-between text-lg font-semibold text-gray-900">
        <span>Total Amount</span>
        <span>$3345</span>
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

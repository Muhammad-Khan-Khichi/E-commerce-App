import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cartSlice";
import { RiDeleteBin5Fill } from "react-icons/ri";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  if (!item) return null;

  const handleRemoveItem = () => {
    if (item?.id) {
      dispatch(cartAction.removeToCart(item.id));
    }
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-4 mb-4 hover:shadow-lg transition-shadow duration-300">

      <div className="flex-shrink-0 w-28 h-28 overflow-hidden rounded-xl border border-gray-200">
        <img
          src={item.image || "/placeholder.jpg"} 
          alt={item?.item_name || "Product image"}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow px-4">
        <h2 className="text-lg font-semibold text-gray-900">{item.company}</h2>
        <p className="text-sm text-gray-600 truncate">{item.item_name}</p>

        
        <div className="mt-2 text-sm flex items-center gap-2">
          <span className="text-green-600 font-semibold text-base">
            ${item.current_price}
          </span>
          <span className="text-gray-400 line-through">
            ${item.original_price}
          </span>
          <span className="text-red-500 font-medium">
            ({item.discount_percentage}% OFF)
          </span>
        </div>


        <div className="mt-2 text-sm text-gray-500">
          <span className="font-medium text-gray-700">
            {item.return_period} days
          </span>{" "}
          return available
        </div>

        <div className="text-sm text-gray-500">
          Delivery by{" "}
          <span className="font-medium text-gray-700">
            {item.delivery_date}
          </span>
        </div>
      </div>

      <button
        onClick={handleRemoveItem}
        className="text-red-500 hover:text-red-600 text-2xl p-2 rounded-full transition-all duration-200 hover:bg-red-100"
      >
        <RiDeleteBin5Fill />
      </button>
    </div>
  );
};

export default CartItem;

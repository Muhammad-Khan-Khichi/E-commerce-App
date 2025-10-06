import { FaShoppingCart } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux"
import { cartAction } from "../store/cartSlice";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function HomeItem({ item }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart);
  const elemFound = cartItems.indexOf(item.id) >= 0;


  const handleAddToCart = () => {
    dispatch(cartAction.addToCart(item.id))
    console.log("cart added");
  }

  const handleRemoveToCart = () => {
    dispatch(cartAction.removeToCart(item.id))
  }

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Product Image */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.item_name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        {/* Rating */}
        <div className="flex items-center text-yellow-500 font-medium text-sm">
          <span>{item.rating.stars} ★</span>
          <span className="text-gray-500 ml-1">({item.rating.count})</span>
        </div>

        {/* Company & Item Name */}
        <h2 className="text-lg font-semibold text-gray-900 mt-2 truncate">
          {item.company}
        </h2>
        <p className="text-sm text-gray-600 truncate">{item.item_name}</p>

        {/* Price Section */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-green-600">
            ${item.current_price}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${item.original_price}
          </span>
        </div>

        {/* Discount */}
        {item.discount_percentage > 0 && (
          <span className="text-red-500 text-sm font-medium mt-1">
            {item.discount_percentage}% OFF
          </span>
        )}

        {/* Add to Cart Button */}
        {
          elemFound ?         <button
        onClick={handleRemoveToCart }
        className="w-full mt-4 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition-all duration-200">
          {/* <FaShoppingCart className="text-lg" /> */}
          <IoIosRemoveCircleOutline className="text-lg" />
          Remove to Cart
        </button> :         <button
        onClick={handleAddToCart }
        className="w-full mt-4 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition-all duration-200">
          <IoAddCircleOutline className="text-lg"  />
          Add to Cart
        </button>
        }

      </div>
    </div>
  );
}

export default HomeItem;

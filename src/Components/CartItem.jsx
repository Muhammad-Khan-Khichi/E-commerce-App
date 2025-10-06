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
    <div className="flex items-center gap-6 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      {/* Product Image */}
      <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
        <img
          src={item.image || "/placeholder.jpg"}
          alt={item?.item_name || "Product image"}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow min-w-0">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight truncate">
          {item.company}
        </h2>
        <p className="text-sm text-gray-600 truncate">{item.item_name}</p>

        {/* Price Section */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-green-600 font-semibold text-base sm:text-lg">
            ₹{item.current_price}
          </span>
          <span className="text-gray-400 line-through">
            ₹{item.original_price}
          </span>
          <span className="text-red-500 font-semibold text-xs sm:text-sm bg-red-50 px-2 py-0.5 rounded-full">
            {item.discount_percentage}% OFF
          </span>
        </div>

        {/* Return & Delivery */}
        <div className="mt-3 text-xs sm:text-sm text-gray-500 space-y-1">
          <p>
            <span className="font-medium text-gray-700">
              {item.return_period} days
            </span>{" "}
            return available
          </p>
          <p>
            Delivery by{" "}
            <span className="font-medium text-gray-800">
              {item.delivery_date}
            </span>
          </p>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={handleRemoveItem}
        className="text-red-500 hover:text-white bg-red-100 hover:bg-red-500 text-xl sm:text-2xl p-2.5 sm:p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
        title="Remove from Cart"
      >
        <RiDeleteBin5Fill />
      </button>
    </div>
  );
};

export default CartItem;

function HomeItem({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 flex flex-col gap-3 relative overflow-hidden group cursor-pointer transition-all duration-300">

      {/* Discount badge */}
      {item.discount_percentage > 0 && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md">
          {item.discount_percentage}% OFF
        </span>
      )}

      {/* Product image */}
      <div className="w-full h-56 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
        <img
          src={item.image}
          alt={item.item_name}
          className="object-contain max-h-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Company name */}
      <h3 className="text-gray-800 font-semibold text-base mt-2">
        {item.company}
      </h3>

      {/* Item name */}
      <p className="text-gray-500 text-sm line-clamp-2">{item.item_name}</p>

      {/* Price and rating section */}
      <div className="flex items-center justify-between mt-auto">
        {/* Prices */}
        <div>
          <div className="text-lg font-bold text-indigo-600">
            ₹{item.current_price}
          </div>
          <div className="text-sm text-gray-400 line-through">
            ₹{item.original_price}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-sm font-medium">
          <span>⭐ {item.rating?.stars ?? 0}</span>
          <span className="text-xs text-gray-500">
            ({item.rating?.count ?? 0})
          </span>
        </div>
      </div>

      {/* Add to Cart Button (appears on hover) */}
      <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to Cart
      </button>
    </div>
  );
}

export default HomeItem;

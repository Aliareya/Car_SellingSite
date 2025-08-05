import React from "react";

function Row_Cart({
  car,
  quantity,
  onQuantityChange,
  onRemove,
  onToggleSelect,
  isSelected,
}) {
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  return (
    <div className="w-full flex items-center border-b border-gray-300">
      {/* Checkbox */}
      <div className="w-[100px] px-4 py-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggleSelect}
          className="w-5 h-5"
        />
      </div>

      {/* Product Info */}
      <div className="w-[300px] py-3 px-4 flex items-center gap-4">
        <img
          src={car.image}
          alt={car.name}
          className="w-[56px] h-[56px] object-cover rounded"
        />
        <div>
          <p className="font-medium text-gray-800">{car.name}</p>
          <p className="text-gray-500 text-sm">Model 2024</p>
        </div>
      </div>

      {/* Price */}
      <div className="w-[150px] px-4 py-3 font-medium text-gray-700">
        {formatPrice(car.price)}
      </div>

      {/* Quantity */}
      <div className="w-[200px] px-4 py-3 flex justify-center">
        <div className="flex items-center border rounded overflow-hidden">
          <button
            onClick={() => onQuantityChange(quantity - 1)}
            disabled={quantity === 1}
            className={`px-3 py-1 text-lg font-semibold ${
              quantity === 1
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-[50px] text-center border-l border-r outline-none"
          />
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="px-3 py-1 text-lg font-semibold bg-gray-100 hover:bg-gray-200"
          >
            +
          </button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="w-[150px] px-4 py-3 font-semibold text-gray-800">
        {formatPrice(car.price * quantity)}
      </div>

      {/* Remove */}
      <div className="w-[120px] px-4 py-3">
        <button
          onClick={() => onRemove(car.id)}
          className="text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Row_Cart;

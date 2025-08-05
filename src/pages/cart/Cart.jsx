import React from "react";
import Row_Cart from "./parts/Row_Cart";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

function Cart() {
  const { cart , setCart} = useCart();
const [selectedCars, setSelectedCars] = useState([]);

  const handleToggleSelect = (carId) => {
    setSelectedCars((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  };

  const handleRemove = (carId) => {
    setCart((prev) => prev.filter((item) => item.id !== carId));
    setSelectedCars((prev) => prev.filter((id) => id !== carId));
  };

  const selectedCarDetails = cart.filter((car) =>
    selectedCars.includes(car.id)
  );

  const totalPrice = cart.reduce(
    (sum, car) => sum + car.price,
    0
  );

  const handleProcessCheckout = () => {
    console.log(selectedCars)
  }

  return (
    <div className="w-full px-0 xl:px-2 pt-7 pb-10">
      <div className="w-full bg-white rounded-t-md shadow-md overflow-x-auto">
        {/* Header */}
        <div className="min-w-[960px] bg-slate-100 flex text-sm font-semibold text-gray-700 border-b">
          <div className="w-[100px] px-4 py-3">Select</div>
          <div className="w-[300px] lg:w-[270px] px-4 lg:px-0 py-3">Product</div>
          <div className="w-[150px] px-4 py-3">Price</div>
          <div className="w-[200px] px-4 py-3 text-center">Quantity</div>
          <div className="w-[150px] px-4 py-3">Subtotal</div>
          <div className="w-[120px] px-4 py-3">Action</div>
        </div>

        {/* Content */}
        <div className="min-w-[960px] flex flex-col items-center">
          {cart && cart.length > 0 ? (
            cart.map((item, index) =>
               <Row_Cart
                  key={item.id}
                  car={item}
                  onRemove={handleRemove}
                  isSelected={selectedCars.includes(item.id)}
                  onToggleSelect={() => handleToggleSelect(item.id)}
                />
                )
          ) : (
            <div className="w-full flex flex-col items-center justify-center py-20 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                alt="Empty Cart"
                className="w-[100px] h-[100px] mb-4 opacity-70"
              />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                You haven’t added any car to your cart.
              </h2>
              <p className="text-gray-500">Browse our products and find your dream car!</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Summary - Only show if cart not empty */}
      {cart && cart.length > 0 && (
        <div className="w-full flex justify-end p-6 bg-white shadow-sm rounded-b-md">
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-800">
              Total:{" "}
              <span className="text-blue-600">
                ${totalPrice.toLocaleString("en-US")}
              </span>
            </p>
            <button onClick={handleProcessCheckout} className="mt-3 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

import React, { useState } from "react";
import Row_Cart from "./parts/Row_Cart";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigste = useNavigate();
  const { cart, setCart, processProduct, setProcessProduct } = useCart();

  const [selectedCars, setSelectedCars] = useState([]);
  const [quantities, setQuantities] = useState({}); // { [carId]: quantity }

  // انتخاب یا لغو انتخاب یک ماشین
  const handleToggleSelect = (carId) => {
    setSelectedCars((prevSelected) =>
      prevSelected.includes(carId)
        ? prevSelected.filter((id) => id !== carId)
        : [...prevSelected, carId]
    );
  };

  // تغییر تعداد
  const handleQuantityChange = (carId, newQty) => {
    setQuantities((prev) => ({
      ...prev,
      [carId]: newQty,
    }));
  };

  // حذف ماشین
  const handleRemove = (carId) => {
    setSelectedCars((prev) => prev.filter((id) => id !== carId));
    const updatedCart = cart.filter((item) => item.id !== carId);
    setCart(updatedCart);

    // حذف از state تعداد
    setQuantities((prev) => {
      const updated = { ...prev };
      delete updated[carId];
      return updated;
    });
  };

  // ماشین‌های انتخاب‌شده
  const selectedCarDetails = cart.filter((car) =>
    selectedCars.includes(car.id)
  );

  // جمع کل
  const totalPrice = selectedCarDetails.reduce((sum, car) => {
    const qty = quantities[car.id] || 1;
    return sum + car.price * qty;
  }, 0);

  // نهایی کردن انتخاب‌ها
  const handleCheckout = () => {
    const selectedData = selectedCarDetails.map((car) => ({
      id: car.id,
      name: car.name,
      amount: quantities[car.id] || 1,
      price: car.price,
    }));

    setProcessProduct([...processProduct, ...selectedData]);
    navigste("/checkout");
  };

  return (
    <div className="w-full px-0 xl:px-2 min-h-[400px] pt-10 pb-10">
      <div className="w-full bg-white rounded-t-md shadow-md overflow-x-auto">
        {/* Header */}
        <div className="min-w-[960px] bg-slate-100 flex text-sm font-semibold text-gray-700 border-b">
          <div className="w-[100px] px-4 py-3">Select</div>
          <div className="w-[300px] px-4 py-3">Product</div>
          <div className="w-[150px] px-4 py-3">Price</div>
          <div className="w-[200px] px-4 py-3 text-center">Quantity</div>
          <div className="w-[150px] px-4 py-3">Subtotal</div>
          <div className="w-[120px] px-4 py-3">Action</div>
        </div>

        {/* Rows */}
        <div className="min-w-[960px] flex flex-col items-center">
          {cart && cart.length > 0 ? (
            cart.map((item) => (
              <Row_Cart
                key={item.id}
                car={item}
                quantity={quantities[item.id] || 1}
                onQuantityChange={(newQty) =>
                  handleQuantityChange(item.id, newQty)
                }
                isSelected={selectedCars.includes(item.id)}
                onToggleSelect={() => handleToggleSelect(item.id)}
                onRemove={() => handleRemove(item.id)}
              />
            ))
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
              <p className="text-gray-500">
                Browse our products and find your dream car!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {selectedCars.length > 0 && (
        <div className="w-full flex justify-end p-6 bg-white shadow-sm rounded-b-md">
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-800">
              Selected Total:{" "}
              <span className="text-blue-600">
                ${totalPrice.toLocaleString("en-US")}
              </span>
            </p>
            <button
              onClick={handleCheckout}
              className="mt-3 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
            >
              Proceed to Checkout ({selectedCars.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

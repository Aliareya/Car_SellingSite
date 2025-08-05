import React from "react";
import { useCart } from "../../context/CartContext";
import PoccessProduct from "./parts/PoccessProduct";

function Checkout() {
  const {processProduct , setProcessProduct} = useCart();
  console.log(processProduct)

  return (
    <div className="w-ful py-12 xl:px-4 px-0 ">
      <div className="max-w-7xl mx-auto">
        {/* Login prompt */}
        <div className="bg-red-50 border border-red-200 p-4 text-sm rounded mb-8">
          Returning customer?{" "}
          <span className="text-red-600 font-medium cursor-pointer hover:underline">
            Click here to login
          </span>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Billing Form */}
          <div className="bg-white  rounded-lg shadow p-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">
              Billing Details
            </h2>
            <form className="space-y-5">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full">
                  <label className="text-sm font-medium">First name*</label>
                  <input
                    type="text"
                    className="w-full mt-1 p-2 border rounded"
                    placeholder="First name"
                  />
                </div>
                <div className="w-full">
                  <label className="text-sm font-medium">Last name*</label>
                  <input
                    type="text"
                    className="w-full mt-1 p-2 border rounded"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Company name (optional)
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Country / Region*</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="Country / Region"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Street address*</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded mb-2"
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>

              <div>
                <label className="text-sm font-medium">State / Country*</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="Town/City"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Postcode / ZIP*</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="ZIP"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone*</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="Phone"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email address*</label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="Email"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" />
                <label className="text-sm text-gray-700">
                  Ship to a different address?
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white h-fit rounded-lg shadow sm:p-3 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">
              Your Order
            </h2>
            <div className="space-y-4">
              {/* Sample product */}
              {processProduct.map((car , index)=>{
                return(
                  <PoccessProduct key={index} car={car} setProcessProduct={setProcessProduct}/>
                )
              })}
              {/* Coupon */}
              <div className="flex items-center sm:gap-1 gap-2 pt-3">
                <input
                  type="text"
                  placeholder="Coupon"
                  className="flex-1 border p-2 rounded"
                />
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  Apply
                </button>
              </div>

              <div className="flex justify-between border-t pt-4 text-lg font-bold text-gray-800">
                <span>Total:</span>
                <span>$25,020</span>
              </div>

              {/* Payment Method */}
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2">
                  <input type="radio" name="payment" defaultChecked />
                  <span>Check Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="payment" />
                  <span>
                    Paypal{" "}
                    <img
                      src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
                      alt="paypal"
                      className="inline-block h-4 ml-2"
                    />
                  </span>
                </div>
              </div>

              {/* Place Order */}
              <div className="pt-6">
                <button className="w-full bg-red-600 text-white font-semibold py-3 rounded hover:bg-red-700 transition-all">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

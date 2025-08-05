import React from "react";
import { useCart } from "../../../context/CartContext";
import { toast } from "react-toastify";

function PoccessProduct({car ,setProcessProduct}) {
  const {processProduct} = useCart();
  const handleremoveproduct = (id , name) =>{
    const updatecheckout = processProduct.filter((iteme)=>iteme.id !== id);
    setProcessProduct(updatecheckout);
    toast.success(`${name} Romve From Checkout`)
  }


  return (
    <div className="w-full flex flex-col gap-2 bg-slate-100 px-3 py-4 rounded-lg">
      <div className="flex justify-between text-sm">
        <span>{car.name}</span>
        <span>${car.price}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Quatity</span>
        <span>{car?.amount}</span>
      </div>

      <div className="flex justify-between font-semibold text-gray-800">
        <span>Subtotal</span>
        <span>${car.price*car?.amount}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Shipping Fee</span>
        <span>$20</span>
      </div>
      <div className="flex justify-between text-sm">
        <span onClick={()=>handleremoveproduct(car.id , car.name)} className="bg-gray-400 cursor-pointer px-3 py-1 rounded-md">Remove</span>
      </div>
    </div>
  );
}

export default PoccessProduct;

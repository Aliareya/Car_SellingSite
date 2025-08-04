import React from "react";
import { Icon } from "@iconify/react";
import { useWishlist } from "../../../context/WishlistContext";
import { toast } from "react-toastify";

function WishlistCart({ car }) { 
  const {setWishlistCar , WishlistCar} = useWishlist();
  // remove car from wishlist
  const handleRemoveWlishlist = (id , name) =>{
    const newList = WishlistCar.filter((items)=>items.id !== id);
    setWishlistCar(newList);
    toast.success(`${name} Remove From Wishlist`)
  }

  return (
    <div className="relative w-full h-24 sm:h-32 border-b  border-gray-200 flex">
      <div className="w-[15%] sm:w-[30%] sm:h-32 h-22 p-2 ">
        <img src={car?.image} className="w-22 sm:w-full sm:h-20 h-full  rounded-lg" alt="" />
      </div>
      <div className="w-[35%] md:w-[30%] sm:w-[50%] sm:pt-3 h-22 flex flex-col gap-1 sm:justify-start justify-center">
        <h1 className="text-lg sm:text-base font-bold">{car?.name}</h1>
        <div className="w-full h-5 flex -ml-1 ">
          {[0, 0, 0, 0, 0].map((_, index) => {
            return (
              <Icon
                icon="ic:round-star"
                width="24"
                height="24"
                className="sm:w-5 sm:h-5"
                style={{ color: "#e17c24" }}
              />
            );
          })}
          <span className="text-base sm:hidden md:hidden sm:text-sm text-red-700 font-semibold">
            ( 95 Reviews )
          </span>
        </div>
      </div>
      <div className="w-[20%] md:w-[20%] sm:hidden   h-22 flex items-center">
        <button className="w-32 h-8 bg-slate-100 rounded-lg">In Stock</button>
      </div>
      <div className="w-[8%] md:w-[15%] sm:items-start sm:pt-3  h-22 flex items-center">
        <h1 className="text-base font-bold">${car.price}</h1>
      </div>
      <div className="sm:absolute sm:top-20 sm:right-2 w-[20%] sm:w-[50%] h-22 flex  items-center gap-3">
        <button className="w-36 h-9 rounded-lg bg-red-700 hover:bg-red-800 text-white text-base font-bold">
          Add To Cart
        </button>
        <span onClick={()=>handleRemoveWlishlist(car.id , car.name)} className="w-9 h-9 bg-slate-100 rounded-lg flex justify-center items-center cursor-pointer">
          <Icon
            icon="famicons:close"
            width="24"
            height="24"
            style={{ color: "#000" }}
          />
        </span>
      </div>
    </div>
  );
}

export default WishlistCart;

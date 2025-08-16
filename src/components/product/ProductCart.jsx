import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import { useState } from "react";

function ProductCart({car}) {
  const navigate = useNavigate();
  const {setWishlistCar ,WishlistCar} = useWishlist();
  const {cart , setCart} = useCart();

  const hadleaddtowishlist = (id , name) =>{
    const exist = WishlistCar.find((item)=> item.id === id);
    if(exist){
      toast.info(`${name} is Already Exist.`);
    }else{
      setWishlistCar([...WishlistCar ,car]);
      toast.success(`${name} add to Wishlist`);
    }
  }
  
  const handeladdTOcart = (id , name) =>{
    const exist = cart.find((item)=> item.id === id);
    if(exist){
      toast.info(`${name} is Already Exist.`);
    }else{
      setWishlistCar([...cart ,car]);
      toast.success(`${name} add to Wishlist`);
    }
  }
  
  const inCart = cart.filter((item)=>item.id === car.id);
  const [ExistinCart,setEixist] =useState(inCart && inCart.length > 0 ? true : false);
  
  return (
    <div className="relative w-2/6 md:w-full sm:w-full flex flex-col md:flex-row h-auto shadow-lg md:border border-gray-200 pb-7 md:pb-0 rounded-lg">
      <div className="w-full md:w-[60%] h-64 md-72 relative overflow-hidden rounded-t-lg md:rounded-bl-lg md:rounded-tr-none shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div
          className="bg-center bg-cover w-full h-64 md:72 transition-transform duration-500 ease-in-out transform hover:scale-110"
          style={{ backgroundImage: `url(${car.image})`,}}
        />
      </div>
      <div className="w-full">
        <span className="absolute top-3 right-3 md:right-[29rem] bg-slate-100 px-2 py-1 rounded-md text-sm font-semibold">2006</span>
        <span onClick={()=>hadleaddtowishlist(car.id , car.name)}
         className="absolute top-3 left-16 bg-slate-100 px-2 py-1 rounded-md text-sm font-semibold">
          <Icon icon="solar:heart-bold-duotone" width="24" height="24"  style={{color:ExistinCart ? "#7f1d1d" :" #000"}} />
        </span>
        <span onClick={()=>handeladdTOcart(car.id , car.name)}
          className="absolute top-3 left-3 bg-slate-100 px-2 py-1 rounded-md text-sm font-semibold">
          <Icon icon="mdi:cart" width="24" height="24"  style={{color:ExistinCart ? "#7f1d1d" :" #000"}} />
        </span>
        <span className="absolute top-60 md:top-3 right-3 bg-red-700 hover:bg-black text-white px-3 py-1.5 rounded-md text-base font-semibold">
          {car.price}
        </span>
      <div className="w-full pt-5 md:pt-12 px-4 flex flex-col items-start justify-start gap-2">
        <h1 className="text-2xl fonr-bold cursor-pointer hover:text-red-700 " onClick={()=>navigate(`/product/${car.id}`)}>{car.name}</h1>
        <span className="text-sm font-normal "><b>Listed by:</b> {car.listedBy}</span>
        <hr className="w-full h-1 border-gray-400 mt-1" />
      </div>
      <div className="w-full px-4 pt-4 flex items-center gap-4">
        <div className="w-fit flex justify-center items-center gap-2">
          <Icon icon="fluent:top-speed-16-regular" width="20" height="20"  style={{color: '#1f2937'}} />
          <span className="text-sm font-normal">{car.engine}</span>
          <span className="text-sm font-normal">|</span>
        </div>
        <div className="w-fit flex justify-center items-center gap-2">
          <Icon icon="ph:steering-wheel-bold" width="20" height="20"  style={{color: '#1f2937'}} />
          <span className="text-sm font-normal">{car.transmission}</span>
          <span className="text-sm font-normal">|</span>
        </div>
        <div className="w-fit flex justify-center items-center gap-2">
          <Icon icon="mdi:petrol-pump" width="20" height="20"  style={{color: '#1f2937'}} />
          <span className="text-sm font-normal">{car.fuel}</span>
        </div>
      </div>
        <div onClick={()=>navigate(`/product/${car.id}`)} className="w-full flex px-4 pt-5 justify-center items-center gap-2">
          <button className="w-full h-10 hover:bg-red-700 border border-gray-300 hover:text-white rounded-lg" >View Details</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;

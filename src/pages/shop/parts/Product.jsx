import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../../context/WishlistContext";
import { toast } from "react-toastify";
import { useCart } from "../../../context/CartContext";

function Product({car , sty}) {
  const {setWishlistCar ,WishlistCar} = useWishlist();
  const {cart , setCart} = useCart();
  const isFavoritecar = WishlistCar.filter((item)=>item.id === car.id)
  const favorite = isFavoritecar && isFavoritecar?.length > 0 ? true : false;

  const navigate = useNavigate();

  const addTowishlist = (id , name) =>{
    // check if this car is in wishlist or not
    const isExist  = WishlistCar.filter((item)=>item.id == id);
    if(isExist && isExist.length > 0){
      toast.info(`${name} is already exist in wishlist`)
    }else{ 
      setWishlistCar([...WishlistCar , car]);
      toast.success(`${car.name} Successfully Added.`)
    }
  }
  const inCart = cart.filter((item)=>item.id === car.id);
  const ExistinCart = inCart && inCart.length > 0 ? true : false;

  const handleAddToCart = (id , name) =>{
    const existCart = cart.filter((item)=>item.id === id);
    if(existCart && existCart.length > 0){
      toast.info(`${name} is already exist in Cart`)
    }else{
      setCart([...cart , car])
      toast.success(`${name} Successfully Added To Cart`)
    }
  }


  return (
    <div className={`${sty === "list" ? "flex-row pb-0 border border-gray-200 ":" flex-col pb-7"} relative w-full  sm:w-full flex  h-auto shadow-lg rounded-lg`}>
      <div className={`${sty === "list" ? "w-[80%] sm:w-[50%] h-64 sm:h-24 rounded-bl-lg rounded-tl-lg rounded-tr-none" : "w-full h-64 rounded-t-lg"} relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out`}>
        <div
          className={`${sty === "list" ? "h-72 sm:h-24" :"h-64"} bg-center bg-cover w-full transition-transform duration-500 ease-in-out transform hover:scale-110`}
          style={{ backgroundImage: `url(${car.image})`,}}
        />
      </div>
      <div className="w-full">
        <span className={`${sty === "list" ? "right-[33rem]  md:right-[29rem] sm:hidden":"right-3"} absolute top-3 bg-slate-100 px-2 py-1 rounded-md text-sm font-semibold`}>{car.year}</span>
        <span onClick={()=>addTowishlist(car.id , car.name)}
          className={`${sty === "list" ?"sm:left-14":""} cursor-pointer absolute top-3 left-16 bg-slate-100 px-2 py-1 rounded-md  text-sm font-semibold`}>
          <Icon icon="si:heart-fill" width="24" height="24"  style={{color:favorite ? "#7f1d1d" :" #e17c24"}} />
        </span>
        <span onClick={()=>handleAddToCart(car.id, car.name)}
          className={`${sty === "list" ?"sm:left-1":""} absolute cursor-pointer top-3 left-3 bg-slate-100 px-2 py-1 rounded-md  text-sm font-semibold`}>
          <Icon icon="mdi:cart" width="24" height="24"  style={{color:ExistinCart ? "#7f1d1d" :" #000"}} />
        </span>
        <span className={`${sty === "list" ?"top-1 right-1 px-2 py-1 text-sm":"top-60 right-3 px-3 py-1.5 text-base"} absolute  bg-red-700 hover:bg-black text-white  rounded-md   font-semibold`}>
          {"$"+car.price}
        </span>
      <div className={`${sty === "list" ?"pt-12 sm:pt-3":"pt-5"} w-full px-4 flex flex-col items-start justify-start gap-2`}>
        <h1 onClick={()=>navigate(`/product/${car.id}`)} className={`${sty === "list" ?"sm:text-sm":""} text-2xl fonr-bold cursor-pointer hover:text-red-700 sm:text-lg `}>{car.name}</h1>
        <span className={`${sty === "list" ? "sm:hidden" :"" } text-sm font-normal `}><b>Listed by:</b> {car.listedBy}</span>
        <hr className={`${sty === "list" ? "sm:hidden" :"" } w-full h-1  border-gray-400 mt-1`} />
      </div>
      <div className={`${sty === "list" ? "sm:hidden sm:pt-5" :"" } w-full sm:px-4 px-4 pt-4 flex items-center sm:flex-wrap gap-4 sm:gap-2`}>
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
          <Icon icon=" i:petrol-pump" width="20" height="20"  style={{color: '#1f2937'}} />
          <span className="text-sm font-normal">{car.fuel}</span>
        </div>
      </div>
        <div onClick={()=>navigate(`/product/${car.id}`)} className="w-full flex px-4 pt-5 sm:pt-2 justify-center items-center gap-2">
          <button className="w-full h-10 hover:bg-red-700 border border-gray-300 hover:text-white rounded-lg" >View Details</button>
        </div>
      </div>
    </div>
  );
}

export default Product;

import React from 'react';
import car from "../../assets/product/car3.jpg";
import { Icon } from '@iconify/react';
import WishlistCart from './parts/WishlistCart';
import { useWishlist } from '../../context/WishlistContext';
import { h1 } from 'framer-motion/client';

function Wishlist() {
  const {WishlistCar } = useWishlist();

  return (
    <div className='w-full h-auto min-h-[500px] px-0 pb-10 xl:px-4 pt-5 rounded-t-md'>
      <div className='w-full h-auto bg-white rounded-md p-3'>
        <div className='w-full h-14 border-b flex border-gray-500 rounded-t-md'>
          <div className='w-[15%] sm:w-[30%] h-14 flex justify-start items-center pl-2'>Image</div>
          <div className='w-[35%] sm:w-[50%] md:w-[30%] h-14 flex justify-start items-center pl-1'>Product</div>
          <div className='w-[20%] h-14 flex sm:hidden justify-start items-center'>Stock Status</div>
          <div className='w-[10%] h-14 flex justify-start items-center '>Price</div>
        </div>
        <div className='w-full pb-5 min-h-40 '>
          {WishlistCar && WishlistCar.length> 0 ? WishlistCar.map((car , index)=>{
            return(
              <WishlistCart key={index} car={car}/>
            )
          }) : (
            <h1 style={{textAlign:'center' , paddingTop:'30px'}}>You Not Add any Car to wishlist</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Wishlist
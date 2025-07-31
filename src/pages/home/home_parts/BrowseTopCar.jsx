import React from 'react';
import { Icon } from '@iconify/react';
import cart_con1 from '../../../assets/car/cart_icon1.svg';
import cart_con2 from '../../../assets/car/car_icon2.svg';
import cart_con3 from '../../../assets/car/car_icon3.svg';
import cart_con4 from '../../../assets/car/car_icon4.svg';
import cart_con5 from '../../../assets/car/car_icon5.svg';

function BrowseTopCar() {
  return (
    <div className='w-full h-auto bp-5 flex flex-col items-center'>
      <h1 className='text-xl font-bold text-red-700'>Browse Top Car</h1>
      <h1 className='text-4xl font-bold pt-4'>Brands With Body Types</h1>
      <div className='w-full flex justify-center sm:justify-between items-center gap-10 sm:gap-2 flex-wrap pt-5'>
        <div className='border-b-2 border-t-2 border-[#b91c1c] w-fit px-3 py-3 flex gap-2 bg-gray-100  rounded-lg'>
          <Icon icon="simple-icons:honda" width="24" height="24"  style={{color: '#b91c1c'}} />
          <span className='text-base font-semibold'>Hyundai</span>
        </div>
        <div className='border-b-2 border-[#b91c1c] w-fit px-3 py-3 flex gap-2 bg-gray-100 rounded-lg'>
          <Icon icon="simple-icons:toyota" width="24" height="24"  style={{color: '#b91c1c'}} />
          <span className='text-base font-semibold'>Toyota</span>
        </div>
        <div className='border-b-2 border-[#b91c1c] w-fit px-3 py-3 flex gap-2 bg-gray-100 rounded-lg'>
          <Icon icon="simple-icons:ferrari" width="24" height="24"  style={{color: '#b91c1c'}} />
          <span className='text-base font-semibold'>Ferrari</span>
        </div>
        <div className='border-b-2 border-[#b91c1c] w-fit px-3 py-3 flex gap-2 bg-gray-100 rounded-lg'>
          <Icon icon="icon-park-solid:benz" width="24" height="24"  style={{color: '#b91c1c'}} />
          <span className='text-base font-semibold'>Mercedes Benz</span>
        </div>
        <div className='border-b-2 border-[#b91c1c] w-fit px-3 py-3 flex gap-2 bg-gray-100 rounded-lg'>
          <Icon icon="cbi:volkswagen" width="24" height="24"  style={{color: '#b91c1c'}} />
          <span className='text-base font-semibold'>Volkswagen</span>
        </div>
        <div className='border-b-2 border-[#b91c1c] w-fit px-3 py-3 flex gap-2 bg-gray-100 rounded-lg'>
          <Icon icon="simple-icons:hyundai" width="24" height="24"  style={{color: '#b91c1c'}} />
          <span className='text-base font-semibold'>Hyundai</span>
        </div>
      </div>
      <div className='w-full mt-10 flex sm:flex-col justify-between items-center gap-6 flex-wrap'>
        <div className='rounded-lg w-1/6 sm:w-full shadow-lg h-32 p-3 flex flex-col items-center justify-center gap-3 bg-gray-100'>
          <img className='w-[90% text-black' style={{color:'black'}} src={cart_con2} alt="" />
          <h1 className='text-2xl md:text-base lg:text-lg font-bold '>Crossover</h1>
        </div>
        <div className='rounded-lg w-1/6 sm:w-full shadow-lg h-32 p-3 flex flex-col items-center justify-center gap-3 bg-gray-100'>
          <img className='w-[90% text-black' style={{color:'black'}} src={cart_con3} alt="" />
          <h1 className='text-2xl md:text-base lg:text-lg font-bold '>Convertible</h1>
        </div>
        <div className='rounded-lg w-1/6 sm:w-full shadow-lg h-32 p-3 flex flex-col items-center justify-center gap-3 bg-gray-100'>
          <img className='w-[90% text-black' style={{color:'black'}} src={cart_con4} alt="" />
          <h1 className='text-2xl md:text-base lg:text-lg font-bold '>Compact</h1>
        </div>
        <div className='rounded-lg w-1/6 sm:w-full shadow-lg h-32 p-3 flex flex-col items-center justify-center gap-3 bg-gray-100'>
          <img className='w-[90% text-black' style={{color:'black'}} src={cart_con5} alt="" />
          <h1 className='text-2xl md:text-base lg:text-lg font-bold '>Sedan</h1>
        </div>
        <div className='rounded-lg w-1/6 sm:w-full shadow-lg h-32 p-3 flex flex-col items-center justify-center gap-3 bg-gray-100'>
          <img className='w-[90% text-black' style={{color:'black'}} src={cart_con1} alt="" />
          <h1 className='text-2xl md:text-base lg:text-lg font-bold '>Sport Coupe</h1>
        </div>
        <div className='rounded-lg w-1/6 sm:w-full shadow-lg h-32 p-3 flex flex-col items-center justify-center gap-3 bg-gray-100'>
          <img className='w-[90% text-black' style={{color:'black'}} src={cart_con1} alt="" />
          <h1 className='text-2xl md:text-base lg:text-lg font-bold '>Suv</h1>
        </div>
        <div className='rounded-lg w-1/6 sm:w-full shadow-lg h-32 p-3 flex flex-col items-center justify-center gap-3 bg-gray-100'>
          <img className='w-[90% text-black' style={{color:'black'}} src={cart_con1} alt="" />
          <h1 className='text-2xl md:text-base lg:text-lg font-bold '>Coup</h1>
        </div>
        <div className='rounded-lg w-1/6 sm:w-full shadow-lg h-32 p-3 flex flex-col items-center justify-center gap-3 bg-gray-100'>
          <img className='w-[90% text-black' style={{color:'black'}} src={cart_con1} alt="" />
          <h1 className='text-2xl md:text-base lg:text-lg font-bold '>Family MPV</h1>
        </div>
        <div className='rounded-lg w-1/6 sm:w-full shadow-lg h-32 p-3 flex flex-col items-center justify-center gap-3 bg-gray-100'>
          <img className='w-[90% text-black' style={{color:'black'}} src={cart_con1} alt="" />
          <h1 className='text-2xl md:text-base lg:text-lg font-bold '>Pickup</h1>
        </div>
        <div className='rounded-lg w-1/6 sm:w-full shadow-lg h-32 p-3 flex flex-col items-center justify-center gap-3 bg-gray-100'>
          <img className='w-[90% text-black' style={{color:'black'}} src={cart_con1} alt="" />
          <h1 className='text-2xl md:text-base lg:text-lg font-bold '>Wagon</h1>
        </div>
      </div>
    </div>
  )
}

export default BrowseTopCar
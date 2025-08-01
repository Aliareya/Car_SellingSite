import React from 'react';
import { Icon } from '@iconify/react';
import cart_con1 from '../../../assets/car/cart_icon1.svg';
import cart_con2 from '../../../assets/car/car_icon2.svg';
import cart_con3 from '../../../assets/car/car_icon3.svg';
import cart_con4 from '../../../assets/car/car_icon4.svg';
import cart_con5 from '../../../assets/car/car_icon5.svg';
import HomeButton from '../../../utils/HomeButton';

// brands data
const carBrands = [
  {
    title: "Honda",
    icon: "simple-icons:honda"
  },
  {
    title: "Toyota",
    icon: "simple-icons:toyota"
  },
  {
    title: "Ferrari",
    icon: "simple-icons:ferrari"
  },
  {
    title: "Mercedes Benz",
    icon: "icon-park-solid:benz"
  },
  {
    title: "Volkswagen",
    icon: "cbi:volkswagen"
  },
  {
    title: "Hyundai",
    icon: "simple-icons:hyundai"
  }
];


function BrowseTopCar() {
  return (
    <div className='w-full h-auto bp-5 flex flex-col items-center'>
      <h1 className='text-xl font-bold text-red-700'>Browse Top Car</h1>
      <h1 className='text-4xl sm:text-2xl font-bold pt-4'>Brands With Body Types</h1>
      <div className='w-full flex justify-center sm:justify-between items-center gap-10 sm:gap-2 flex-wrap pt-5'>
        {carBrands.map((brand, index) => {
          return  (
            <HomeButton key={index} title={brand.title} icon={brand.icon}/>
          )
        })} 
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
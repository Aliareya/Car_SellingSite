import React, { useState } from 'react';
import car from "../../assets/product/car1.jpg";
import { Icon } from '@iconify/react';
import Product_Description from './parts/Product_Description';
import Product_Specification from './parts/Product_Specification';
import Product_Review from './parts/Product_Review';

function ProductDetails() {
  const [viewINFO , setViewINFO] = useState("description")

  return (
    <div className='w-full h-auto px-4 py-5 pt-10   '>
      <div className='w-full h-auto flex gap-2'>
        <div className='w-1/2 h-auto'>
          <div className='w-full h-96 rounded-lg'>
            <img src={car} alt="" className='w-[95%] h-96 rounded-lg' />
          </div>
          <div className='w-full h-24 flex gap-10 mt-5'>
            <div className='w-32 h-24 rounded-lg'>
              <img src={car} className='w-full h-24 rounded-lg' alt="" />
            </div>
            <div className='w-32 h-24 rounded-lg'>
              <img src={car} className='w-full h-24 rounded-lg' alt="" />
            </div>
            <div className='w-32 h-24 rounded-lg'>
              <img src={car} className='w-full h-24 rounded-lg' alt="" />
            </div>
          </div>
        </div>
        <div className='w-1/2 h-auto '>
          <div className='w-full h-5 flex '>
            <Icon icon="ic:round-star" width="24" height="24"  style={{color: '#e17c24'}} />
            <Icon icon="ic:round-star" width="24" height="24"  style={{color: '#e17c24'}} />
            <Icon icon="ic:round-star" width="24" height="24"  style={{color: '#e17c24'}} />
            <Icon icon="ic:round-star" width="24" height="24"  style={{color: '#e17c24'}} />
            <span className='text-base text-red-700 font-semibold'>( 95 Reviews )</span>
          </div>
          <h1 className='text-2xl font-bold pt-4'>Lamborghini Aventador</h1>
          <p className='text-base text-gray-500 font-medium pt-4'>
            Monotonectally simplify frictionless communities via clicks-and-mortar
            minate relationships. Monotonectally simplify
            frictionless communities via clicks Interactively disseminate
          </p>
          <ul className='list-inside pt-3 flex flex-col gap-2'>
            <li className='text-base list-disc'>
              <span className='font-semibold -pl-1'>Speed : </span>
              <span className='font-medium'>790 km/h</span>
            </li>
            <li className='text-base list-disc'>
              <span className='font-semibold -pl-1'>Brand : </span>
              <span className='font-medium'>790 km/h</span>
            </li>
            <li className='text-base list-disc'>
              <span className='font-semibold -pl-1'>Engine : </span>
              <span className='font-medium'>790 km/h</span>
            </li>
            <li className='text-base list-disc'>
              <span className='font-semibold -pl-1'>fuel : </span>
              <span className='font-medium'>790 km/h</span>
            </li>
            <li className='text-base list-disc'>
              <span className='font-semibold -pl-1'>Year : </span>
              <span className='font-medium'>790 km/h</span>
            </li>
            <li className='text-base list-disc'>
              <span className='font-semibold -pl-1'>Price : </span>
              <span className='font-medium'>790 km/h</span>
            </li>
            <li className='text-base list-disc'>
              <span className='font-semibold -pl-1'>Total : </span>
              <span className='font-medium'>40</span>
            </li>
          </ul>
          <div className='w-full items-center flex gap-10  mt-5'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-lg font-semibold pt-2 '>Color</h2>
              <div className='w-full h-5 pt-2 pl-1 flex gap-2'>
                <div className='w-5 h-5 bg-red-800 rounded-full'></div>
                <div className='w-5 h-5 bg-green-800 rounded-full'></div>
                <div className='w-5 h-5 bg-blue-800 rounded-full'></div>
                <div className='w-5 h-5 bg-red-800 rounded-full'></div>
              </div>
            </div>
            <div className='w-1/4 mt-4 flex flex-col gap-3'>
              <label htmlFor="amonu">Amount</label>
              <input defaultValue={1} type="number" className='w-40 bg-slate-200 h-8 rounded-lg pl-2 '  />
            </div>
            <div className='w-40 h-10 mt-10 ml-4 bg-black flex gap-2 justify-center items-center rounded-lg cursor-pointer'>
              <Icon icon="prime:cart-plus" width="24" height="24"  style={{color: '#e17c24'}} />
              <span className='text-white'>Add To Cart</span>
            </div>
          </div> 

          <div className='w-full pt-4'>
            
          </div>
        </div>
      </div>
      <div className='w-full h-auto  mt-8 mb-5 flex gap-5'>
        <div className='w-[75%] h-auto '>
          <div className='w-full h-20 bg-white flex items-center rounded-lg pl-5 gap-4'>
            <button onClick={()=>setViewINFO("description")} className='px-5 py-3 bg-slate-100 rounded-lg'>Description</button>
            <button onClick={()=>setViewINFO("specification")} className='px-5 py-3 bg-slate-100 rounded-lg'>Specification</button>
            <button onClick={()=>setViewINFO("review")} className='px-5 py-3 bg-slate-100 rounded-lg'>Reviews(1)</button>
          </div>
          <div className='w-full my-5 pb-10 bg-white px-5 rounded-md'>
            {viewINFO === "description" && (
              <Product_Description/>
            )}
            {viewINFO === "specification" && (
              <Product_Specification/>
            )}
            {viewINFO === "review" && (
              <Product_Review/>
            )}
          </div>
        </div>
        <div className='w-[25%] h-96 bg-slate-800'>
        </div>
      </div>
    </div>
  ) 
}

export default ProductDetails
import React from 'react'
import carimg from "../../../assets/car/car4.png";
import { Icon } from '@iconify/react';

function ChooseUs() {
  return (
    <div className='w-full h-fit pb-20 md:pb-14 sm:pb-10 sm:pt-3 sm:flex-col flex justify-between items-center md:items-start'>
      <div className='w-1/2 sm:w-full h-fit'>
        <p className='text-xl font-semibold text-red-700'>Why Choose Us</p>
        <h1 className='text-5xl sm:text-3xl font-bold pt-4'>Don't Waste Your Valuable Time or Money </h1>
        <p className='text-sm font-medium text-gray-800 pt-4 md:pt-10'>
          Collaboratively leverage existing client-centric schemas integrated processes
          .Inter actively engineer global sources after team driven niche
          markets. Rapidiously processes with resource maximizing architectures.
        </p>
        <div className='w-full h-52 pt-5'>
          <img src={carimg} alt="" />
        </div>
      </div>
      <div className='w-[46%] sm:w-full h-fit flex flex-col gap-5 pl-3 sm:pl-0'>
        <div className='w-full h-fit p-5 bg-slate-50  shadow-lg shadow-gray-300 rounded-lg '>
          <div className='w-full flex  items-center gap-4'>
            <span className='w-11 h-11 rounded-lg bg-red-100 flex justify-center items-center'>
              <Icon icon="tdesign:secured" width="24" height="24"  style={{color: '#c20f2f'}} />
            </span>
            <h3 className='text-xl font-bold'>Expert Certified Mechanics</h3>
          </div>
          <p className='text-sm font-semibold text-gray-800 pt-4 pl-1'>
            Collaboratively leverage existing client-centric schemas integrated processes
            Inter actively engineer global sources after team driven niche 
          </p>
        </div>
        <div className='w-full h-fit p-5 bg-slate-50 shadow-lg shadow-gray-300 rounded-lg '>
          <div className='w-full flex  items-center gap-4'>
            <span className='w-11 h-11 rounded-lg bg-red-100 flex justify-center items-center'>
              <Icon icon="tdesign:secured" width="24" height="24"  style={{color: '#c20f2f'}} />
            </span>
            <h3 className='text-xl font-bold'>Genuine Spares Parts</h3>
          </div>
          <p className='text-sm font-semibold text-gray-800 pt-4 pl-1'>
            Collaboratively leverage existing client-centric schemas integrated processes
            Inter actively engineer global sources after team driven niche  
          </p>
        </div>
        <div className='w-full h-fit p-5 bg-slate-50 shadow-lg shadow-gray-300 rounded-lg '>
          <div className='w-full flex  items-center gap-4'>
            <span className='w-11 h-11 rounded-lg bg-red-100 flex justify-center items-center'>
              <Icon icon="tdesign:secured" width="24" height="24"  style={{color: '#c20f2f'}} />
            </span>
            <h3 className='text-xl font-bold'>Get Reasonable Price</h3>
          </div>
          <p className='text-sm font-semibold text-gray-800 pt-4 pl-1'>
            Collaboratively leverage existing client-centric schemas integrated processes
            Inter actively engineer global sources after team driven niche
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
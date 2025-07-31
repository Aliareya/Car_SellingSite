import React from 'react';
import appbg from "../assets/images/app_bg.png";
import { Icon } from '@iconify/react';
import carimg from "../assets/car/car2.png";

function DownloadAppSuggestio() {
  const Collor = '#ffeff1';
  return (
    <div className='w-full flex sm:flex-col justify-between items-center h-fit bg-[#ffeff1] sm:pt-10 sm:p-3 p-16 md:p-5 bg-center bg-cover rounded-lg'
     style={{backgroundImage: `url(${appbg})`}}>
      <div className='w-1/2 sm:w-full'>
        <h1 className='text-4xl md:text-3xl sm:text-2xl font-bold'>Autohive User Friendly App Available</h1>
        <p className='text-base font-medium pt-6'>Appropriately monetize one-to-one interfaces rather than cutting-edge 
          Competently disinte rmediate backward.
        </p>
        <div className='w-full flex gap-10 mt-6 sm:mt-3'>
          <div className='w-40 h-14 flex justify-center items-center bg-white rounded-lg shadow-md shadow-gray-300 mt-5 cursor-pointer hover:bg-red-500 transition-all duration-300'>
            <Icon icon="simple-icons:googleplay" width="24" height="24"  style={{color: '#c20f2f'}} />
            <span className='text-base font-semibold text-gray-800 pl-2'>Google Play</span>
          </div>
          <div className='w-40 h-14 flex justify-center items-center bg-white rounded-lg shadow-md shadow-gray-300 mt-5 cursor-pointer hover:bg-red-500 transition-all duration-300'>
            <Icon icon="simple-icons:googleplay" width="24" height="24"  style={{color: '#c20f2f'}} />
            <span className='text-base font-semibold text-gray-800 pl-2'>Google Play</span>
          </div>
        </div>  
      </div>
      <div className='w-1/2 sm:w-full sm:mt-10 flex items-end h-fit relative'>
        <img src={carimg} className='mt-24' alt="" />
        <div className='absolute  top-0 right-40 md:right-20 w-40 h-20 bg-white shadow-lg rounded-lg '>
          <Icon className='absolute -bottom-5 right-16 ' icon="bxs:down-arrow" width="30" height="30"  style={{color:' #fff'}} />
          <div className='w-full flex gap-2 justify-start items-center h-full p-2 '>
            <div className='w-12 h-12 bg-red-100 rounded-full flex justify-center items-center '>  
              <Icon icon="fluent-emoji-flat:person-beard-light" width="32" height="32" />
            </div>
              <div className=''>
                <span className='text-[12px] text-gray-800'>Download App</span>
                <h1 className='text-xl font-bold'>14.5k+</h1>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default DownloadAppSuggestio
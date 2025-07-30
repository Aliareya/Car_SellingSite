import React from 'react';
import SelectBox from '../utils/SelectBox';

function SearchBox() {
  const Barnd = ["marsidiz benz" , "ferrari" , "hyundai" , "volkswagen"]
  return (
    <div className='-bottom-20 sm:pt-5 sm:-bottom-[350px] w-[87%] lg:w-[92%] md:w-[95%] sm:w-[94%]
     absolute h-36 sm:h-auto flex sm:flex-col justify-between px-5 md:px-3 sm:px-3 items-center bg-white shadow-xl rounded-lg'>
      <div className='w-1/5 sm:w-full h-32 sm:h-20 flex flex-col justify-center px-1 gap-1 pb-2'>
        <SelectBox label={'Brand Name'} opt={Barnd}/>
      </div>
      <div className='w-1/5 sm:w-full h-32 sm:h-20 flex flex-col justify-center px-1 gap-1 pb-2'>
        <SelectBox label={'Select Type'} opt={Barnd}/>
      </div>
      <div className='w-1/5 sm:w-full h-32 sm:h-20 flex flex-col justify-center px-1 gap-1 pb-2'>
        <SelectBox label={'Select Models'} opt={Barnd}/>
      </div>
      <div className='w-1/5 sm:w-full h-32 sm:h-20 flex flex-col justify-center px-1 gap-1 pb-2'>
        <SelectBox label={'Transmission'} opt={Barnd}/>
      </div>
      <div className='w-1/6 sm:w-full h-12 sm:mt-3 mt-8 sm:mb-3 flex flex-col justify-center px-1 gap-1 md:pb-[11px] pb-2'>
        <button className='w-full h-full  bg-black text-white text-base font-semibold rounded-md'>Search</button>
      </div>
    </div>
  )
}

export default SearchBox
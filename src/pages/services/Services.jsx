import React from 'react';
import { useStaticData } from '../../context/StaticData';
import DownloadAppSuggestion from "../../components/DownloadAppSuggestio";

function Services() {
  const {services} = useStaticData();

  return (
    <div className='w-full h-auto pb-10 px-0 xl:px-4 pt-7'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'><span className='text-red-700'>Autohive</span> Service Center</h1>
        <p className='w-[60%] sm:w-[90%] pt-3 text-center text-base font-medium text-gray-500'>
          Are you ready to give your car the service it is asking for? Schedule car maintenance
          or We know there isn't much more frustrating than being.
        </p>
      </div>
      <div className='w-full mt-10 flex sm:flex-col gap-5 justify-between items-center flex-wrap'>
        {services.map((service , index)=>{
          return(
            <div className='w-[30%] lg:w-[31%] md:w-[47%] sm:w-full h-fit pb-4 bg-white rounded-md shadow-lg'>
              <div className='w-full overflow-hidden h-60  rounded-t-md'>
                <img src={service.image} className='w-full hover:scale-105 transition-all duration-500 ease-in-out rounded-t-md' alt="" />
              </div>
              <div className='pt-2 px-3'>
                <h1 className='text-2xl font-bold text-red-800 cursor-pointer'>{service.title}</h1>
                <p className=' pt-3 text-sm font-semibold text-gray-500'>
                  Energetically formulate compelling communities & client-based results.
                  Synergistic standardized users after functional leadership.
                </p>
              </div>
              <div className='w-full px-2 mt-3'>
                <button className='hover:bg-red-800 text-white w-full h-9 bg-black rounded-lg font-semibold'>Explore More</button>
              </div>
            </div>
          )
        })}
      </div>
      <div className='w-full mt-10'>
        <DownloadAppSuggestion/>
      </div>
    </div>
  )
}

export default Services
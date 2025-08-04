import React from 'react';
import car from "../../../assets/product/car3.jpg";
import { Icon } from '@iconify/react';

function Latest_Product({product}) {
  return (
    <div className='w-full h-16 flex gap-2 bg-slate-100 rounded-md'>
      <div className='w-16 h-16 rounded-l-md'>
        <img src={product.image} className='w-full h-full rounded-l-md' alt="" />
      </div>
      <div className='pt-0.5'>
        <div className='w-full h-5 flex '>
          <Icon icon="ic:round-star" width="17" height="17"  style={{color: '#e17c24'}} />
          <Icon icon="ic:round-star" width="17" height="17"  style={{color: '#e17c24'}} />
          <Icon icon="ic:round-star" width="17" height="17"  style={{color: '#e17c24'}} />
          <Icon icon="ic:round-star" width="17" height="17"  style={{color: '#e17c24'}} />
          <Icon icon="ic:round-star" width="17" height="17"  style={{color: '#e17c24'}} />
        </div>
        <h1 className='text-sm md:text-[12px] font-bold hover:text-red-700 cursor-pointer'>{product.name}</h1>
        <div className='flex gap-4'>
          <del className='text-sm text-red-600'>{product.originalPrice}</del>
          <span className='text-sm'>{product.price}</span>
        </div>
      </div>
    </div>
  )
}

export default Latest_Product
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import logo from '../assets/images/logo.png'; 
import { Icon } from '@iconify/react';

function Header() {
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className='w-full h-20 px-20 sm:px-2 md:px-5 lg:px-10 flex justify-between items-center '>
      <div className='w-1/2'>
       <img src={logo} className='w-40 h-10' alt="" />
      </div>
      {/* Navigation Menu */}
        <ul className="md:hidden flex justify-end md:flex gap-7 items-center text-sm font-medium">
          <li className="text-base font-normal text-gray-200 cursor-pointer transition">Home</li>
          <li className="text-base font-normal text-gray-200 cursor-pointer transition">About</li>
          <li className="text-base font-normal text-gray-200 cursor-pointer transition">Shop</li>
          <li className="text-base font-normal text-gray-200 cursor-pointer transition">Services</li>
          <li className="text-base font-normal text-gray-200 cursor-pointer transition">Wishlist</li>
          <li className="text-base font-normal text-gray-200 cursor-pointer transition">Cart</li>
          <li className="text-base font-normal text-gray-200 cursor-pointer transition">Contact</li>
          {isLogin ? (
            <li className='ml-5'>
              <span className='flex items-center w-6 h-7 relative justify-center bg-[#a1181d] rounded-full cursor-pointer transition hover:bg-[#c71b1f]' onClick={() => toast.success('Login clicked!')}>
                <Icon className='absolute' icon="fa-solid:user-circle" width="35" height="35"  style={{color: '#d9e6e6'}} />
              </span>
            </li>
          ) : (
            <li className="text-base font-normal text-gray-100 bg-[#a1181d] px-4 py-1 rounded-md transition cursor-pointer">
              Login
            </li>
          )}
        </ul>

        {/* Mobile Menu (optional placeholder) */}
        <div className="hidden md:flex items-center">
          {/* Later add hamburger menu */}
          <button className="text-white">☰</button>
        </div>
    </div>
  )
}

export default Header
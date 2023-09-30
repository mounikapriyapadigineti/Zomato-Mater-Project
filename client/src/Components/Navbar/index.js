import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';
const MobileNav = () => {
  return (
    <>
      <div className='flex w-full items-center justify-between lg:hidden'>
        <div className='w-28'>
          <img
            src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
            alt=''
            className='w-full h-full'
          />
        </div>
        <div className='flex items-center gap-3 relative'>
          <button className='bg-zomato-400 text-white py-2 px-3 rounded-full '>
            Use App
          </button>

          <div className='border p-1 border-gray-300 text-zomato-400 w-14 h-14 rounded-full'>
            <img
              src='https://c8.alamy.com/comp/TC2FPE/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg'
              alt=''
              className='w-full h-full rounded-full object-cover'
            />
          </div>
        </div>
      </div>
    </>
  );
};

const DesktopNav = () => {
  return (
    <>
      <div className='hidden lg:inline container px-32 mx-auto'>
        <div className='hidden gap-4 w-full lg:flex items-center justify-around '>
          {/* LOGO */}
          <div className='w-28'>
            <img
              src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
              alt='logo'
              className='w-full h-full'
            />
          </div>

          {/* Middle input */}
          <div className='w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded'>
            <div className='flex items-center gap-2 border-r-2 border-gray-300 pr-2'>
              <span className='text-zomato-300'>
                <HiLocationMarker />
              </span>
              <input
                type='text'
                placeholder='Hyderabad'
                className='focus:outline-none'
              />
              <IoMdArrowDropdown />
            </div>
            <div className='flex w-full items-center gap-2'>
              <RiSearch2Line />
              <input
                type='text'
                placeholder='Search for restaurant cusine or a dish'
                className='w-full focus:outline-none'
              />
            </div>
          </div>
          {/* Avatar*/}
          <div className='relative w-14 '>
            <div className='flex gap-3'>
              <span>Login</span>
              <span>Signup</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className='p-4 flex bg-white shadow-md lg:shadow-none w-full items-center'>
        <MobileNav />
        <DesktopNav />
      </nav>
    </>
  );
};

export default Navbar;

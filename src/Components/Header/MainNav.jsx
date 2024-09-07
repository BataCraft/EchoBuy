import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearch, IoCart } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const MainNav = () => {
  return (
    <>
      <header className=' w-full h-[100px] flex justify-between items-center px-2 mx-auto md:px-8 lg:px-[132px] fixed z-[999]'>
        <div className="logo">
          <NavLink to='/'>
            <h1 className='text-2xl'>Echo<span className='text-green-600'>buy</span></h1>

          </NavLink>
        </div>
        <div id="middle_part" className=' px-4  items-baseline gap-20 justify-center border-r-2 border-r-slate-600 hidden lg:flex'>
          <div className='xl:w-[50rem] md:w-[30rem] px-2 border-[2px] flex items-center justify-center rounded-md border-black '> <input type="search" name="search" id="search" placeholder='Search here...' className=' w-full h-[3rem]  outline-none ' />

            <div className='text-[20px] font-bold'>  <IoSearch /></div>
          </div>

          <div className='text-[30px] self-center' title='Login/Register' >
            <NavLink to='/login' ><FaRegCircleUser /></NavLink>
          </div>

        </div>

        <div className="flex items-center justify-between gap-6 text-[30px]">
          <div className='text-[30px] self-center lg:hidden' title='Login/Register' >
            <NavLink to='/login' ><FaRegCircleUser /></NavLink>
          </div>
          <NavLink to="/fav" title='Favorite'><MdOutlineFavoriteBorder /></NavLink>
          <NavLink to="/cart" title='Cart'><IoCart /></NavLink>

        </div>



      </header>

      <section>
      <div id="middle_part" className=' px-4  items-baseline gap-20 justify-center  flex lg:hidden'>
          <div className='w-full md:w-[40rem] px-2 border-[2px] flex items-center justify-center rounded-md border-black '> <input type="search" name="search" id="search" placeholder='Search here...' className=' w-full h-[3rem]  outline-none ' />

            <div className='text-[20px] font-bold'>  <IoSearch /></div>
          </div>

         

        </div>

      </section>



    </>
  )
}

export default MainNav
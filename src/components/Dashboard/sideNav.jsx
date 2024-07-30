import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsGrid, BsPeople } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import logo from "../../assets/logo.png";

const SideNav = ({ openSideNav, handleMenuClick }) => {

  return (
    <>
      <div className={`sticky z-[100] top-0 border-r h-screen`}>
        <div className="flex border-b">
          <Link className="flex text-black font-bold justify-center items-center pt-2" to="/">
            <img
              src={logo}
              className="max-w-20"
              alt="wechora logo"
            />
            <div>WECHORA FOODS</div>
          </Link>
          <span className={openSideNav ? 'md:text-4xl text-3xl cursor-pointer md:hidden block pt-8 md:pt-7 px-3 md:px-2' : 'hidden'}>
              <ion-icon name={!openSideNav ? 'menu' : 'close'} onClick={handleMenuClick}></ion-icon>
          </span>
        </div>

        <div className="flex justify-center items-center text-black  flex-col pt-6 ">
          <Link
            className={`py-5 px-10 w-full flex  items-center gap-3 hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/dashboard"
          >
            <BsGrid />
            <span className=''>
              Dashboard
            </span>
          </Link>
          <Link
            className={`py-5 px-10 w-full flex  items-center gap-3 hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/calory"
          >
            <BsGrid />
            <span className=''>
              Calory Checker
            </span>
          </Link>
          <Link
            className={`py-5 px-10 w-full flex  items-center gap-3 hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/smoothie"
          >
            <BsGrid />
            <span className=''>
              Smoothie Selector
            </span>
          </Link>
          <Link
            className={`py-5 px-10 w-full flex  items-center gap-3 hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/mealPlan"
          >
            <BsGrid />
            <span className=''>
              Meal Plan
            </span>
          </Link>
          <Link
            className={`py-5 px-10 w-full flex items-center gap-3 hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/profile"
          > 
              <BsPeople/>
            <span>
              Profile
            </span>
          </Link>
        </div>
          <Link
            
            className={` py-5 px-10 w-full flex items-center gap-3 hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/"
          >
            <RiLogoutBoxRLine  />
              <span>
                Logout
              </span>
          </Link>
      </div>
    </>
  );
};

export default SideNav;

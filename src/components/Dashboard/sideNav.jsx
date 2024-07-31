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
              className="md:max-w-20 max-w-12"
              alt="wechora logo"
            />
            <div className="md:text-sm text-[8px] font-bold">WECHORA FOODS</div>
          </Link>
          <span className={openSideNav ? 'md:text-4xl text-xl cursor-pointer md:hidden block pt-5 md:pt-7 md:px-2 pl-2' : 'hidden'}>
              <ion-icon name={!openSideNav ? 'menu' : 'close'} onClick={handleMenuClick}></ion-icon>
          </span>
        </div>

        <div className="flex justify-center items-center text-black  flex-col pt-6 ">
          <Link
            className={`py-5 md:px-10 px-2 w-full flex  items-center gap-3 hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/dashboard"
          >
            <span className="md:pl-0 pl-2">
              <BsGrid/>
            </span>
            <span className='md:text-sm text-[10px]'>
              Dashboard
            </span>
          </Link>
          <Link
            className={`py-5 md:px-10 px-2 w-full flex  items-center gap-3 hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/calory"
          >
            <span className="md:pl-0 pl-2">
              <BsGrid />
            </span>
            <span className='md:text-sm text-[10px]'>
              Calory Checker
            </span>
          </Link>
          <Link
            className={`py-5 md:px-10 px-2 w-full flex  items-center gap-3 hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/smoothie"
          >
            <span className="md:pl-0 pl-2">
              <BsGrid />
            </span>
            <span className='md:text-sm text-[10px]'>
              Smoothie Selector
            </span>
          </Link>
          <Link
            className={`py-5 md:px-10 px-2 w-full flex  items-center gap-3 hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/mealPlan"
          >
            <span className="md:pl-0 pl-2">
              <BsGrid />
            </span>
            <span className='md:text-sm text-[10px]'>
              Meal Plan
            </span>
          </Link>
          <Link
            className={`py-5 md:px-10 px-2 w-full flex items-center gap-3 hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/profile"
          > 
              <span className="md:pl-0 pl-2">
                <BsPeople />
              </span>
            <span className="md:text-sm text-[10px]">
              Profile
            </span>
          </Link>
        </div>
          <Link
            
            className={` py-5 md:px-10 px-2 w-full flex items-center gap-3 hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/"
          >
            <span className="md:pl-0 pl-2">
              <RiLogoutBoxRLine />
            </span>
            <span className="md:text-sm text-[10px]">
              Logout
            </span>
          </Link>
      </div>
    </>
  );
};

export default SideNav;

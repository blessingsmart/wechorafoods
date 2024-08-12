import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsGrid, BsPeople } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import logo from "../../assets/logo.png";

const SideNav = ({ openSideNav, handleMenuClick }) => {

  return (
    <>
      <div className={`sticky z-[100] top-0 border-r h-screen`}>
        <div className="flex border-b px-[5px] md:px-0">
          <Link className="flex text-black font-bold justify-center items-center pt-2" to="/">
            <img
              src={logo}
              className="md:max-w-20 max-w-12"
              alt="wechora logo"
            />
            <div className="md:text-[10px] text-[6px] font-bold">WECHORA FOODS</div>
          </Link>
        </div>

        <div className="text-black">
          <span className={openSideNav ? 'md:text-4xl text-xl text-center cursor-pointer md:hidden block md:px-2 py-2 hover:text-orange-600 hover:bg-orange-600/20 ' : 'hidden'} onClick={handleMenuClick}>
              <ion-icon name={!openSideNav ? 'menu' : 'close'}></ion-icon>
          </span>
          <Link
            className={`flex flex-col items-center py-4 md:px-10 px-2 w-full hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/dashboard"
          >
            <span className="">
              <BsGrid/>
            </span>
            <span className='md:text-sm text-[10px]'>
              Dashboard
            </span>
          </Link>
          <Link
            className={`flex flex-col items-center py-4 md:px-10 px-2 w-full hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/calory"
          >
            <span className="">
              <BsGrid />
            </span>
            <span className='md:text-sm text-[10px]'>
              Calory
            </span>
          </Link>
          <Link
            className={`flex flex-col items-center py-4 md:px-10 px-2 w-full hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/smoothie"
          >
            <span className="">
              <BsGrid />
            </span>
            <span className='md:text-sm text-[10px]'>
              Smoothie
            </span>
          </Link>
          <Link
            className={`flex flex-col items-center py-4 md:px-10 px-2 w-full hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/mealPlan"
          >
            <span className="">
              <BsGrid />
            </span>
            <span className='md:text-sm text-[10px]'>
              Meal Plan
            </span>
          </Link>
          <Link
            className={`flex flex-col items-center py-4 md:px-10 px-2 w-full hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/profile"
          > 
              <span className="">
                <BsPeople />
              </span>
            <span className="md:text-sm text-[10px]">
              Profile
            </span>
          </Link>
        </div>
          <Link
            
            className={`flex flex-col items-center py-4 md:px-10 px-2 w-full hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/"
          >
            <span className="">
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

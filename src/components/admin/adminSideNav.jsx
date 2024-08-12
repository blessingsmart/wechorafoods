import React from "react";
import { Link } from "react-router-dom";
import { BsGrid, BsPeople, BsGear, BsChat, BsPerson } from "react-icons/bs";
import logo from "../../assets/logo.png";

const AdminSideNav = ({ openSideNav, handleMenuClick }) => {

  return (
    <>
      <div className={`sticky z-[100] top-0 h-screen`}>
        <div className="flex flex-col items-center border-b">
          <Link className="flex text-black font-bold justify-center items-center pr-2" to="/">
            <img
              src={logo}
              className="md:max-w-20 max-w-12"
              alt="wechora logo"
            />
            <div className="md:text-[10px] text-[6px] font-bold">WECHORA FOODS</div>
          </Link>
          <span className={openSideNav ? 'md:text-4xl text-xl cursor-pointer md:hidden block pt-5 md:pt-7 md:px-2 pl-2' : 'hidden'}>
              <ion-icon name={!openSideNav ? 'menu' : 'close'} onClick={handleMenuClick}></ion-icon>
          </span>
        </div>

        <div className="text-black mt-8">
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
                <BsPerson />
            </span>
            <span className='md:text-sm text-[10px]'>
              Trainer
            </span>
          </Link>
          <Link
            className={`flex flex-col items-center py-4 md:px-10 px-2 w-full hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/smoothie"
          >
            <span className="">
                <BsPeople />
            </span>
            <span className='md:text-sm text-[10px]'>
              Clients
            </span>
          </Link>
          <Link
            className={`flex flex-col items-center py-4 md:px-10 px-2 w-full hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/mealPlan"
          >
            <span className="">
              <BsChat />
            </span>
            <span className='md:text-sm text-[10px]'>
              Messages
            </span>
          </Link>
          <Link
            className={`flex flex-col items-center py-4 md:px-10 px-2 w-full hover:text-orange-600  hover:bg-orange-600/20 `}
            to="/profile"
          > 
              <span className="">
                <BsGear />
              </span>
            <span className="md:text-sm text-[10px]">
              Settings
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminSideNav;

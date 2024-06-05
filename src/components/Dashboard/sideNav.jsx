import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { BsGrid, BsPeople, BsBook, BsGear } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import logo from "../../assets/logo.png";

const SideNav = ({
  activeDashboard,
  activeProfile,
  active,
}) => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const [displayIconName, setDisplayIconName] = useState(false);

  const handleToggleSideNav = () => {
    setOpenSideNav(!openSideNav);
    setDisplayIconName(false);
  };

  return (
    <>
      {/* <div
        className={`bg-orange-600 z-[100] absolute top-0 items-center justify-center flex `}
      >
        <HiMenu
          style={{
            cursor: "pointer",
            height: "60px",
            width: "60px",
            transition: "transform 200ms ease",
            transform: displayIconName ? "rotate(180deg)" : " none",
          }}
        />
      </div> */}

      <div
        className={`sticky z-[100] top-0 border-r h-screen`}
      >
          <Link className="flex  text-black font-bold justify-center items-center pt-2" to="/">
            <img
              src={logo}
              className="max-w-20"
              alt="wechora logo"
            />
            <div>WECHORA FOODS</div>
          </Link>
        
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

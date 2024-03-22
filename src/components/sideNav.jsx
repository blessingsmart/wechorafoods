import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { BsGrid, BsPeople, BsBook, BsGear } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import logo from "../assets/logo.png";

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
      <div
        className={`bg-orange-600 h-[4.4vw] w-[20px] z-[100] absolute top-0 items-center justify-center ${
          openSideNav ? "left-[22.5%]" : displayIconName ? "left-[6.3%]" : "left-[0%]"
        } flex `}
        onClick={() => {
          setDisplayIconName(!displayIconName);
        }}
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
      </div>

      <div
        className={`${
          openSideNav ? "w-72 " : "w-20 -left-20 hidden",
          displayIconName ? "left-20 hidden" : "left-0"
        } duration-300 bg-[#393939] h-full md:left-0 fixed z-[100] top-0`}
      >
        <div className="flex justify-center items-center pt-2">
          <Link className="" to="/">
            <img
              src={logo}
              className={`${displayIconName ? "max-w-[25]" : "max-w-[100px]"}`}
              alt="wechora logo"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center text-white flex-col gap-5 pt-6 ">
          <Link
            onClick={handleToggleSideNav}
            className={`w-full py-3  ${
              openSideNav ? "   px-2" : "flex justify-center items-center"
            } flex items-center gap-3  ${
              activeDashboard &&
              "bg-orange-600/50 border-l-4 border-[#a3ff47] "
            } hover:bg-orange-600 hover:border-l-[4px_solid_#4b9302]`}
            to="/dashboard"
          >
            {activeDashboard ? (
              <BsGrid className={`${openSideNav ? "max-w-lg" : "max-w-[20]"}`} />
            ) : (
              <BsGrid className={`${openSideNav ? "max-w-lg" : "max-w-[20]"}`} />
            )}
            <span className={` text-white ${openSideNav ? "" : "hidden"}`}>
              Dashboard
            </span>
          </Link>
          <Link
            onClick={handleToggleSideNav}
            className={`w-full py-3  ${
              openSideNav ? "   px-2" : "flex justify-center items-center"
            } flex items-center gap-3  ${
              activeProfile && "bg-[#a3ff47]/50 border-l-4 border-orange-600 "
            } hover:bg-orange-600 hover:border-l-[4px_solid_#4b9302]`}
            to="/profile"
          >
            {activeProfile ? (
              <BsPeople className={`${openSideNav ? "max-w-lg" : "max-w-[20]"}`} />
            ) : (
              <BsPeople className={`${openSideNav ? "max-w-lg" : "max-w-[20]"}`} />
            )}
            <span className={` text-white ${openSideNav ? "" : "hidden"}`}>
              Profile
            </span>
          </Link>
          <br />
          <Link
            onClick={handleToggleSideNav}
            className={`w-full py-3 ${
              openSideNav ? "   px-2" : "flex justify-center items-center"
            } flex items-center gap-3  ${
              active && "bg-[#a3ff47]/50 border-l-4 border-[#a3ff47] "
            } hover:bg-[#a3ff47] hover:border-l-[4px_solid_#4b9302]`}
            to="/"
          >
            <RiLogoutBoxRLine className={`${openSideNav ? "max-w-lg" : "max-w-[20]"}`} />
            {displayIconName && (
              <span className={`${openSideNav ? "" : "hidden"} text-white`}>
                Logout
              </span>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideNav;

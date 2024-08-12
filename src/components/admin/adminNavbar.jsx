import React, {useState} from 'react'
import { GoBell } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const AdminNavbar = ({ openSideNav, handleMenuClick }) => {

  return (
    <div className="max-w-screen border-b p-3 flex justify-between items-center">
        <span className={!openSideNav ? 'text-2xl basis-1/7 cursor-pointer block md:hidden' : 'hidden'}>
          <ion-icon name={openSideNav ? 'close' : 'menu'} onClick={handleMenuClick}></ion-icon>
        </span>
        <div className="flex items-center basis-3/7">
            <h3 className='text-sm font-bold text-gray-500'>Hello {"costumer"}</h3>
        </div>
        <div className="flex items-center basis-3/7">
            <div className="flex items-center mx-2 gap-2">
                <CiSearch />
                <input type="text"
                  placeholder="Search..."
                  className="text-sm py-1 px-3 bg-white rounded-full w-20 md:w-64" />
            </div>
            <GoBell />
        </div>
    </div>
  )
}

export default AdminNavbar;
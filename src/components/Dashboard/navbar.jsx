import React from 'react'
import { GoBell } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="border-b py-3 px-5 flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <h3>Hello {"costumer"}</h3>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 border rounded-full px-3">
                    <CiSearch />
                    <input type="text"
                            placeholder="Search"
                            className=" border-0 py-1 bg-transparent" />
                </div>
                <GoBell />
            </div>
        </div>
  )
}

export default NavBar
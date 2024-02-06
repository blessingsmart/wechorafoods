import React from 'react'
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {

    const links = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About us",
        },
        {
            id: 3,
            link: "Explore Foods",
        },
        {
            id: 4,   
            link: "Reviews",
        },
        // {
        //     id: 5,
        //     link: "Contact",
        // },
    ];

  return (
    <div className='mx-12 my-3 flex justify-between items-center'>
        <div className='flex gap-2 text-2xl font-semibold'>
            <p className='text-orange-600'>Wechora</p> <p>Foods</p>
        </div>
        <div className='flex items-center gap-10'>
            <ul className="hidden md:flex">
                {links.map(({id, link}) => (
                    <li 
                        key={id} className='px-4 cursor-pointer capitalize font-medium text-orange-600 hover:scale-105 duration-200'>
                        {/* <Link to={link} smooth duration={500}>{link}</Link> */}
                        <Link>{link}</Link>
                    </li>
                ))}      
            </ul>
            <RouterLink to='/login'>
            <button className='bg-orange-600 rounded-2xl text-white px-5 py-1 cursor-pointer hover:scale-105 duration-200'>
                Login
            </button>
            </RouterLink>
        </div>
    </div>
  )
}

export default Navbar
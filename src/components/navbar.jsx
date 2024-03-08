import React, { useState } from 'react'
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar = ({ hideId, showId }) => {

    const [nav,  setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const links = [
        {
            id: 1,
            link: "Home",
            page: "/"
        },
        {
            id: 2,
            link: "About us",
            page: "about"
        },
        {
            id: 3,
            link: "Explore Foods",
            to: "menu"
        },
        {
            id: 4,   
            link: "Reviews",
            to: "Testimonials"
        },
        {
            id: 5,
            link: "Calory",
            page: "calory"
        },
        // {
        //     id: 5,
        //     link: "Contact",
        // },
    ];

  return (
    <div className='fixed top-0 h-12 w-screen px-10 flex justify-between items-center bg-orange-600'>
        <RouterLink to='/' className='mx-12 flex gap-2 text-2xl font-semibold'>
            <p className='text-[#f4f1ee]'>Wechora</p> <p>Foods</p>
        </RouterLink>
        <div className='hidden md:flex items-center gap-10'>
            <ul className="flex">
                {links.map(({id, link, to, page}) => (
                    <li 
                        key={id} className='px-4 cursor-pointer capitalize font-medium text-[#f4f1ee] hover:scale-105 duration-200'>
                        {/* <Link to={link} smooth duration={500}>{link}</Link> */}
                        {/* <Link to={to} smooth duration={500} activeClass="active" spy={true} offset={-50}>{link}</Link> */}
                        {to ? (
                        <Link
                        to={to}
                        smooth="true"
                        duration={500}
                        activeClass="active"
                        spy={true}
                        offset={-50}
                        >
                        {link}
                        </Link>
                    ) : (
                        <RouterLink to={page}>
                        {link}
                        </RouterLink>
                    )}
                    </li>
                ))}      
            </ul>
                <RouterLink to='/login'>
                <button className={`${hideId ? 'hidden' : 'block'} bg-[#f47106] rounded-2xl text-white px-5 py-1 cursor-pointer hover:scale-105 duration-200`}>
                    Login
                </button>
                </RouterLink>
                <RouterLink to='/login'>
                <button className={`${showId ? 'block' : 'hidden'} bg-orange-600 rounded-2xl text-white px-5 py-1 cursor-pointer hover:scale-105 duration-200`}>
                    logout
                </button>
                </RouterLink>
        </div>
        <div className='md:hidden mx-5 z-40' onClick={handleNav}>
            {nav ? <AiOutlineClose size='20'/> : <AiOutlineMenu size='20'/>}
        </div>

        <div className={nav ? 'fixed items-center gap-10 bg-orange-600 left-0 top-0 w-screen h-full z-20 ease-in-out duration-500': 'fixed left-[-100%]'}>
            <RouterLink to='/' className='flex gap-2 text-2xl font-semibold mx-5 pt-4 pb-6'>
                <p className='text-[#f4f1ee]'>Wechora</p> <p>Foods</p>
            </RouterLink>
            <ul className="fixed mt-[3%]">
                {links.map(({id, link, to, page}) => (
                    <li 
                        key={id} className='px-4 py-5 mx-5 cursor-pointer capitalize font-medium text-[#f4f1ee] hover:scale-105 duration-200'>
                        {/* <Link to={link} smooth duration={500}>{link}</Link> */}
                        {/* <Link to={to} smooth duration={500} activeClass="active" spy={true} offset={-50}>{link}</Link> */}
                        {to ? (
                        <Link
                        to={to}
                        smooth="true"
                        duration={500}
                        activeClass="active"
                        spy={true}
                        offset={-50}
                        >
                        {link}
                        </Link>
                    ) : (
                        <RouterLink to={page}>
                        {link}
                        </RouterLink>
                    )}
                    </li>
                ))} 
                <RouterLink to='/login'>
                    <button className='bg-[#f47106] rounded-2xl text-white px-5 mx-5 mt-5 py-2 cursor-pointer hover:scale-105 duration-200'>
                        Login
                    </button>
                </RouterLink>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
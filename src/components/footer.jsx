import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div name="footer" className='p-12 flex flex-col'>
        <div className='flex md:flex-row flex-col gap-10 justify-around'>
            <div className='flex flex-col md:items-start items-center gap-5'>
                <div className='flex gap-2 text-2xl font-bold'>
                <p className='text-orange-600'>Wechora</p> <p>Foods</p>
                </div>
                <p>We make home made and healthy food and drinks.  </p>
                <div className='flex text-orange-600 gap-2'>
                    <a href="https://web.facebook.com/wechora"><FaFacebookF size={20} /></a>
                   <a href="https://www.instagram.com/wechora/"> <FaInstagram size={20} /> </a>
                   <a href="https://twitter.com/wechorafoods"> <FaTwitter size={20} /> </a>
                </div>
            </div>
            <div className='flex flex-col md:items-start items-center gap-5'>
                <h2 className='text-orange-600 font-semibold text-2xl'>About Us</h2>
                <div className='flex gap-2'>
                    <p className='font-semibold'>Address:</p><p>44 king George V Road , Onikan off Awolowo Way, Lagos, Nigeria</p>
                </div>
                <div className='flex gap-2'>
                    <p className='font-semibold'>Email:</p><p>sales.wechora@gmail.com</p>
                </div>
                <div className='flex gap-2'>
                    <p className='font-semibold'>Phone:</p><p>0904 374 3730</p>
                </div>
            </div>
            <div className='flex flex-col  md:items-start items-center gap-5'>
                <h2 className='text-orange-600 font-semibold text-2xl'>Get in touch</h2>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p> */}
                <div className='flex justify-center items-center gap-2'>
                    <input 
                    type="text"
                    className='border-2 text-gray-400 rounded-full px-3 py-2'
                    placeholder='Email' />
                    <button className='rounded-full text-white bg-orange-600 my-5 px-3 py-2'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='flex items-center text-center place-self-center pt-10'>
            <p>Copyright © 2023 Wechora Foods.</p>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import  food from "..//assets/food.png";
import { FaShoppingBasket } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className='flex justify-between m-20'>
        <div className='flex flex-col justify-center gap-10'>
            <div className='text-6xl font-semibold'>
                <h1>Food Products, Services and Consulting</h1>
                <span></span>
            </div>
                <h2 className='text-gray-500'>We make home made and healthy food and drinks.</h2>
            <div className='flex gap-5'>
                <button className='bg-orange-600 flex items-center gap-2 rounded-xl text-white px-5 py-2 cursor-pointer hover:scale-105 duration-200'>
                    Order Now  <FaShoppingBasket /> </button>
                <button className='bg-white flex items-center gap-2 rounded-xl drop-shadow-lg text-black px-5 py-2 cursor-pointer hover:scale-105 duration-200 '>
                    Register <MdKeyboardArrowRight /> </button>
            </div>
        </div>
        <img src={food} 
            alt=""
            className='rounded-2xl' />
    </div>
  )
}

export default Hero
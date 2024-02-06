import React, { useEffect } from 'react'
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import  food from "..//assets/food.png";
import  beans from "..//assets/Kidneybeans.jpg";
import { FaShoppingBasket } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
    useEffect(() => {

        const splide = new Splide('.splide', {
          type: 'loop',
          drag: 'free',
          focus: 'center',
          perPage: 1,
          breakpoints: {
            640: {
              perPage: 1,},
            },
          autoScroll: {
            speed: 1,
          },
        });
    
        splide.mount({ AutoScroll });
      }, []); 

  return (
    <div className='flex justify-between m-20'>
        <div className='flex flex-col justify-center gap-10'>
            <div className='text-6xl font-semibold'>
                <h1>Food Products, </h1>
                <h1>Services and Consulting</h1>
            </div>
                <h2 className='text-gray-500'>We make home made and healthy food and drinks.</h2>
            <div className='flex gap-5'>
                <button className='bg-orange-600 flex items-center gap-2 rounded-xl text-white px-5 py-2 cursor-pointer hover:scale-105 duration-200'>
                    Order Now  <FaShoppingBasket /> </button>
                <button className='bg-white flex items-center gap-2 rounded-xl drop-shadow-lg text-black px-5 py-2 cursor-pointer hover:scale-105 duration-200 '>
                    Register <MdKeyboardArrowRight /> </button>
            </div>
        </div>
        <div name="Testimonials" className="splide w-1/2 bg-white rounded-lg">
            <div className="splide__track">
                <ul className="splide__list"> 
                <li className="splide__slide px-1">
                    {/* <div className=''>  */}
                        <img src={food} alt="Image 1" className='rounded-lg w-96 '/>
                    {/* </div> */}
                </li>
                <li className="splide__slide px-1">
                    {/* <div className=''>  */}
                        <img src={beans} alt="Image 2" className='rounded-lg w-96 '/>
                    {/* </div> */}
                </li>
                <li className="splide__slide px-1">
                    {/* <div className=''>  */}
                        <img src={food} alt="Image 3" className='rounded-lg w-96 '/>
                    {/* </div> */}
                </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero
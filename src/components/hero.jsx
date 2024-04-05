import React, { useEffect } from 'react'
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import  mango from "..//assets/mango.jpg";
import  beans from "..//assets/Kidneybeans.jpg";
import  jellof from "..//assets/chopmoney.jpg";
import  yogurt from "..//assets/ProbioticGreekYogurt.jpg";
import  Package from "..//assets/Package.jpg";
import  lunch from "..//assets/lunch.jpg";
import  soup from "..//assets/soup.jpg";
import  breakfast from "..//assets/breakfast.jpg";
import  lunchbox from "..//assets/lunchbox.jpg";
import  chicken from "..//assets/chicken.jpg";
import  smoothie from "..//assets/smoothie.jpg";
import  wechorafarm from "..//assets/wechorafarm.jpg";
import  farm from "..//assets/farm.jpg";
import  farm2 from "..//assets/farm2.jpg";
import  grain from "..//assets/grain.jpg";
import  palm from "..//assets/palm.jpg";
import  farm3 from "..//assets/farm3.jpg";
import  cow from "..//assets/cow.jpg";
import  peppersoup from "..//assets/pepersoup.jpg";
import { FaShoppingBasket } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

const Hero = () => {
    useEffect(() => {

        const splide1 = new Splide('#splide1', {
          type: 'loop',
          padding: '5rem',
          perMove: 1,
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
        }).mount({ AutoScroll });

        return () => {
            // Destroy Splide instances on unmount to prevent memory leaks.
            splide1.destroy();
        };
      }, []); 

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center gap-20 m-20'>
        <div className='flex flex-col justify-center basis-1/2 gap-10'>
                <p className=' text-4xl sm:text-6xl font-semibold' >Food Products, Services and Consulting </p>
                <p className='text-gray-500 text-sm sm:text-lg'>Welcome to a world of mouthwatering, homemade goodness and optimized diet plans! We are passionate about whippin...</p>
            <div className='flex md:flex-row flex-col items-center gap-5'>
                <a href="https://www.whatsapp.com/catalog/2349043743730/?app_absent=0">
                    <button className='bg-orange-600 text-sm flex items-center gap-2 rounded-xl text-white px-5 py-2 cursor-pointer hover:scale-105 duration-200'>
                        Order Now  <FaShoppingBasket /> 
                    </button>
                </a>
                <RouterLink to='/signup'>
                <button className='bg-white flex items-center gap-2 rounded-xl drop-shadow-lg text-black px-5 py-2 cursor-pointer hover:scale-105 duration-200 '>
                    Register <MdKeyboardArrowRight /> </button>
                </RouterLink>
            </div>
        </div>
        <div name="hero" id="splide1" className="splide md:w-1/2 bg-white rounded-lg">
            <div className="splide__track">
                <ul className="splide__list"> 
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={mango} alt="Image 1" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={beans} alt="Image 2" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={yogurt} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={Package} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={lunch} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={breakfast} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={soup} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={jellof} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={lunchbox} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={chicken} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={smoothie} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={wechorafarm} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={farm} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={farm2} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={grain} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={palm} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={farm3} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={cow} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                <li className="splide__slide px-1">
                    <div className=''> 
                        <img src={peppersoup} alt="Image 3" className='rounded-lg w-96 '/>
                    </div>
                </li>
                 </ul>
             </div>
         </div>
    </div>
  )
}

export default Hero
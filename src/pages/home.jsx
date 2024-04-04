import React from 'react'
import Hero from '../components/hero'
import Menu from "../components/menu"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Testimonial from "../components/testimonial"
import Promo from "../components/promo"
import { GiDonut, GiHotMeal } from "react-icons/gi";
import { FaCommentDots, FaBoxOpen } from "react-icons/fa";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoMdTimer } from "react-icons/io";
import { GrPlan } from "react-icons/gr";
import { SlBookOpen } from "react-icons/sl";
import  model from "..//assets/model1.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
// import Video from '../components/video'

const Home = () => {

    const links = [
        {
          id: 1,
          icon: <FaCommentDots size={96}/> ,
          title: "Consultation",
          text: "",
        },
        {
          id: 2,
          icon:  <GiHotMeal size={96}/>,
          title: "Choose Order",
          text: "Review our packages to select your preferred one.",
        },
        {
          id: 3,
          icon:<RiMoneyDollarBoxFill size={96}/>,
          title: "Pay Advance",
          text: "It's quick, safe, and simple. ",
        },
        {
          id: 4,
          icon: <GiDonut size={96}/>,
          title: "Enjoy Meals",
          text: "Food is made and delivered directly to your home.",
        },
      ];

  return (
    <>
    < Navbar />
    < Hero />
    <div className='p-12 bg-gradient-to-b from-orange-100 to-white'>
        <h1 className='flex justify-center font-bold text-4xl py-12 text-orange-600'>What we offer </h1>
        <div>
            <ul className='flex md:flex-row flex-col justify-between items-center'>
                {links.map(({id, icon, title, text}) => (
                    <li 
                        className="flex "
                        key={id} 
                        
                    >
                        <div className='flex flex-col gap-3 items-center text-center '>
                            <div className='text-orange-600 my-3'>
                            {icon}
                            </div>
                            <p className='font-bold'> {title} </p>
                            <p> {text}</p>
                        </div>
                    </li>
                ))} 
            </ul>
        </div>
    </div>
    <div className='flex md:flex-row flex-col items-center p-12 gap-10 justify-around'>
      <div>
        <div className=' absolute translate-y-6 bg-gradient-to-b from-orange-600/70 via-white to-white  sm:w-96 sm:h-96 rounded-full'></div>
        <img src={model} 
            alt=""
            className=' relative rounded-b-full sm:w-96 sm:h-96' />
      </div>
      <div className='py-3'>
        <div className='font-bold text-4xl py-10'>
          <p >We are beyond <span className='text-orange-600'>food</span></p>
          <p > we <span className='text-yellow-300'>Engineer </span>culinary</p>
          <p> excellence</p>
        </div>
        <p className='text-gray-600 text-lg'>We make home made and healthy food and drinks.</p>
        <div className='grid grid-cols-2 gap-7 py-5 font-semibold  text-orange-600 '>
            <div className='flex gap-3 items-center'>
            <GiHotMeal size={25}/>
              <p className='text-black'>Online Order</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoMdTimer size={25}/>
              <p className='text-black'>24/7 Service</p>
            </div>
            <div className='flex gap-3 items-center'>
              <SlBookOpen size={25} />
              <p className='text-black'>Pre-Reservation</p>
            </div>
            <div className='flex gap-3 items-center'>
              <FaBoxOpen size={25} />
              <p className='text-black'>Suprise packages</p>
            </div>
            <div className='flex gap-3 items-center'>
              <GrPlan size={25} />
              <p className='text-black'>Diet meal plan</p>
            </div>
        </div>
        <RouterLink to="about" >
        <button className='rounded-full text-white bg-orange-600 my-5 px-3 py-2'>About us</button>
        </RouterLink >
      </div>
    </div>
    {/* < Video /> */}
    < Menu />
    < Testimonial />
    < Promo />
    < Footer />
    </>
  )
}

export default Home 
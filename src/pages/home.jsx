import React from 'react'
import Hero from '../components/hero'
import { GiDonut, GiHotMeal } from "react-icons/gi";
import { FaCommentDots, FaBoxOpen } from "react-icons/fa";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoMdTimer } from "react-icons/io";
import { GrPlan } from "react-icons/gr";
import { SlBookOpen } from "react-icons/sl";
import  model from "..//assets/model1.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {

    const links = [
        {
          id: 1,
          icon: <FaCommentDots size={96}/> ,
          title: "Consultation",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 2,
          icon:  <GiHotMeal size={96}/>,
          title: "Choose Order",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 3,
          icon:<RiMoneyDollarBoxFill size={96}/>,
          title: "Pay Advance",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 4,
          icon: <GiDonut size={96}/>,
          title: "Enjoy Meals",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
      ];

  return (
    <>
    < Hero />
    <div className='p-12 bg-gradient-to-b from-orange-100 to-white'>
        <h1 className='flex justify-center font-bold text-4xl py-12 text-orange-600'>What we offer </h1>
        <div>
            <ul className='flex justify-between items-center'>
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
    <div className='flex p-12 gap-10 justify-around'>
      <div>
      <img src={model} 
            alt=""
            className='rounded-b-full' />
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
        <button className='rounded-full text-white bg-orange-600 my-5 px-3 py-2'>About us</button>
      </div>
    </div>
    {/* <div className="bg-cover bg-center bg-no-repeat bg-[url('..//assets/food1.jpg')]"> */}
    <div className="bg-yellow-500 py-20 flex flex-col gap-10">
      <div className='flex flex-col place-self-end text-5xl px-10 items-center text-white font-extrabold'>
        <p>Are you ready to order with </p>
        <p>the best deals?</p>
      </div>
      <button className='w-fit flex items-center place-self-center bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-3 rounded-lg text-white font-bold'>
        PROCEED TO ORDER <MdKeyboardArrowRight size={25} /></button>
    </div>
    </>
  )
}

export default Home 
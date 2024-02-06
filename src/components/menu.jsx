import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import  food  from "../assets/food.png";


const Menu = () => {

    const links = [
        {
          id: 1,
          src: food ,
          title: "Consultation",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 2,
          src: food ,
          title: "Choose Order",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 3,
          src: food,
          title: "Pay Advance",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 4,
          src: food,
          title: "Enjoy Meals",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 5,
          src: food,
          title: "Enjoy Meals",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 6,
          src: food,
          title: "Enjoy Meals",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 7,
          src: food,
          title: "Enjoy Meals",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 8,
          src: food,
          title: "Enjoy Meals",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 9,
          src: food,
          title: "Enjoy Meals",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 10,
          src: food,
          title: "Enjoy Meals",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 11,
          src: food,
          title: "Enjoy Meals",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 12,
          src: food,
          title: "Enjoy Meals",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
      ];


  return (
    <>
    <div className='flex flex-col items-center gap-12 p-12'>
        <div className='flex flex-col font-bold text-4xl items-center'>
            <h1><span className='text-orange-600 '>Packages</span> That <span className='text-yellow-300'>Always</span> Make</h1>
            <h1>You Ask For <span className='text-orange-600 '>More</span></h1>
        </div>
        <div className='flex gap-3 text-gray-400'>
            <button className='bg-orange-600 px-3 text-white rounded-full'>Food Items</button>
            <button className='border-2 px-3 border-gray-400 rounded-full'>Meal Plans</button>
            <button className='border-2 px-3 border-gray-400 rounded-full'>Gift Boxes</button>
            <button className='border-2 px-3 border-gray-400 rounded-full'>Beverages</button>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 sm:px-0'>
            {
            links.map(({ id, src, title, text}) => (
                <div key={id} className='flex flex-col items-center rounded-3xl bg-gradient-to-t from-orange-100 to-white px-3'>
                    <img src={src} alt='products' className='rounded-full pt-1 px-1 w-3/4 border-t-8 border-orange-600' />
                    <p className='w-full text-center py-3 font-bold text-orange-600 text-2xl '>{title}</p >
                    <p className='w-full text-center py-3 '>{text}</p >
                    <button className='bg-orange-600 text-white px-4 py-2 rounded-full duration-200 hover:scale-105 flex justify-center items-center gap-2'>Order Now</button>
                </div>
                ))}
        </div>    
    </div>
    <div className="bg-yellow-500 py-20 flex flex-col gap-10">
        <div className='flex flex-col place-self-end text-5xl px-10 items-center text-white font-extrabold'>
        <p>Are you ready to order with </p>
        <p>the best deals?</p>
        </div>
        <button className='w-fit flex items-center place-self-center bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-3 rounded-lg text-white font-bold'>
        PROCEED TO ORDER <MdKeyboardArrowRight size={25} />
        </button>
    </div>
    </>
  )
}

export default Menu
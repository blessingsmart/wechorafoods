import React from 'react'
import Hero from '../components/hero'
import { GiDonut, GiHotMeal } from "react-icons/gi";
import { FaCommentDots } from "react-icons/fa";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

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
    </>
  )
}

export default Home 
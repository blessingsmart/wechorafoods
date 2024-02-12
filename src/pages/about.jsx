import React from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import  yummy  from "../assets/yummy.jpg";
import  yummy1  from "../assets/yummy1.jpg";
import  mission  from "../assets/mission.jpg";
import { FaPlaneDeparture } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";

const About = () => {
  return (
    <>
    < Navbar />
    <div className='relative flex flex-col justify-center '>
        <div className=" w-full h-full absolute bg-white/50"></div>
        <div className='absolute w-1/2 h-full right-40 -translate-x-40 flex flex-col gap-8 items-center justify-center'>
            <h1 className='font-bold text-8xl text-orange-600'>ABOUT US</h1>
            <p className='text-center font-medium'>Wechora Foods is a registered company and a member of the Nigeria Institute of Food Science and Technology.  We are a  food technology company that aims to revolutionize the way people consume and experience food by providing sustainable and healthy alternatives to traditional meals.</p>
            <button className='bg-orange-600 px-3 py-2 rounded-lg text-white'>See more</button>
        </div>
        <img src={yummy} 
        alt="" />
    </div>
    <div className='flex gap-5 justify-between mx-20 my-10'>
        <div className='flex flex-col gap-12'>
            <h2 className='font-bold text-5xl text-orange-600'>Our Target Audience</h2>
            <p className='w-1/2'>Health-conscious individuals who prioritize sustainability and are looking for convenient and eco-friendly meal options.</p>
        </div>
        <TbTargetArrow className='w-52 h-52 text-orange-600' />
    </div>
    <div className='flex gap-5 justify-between mx-20 my-10'>
        <FaPlaneDeparture className='w-52 h-52 text-orange-600' />
        <div className='flex flex-col gap-12'>
            <h2 className='font-bold text-5xl text-orange-600'>Our Mission</h2>
            <p className='w-1/2'>Our environmentally-friendly alternatives helps busy lifestyles that hinders  healthy eating habits </p>
        </div>
    </div>

    < Footer />
    </>
  )
}

export default About
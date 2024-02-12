import React from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import  yummy  from "../assets/yummy.jpg";
import  yummy1  from "../assets/yummy1.jpg";

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
        <img src={yummy} alt="" />
    </div>

    < Footer />
    </>
  )
}

export default About
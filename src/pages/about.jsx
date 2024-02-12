import React from 'react'
import { Link } from "react-scroll";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import  yummy  from "../assets/yummy.jpg";
import  rent  from "../assets/rent.jpg";
import { FaPlaneDeparture } from "react-icons/fa6";
import { TbTargetArrow, TbDeviceAnalytics } from "react-icons/tb";
import { FcCollaboration } from "react-icons/fc";
import { MdEventNote } from "react-icons/md";
import { GiMeal,GiArchiveResearch } from "react-icons/gi";
import { FaBoxOpen, FaKey } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { GrResources } from "react-icons/gr";


const About = () => {
  return (
    <>
    < Navbar />
    <div className='relative flex flex-col justify-center '>
        <div className=" w-full h-full absolute bg-white/50"></div>
        <div className='absolute w-1/2 h-full right-40 -translate-x-40 flex flex-col gap-8 items-center justify-center'>
            <h1 className='font-bold text-8xl text-orange-600'>ABOUT US</h1>
            <p className='text-center font-medium'>Wechora Foods is a registered company and a member of the Nigeria Institute of Food Science and Technology.  We are a  food technology company that aims to revolutionize the way people consume and experience food by providing sustainable and healthy alternatives to traditional meals.</p>
            <Link 
            to={'Aboutmain'}
            smooth="true"
            duration={500}
            activeClass="active"
            spy={true}
            offset={-50}>
            <button className='bg-orange-600 px-3 py-2 rounded-lg text-white'>See more</button>
            </Link>
        </div>
        <img src={yummy} 
        alt="" />
    </div>
    <div name='Aboutmain' className='flex flex-col gap-10 my-10'>
        <div className='flex gap-5 justify-between mx-20 my-10'>
            <div className='flex flex-col gap-12'>
                <h2 className='font-bold text-5xl text-orange-600'>Our Target Audience</h2>
                <p className='w-1/2 text-lg font-normal text-center'>Health-conscious individuals who prioritize sustainability and are looking for convenient and eco-friendly meal options.</p>
            </div>
            <TbTargetArrow className='w-52 h-52 text-orange-600' />
        </div>
        <div className='flex gap-5 justify-between mx-20 my-10'>
            <FaPlaneDeparture className='w-52 h-52 text-orange-600' />
            <div className='flex flex-col  gap-12'>
                <h2 className='font-bold text-5xl text-orange-600'>Our Mission</h2>
                <p className='w-1/2 text-lg font-normal text-center'>Our environmentally-friendly alternatives helps busy lifestyles that hinders  healthy eating habits </p>
            </div>
        </div>
        <div className='flex gap-5 justify-between mx-20 my-10'>
            <FaKey className='w-52 h-52 text-orange-600' />
            <div className='flex flex-col  gap-12'>
                <h2 className='font-bold text-5xl text-orange-600'>Our Key Value Propositions</h2>
                <p className='w-1/2 text-lg font-normal text-center'>Wechora offers a wide variety of healthy plant-based meals made with locally-sourced, organic ingredients, delivered in sustainable packaging, providing consumers with convenient and guilt-free food options that contribute to a healthier life</p>
            </div>
        </div>
        <div className='flex gap-5 justify-between mx-20 my-10'>
            <div className='flex flex-col gap-12'>
                <h2 className='font-bold text-5xl text-orange-600'>Our Key Partnerships</h2>
                <p className='w-1/2 text-lg font-normal text-center'>Local farmers and suppliers, sustainable packaging companies, fitness centers, health-focused influencers, corporate wellness</p>
            </div>
            <FcCollaboration className='w-52 h-52 text-orange-600' />
        </div>
        <div className='flex gap-5 justify-between mx-20 my-10'>
            <GrResources className='w-52 h-52 text-orange-600' />
            <div className='flex flex-col  gap-12'>
                <h2 className='font-bold text-5xl text-orange-600'>Our Key Resources</h2>
                <p className='w-1/2 text-lg font-normal text-center'>Local Farmers, organic suppliers, culinary experts, delivery vehicles, food storage facilities, technology infrastructure,  Dedicated and Experienced Staffs</p>
            </div>
        </div>
    </div>
    <div className='flex flex-col gap-12 items-center my-20'>
        <h1 className='font-bold text-5xl text-orange-600'>Service Offerings</h1>
        <div className='grid grid-cols-2 gap-12 text-xl font-medium justify-items-start'>
            <div className='flex gap-3 justify-center items-center'>
                <MdEventNote className='w-20 h-20 text-orange-600'/>
                <h2>Recipe Development</h2>
            </div>
            <div className='flex gap-3 justify-normal items-center'>
                <GiMeal className='w-20 h-20 text-orange-600'/>
                <h2>Meal preparation</h2>
            </div>
            <div className='flex gap-3 justify-center items-center'>
                <FaBoxOpen className='w-20 h-20 text-orange-600'/>
                <h2>{'Packaging( Primary and Secondary)'}</h2>
            </div>
            <div className='flex gap-3 justify-center items-center'>
                <img src={rent} 
                alt=""
                className='w-20 h-20' />
                <h2>Rentals</h2>
            </div>
            <div className='flex gap-3 justify-center items-center'>
                <SlNote className='w-20 h-20 text-orange-600'/>
                <h2>Diet Meal planning</h2>
            </div>
            <div className='flex gap-3 justify-center items-center'>
                <TbDeviceAnalytics className='w-20 h-20 text-orange-600'/>
                <h2>Marketing Campaigns</h2>
            </div>
            <div className='flex gap-3 justify-center items-center'>
                <GiArchiveResearch className='w-20 h-20 text-orange-600'/>
                <h2>Consultation</h2>
            </div>
        </div>
    </div>

    < Footer />
    </>
  )
}

export default About
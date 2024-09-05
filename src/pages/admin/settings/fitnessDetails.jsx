import React from 'react';
import SideNav from '../../../components/Dashboard/sideNav';
import NavBar from '../../../components/Dashboard/navbar';
import { NavFunctions } from '../../../components/Dashboard/navFunctions';
import { Link, useLocation } from 'react-router-dom';
import { BsGeoAlt, BsFillTelephoneFill, BsEnvelope, BsGlobe, BsInstagram, BsFacebook, BsArrowLeftCircle } from 'react-icons/bs';

function FitnessDetails() {
    const location = useLocation();
    const { openSideNav, handleMenuClick } = NavFunctions();

  return (
    <>
        <div className='flex max-w-screen'>
            <div className={`${openSideNav ? 'md:block' : 'md:block hidden basis-[10%]'}`}>
                <SideNav openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
            </div>
            <div className={openSideNav ? 'basis-[90%] rounded-l-xl bg-gray-200 mt-0 md:mt-2': 'basis-[100%] rounded-l-xl bg-gray-200 mt-0 md:mt-2'}>
                <NavBar openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
                <div className='flex justify-center items-center w-[10%] mt-16'>
                    <Link to="/profile" className='text-5xl hover:scale-105 duration-200'><BsArrowLeftCircle/></Link>
                </div>
                <h1 className='text-center py-5 font-bold md:text-7xl text-4xl text-gray-600 uppercase'>{location.state.fitnessName}</h1>
                <div className='flex gap-2 mx-5 mt-16'>
                    <div className='basis-1/2'>
                        <div className='my-5 text-center'>
                            <h1 className='md:text-4xl font-black uppercase'>{location.state.fitnessName}</h1>
                            <h4 className='text-2xl mt-3'>Today's workout is ready for you</h4>
                            <div>
                                <p className='text-sm mt-16'>Choose a workout and start exercising</p>
                                <div className='flex grid grid-cols-2 gap-2 mt-5'>
                                    <img src={`https://serverside.wechorafoods.com/assets/${location.state.fitnessImage}`} alt="" className='w-1/2 rounded-full'/>
                                    <img src={`https://serverside.wechorafoods.com/assets/${location.state.fitnessImage}`} alt="" className='w-1/2 mt-3 rounded-full'/>
                                    <img src={`https://serverside.wechorafoods.com/assets/${location.state.fitnessImage}`} alt="" className='w-1/2 rounded-full'/>
                                    <img src={`https://serverside.wechorafoods.com/assets/${location.state.fitnessImage}`} alt="" className='w-1/2 mt-3 rounded-full'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 w-full'>
                        <img src={`https://serverside.wechorafoods.com/assets/${location.state.fitnessImage}`} alt="" className="w-full h-full py-5 object-cover"/>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center py-16 mx-5'>
                    <div className='flex justify-center'>
                        <h2 className='font-black underline underline-offset-2 text-xl'>Contact Us:</h2>
                    </div>
                    <div className='flex grid md:grid-cols-3 grid-cols-2 gap-3 mt-5'>
                        <p className="flex gap-1">
                            <span><BsFillTelephoneFill className='mt-[3px]' /></span>
                            <span>Phone: {location.state.fitnessContact}</span>
                        </p>
                        <p className="flex gap-1">
                            <span><BsGeoAlt className='mt-[3px]' /></span>
                            <span>Address: {location.state.fitnessAddress}</span>
                        </p>
                        <p className="flex gap-1 hover:text-blue-500">
                            <span><BsEnvelope className='mt-[3px]' /></span>
                            <a href={location.state.fitnessEmail}>Email: {location.state.fitnessEmail}</a>
                        </p>
                        <p className="flex gap-1 hover:text-blue-500">
                            <span><BsFacebook className='mt-[3px]' /></span>
                            <a href="">Facebook: {location.state.fitnessFacebook}</a>
                        </p>
                        <p className="flex gap-1 hover:text-blue-500">
                            <span><BsInstagram className='mt-[3px]' /></span>
                            <a href="">Instagram: {location.state.fitnessInstagram}</a>
                        </p>
                        <p className="flex gap-1 hover:text-blue-500">
                            <span><BsGlobe className='mt-[3px]' /></span>
                            <a href="">Website: {location.state.fitnessWebsite}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FitnessDetails
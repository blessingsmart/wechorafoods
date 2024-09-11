import React, { useState } from 'react';
import AdminSideNav from '../../components/admin/adminSideNav';
import AdminNavbar from '../../components/admin/adminNavbar';
import { NavFunctions } from '../../components/Dashboard/navFunctions';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import UploadVideo from '../../assets/sampleVideoUpload.mp4';
import { question, answer } from '../Dashboard/data'
import { BsX } from "react-icons/bs";
import food from "../../assets/logo.png";


function Trainer() {
    const { openSideNav, handleMenuClick } = NavFunctions();
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
        <div className='flex max-w-screen'>
            <div className={openSideNav ? 'md:block' : 'md:block hidden basis-[10%]'}>
                <AdminSideNav openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
            </div>
            <div className={openSideNav ? 'basis-[90%] rounded-l-xl bg-gray-200 mt-0 md:mt-2': 'basis-[100%] rounded-l-xl bg-gray-200 mt-0 md:mt-2'}>
                <AdminNavbar openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
                <div className='mx-5'>
                    <div className='flex justify-between pt-16'>
                        <button className='bg-blue-500 text-end flex px-2 py-1 rounded-md text-white font-bold hover:scale-105 duration-200'><span className='mt-[2px]'><BsPlus/></span><span>Add Training</span></button>
                        <button onClick={togglePopup} className='bg-blue-500 text-end flex px-2 py-1 rounded-md text-white font-bold hover:scale-105 duration-200'><span className='mt-[2px]'><BsPlus/></span><span>Add Question</span></button>
                    </div>
                    {isOpen && (
                        <div className='fixed flex items-center justify-center inset-20 z-20 bg-orange-500 h-screen top-0 left-0 right-0 bottom-0'>
                            <div className='flex justify-center w-4/5 mx-auto'>
                    <img
                        src={food}
                        alt="logo"
                        className="md:basis-2/4 py-10 hidden md:block"
                    />
                    <div className='md:basis-2/4 md:px-0 px-5 my-10 py-10 bg-gray-200 rounded-r-lg flex flex-col justify-center gap-10'>
                        <h1 className='text-center uppercase text-2xl font-bold'>Register a new fitness center</h1>
                        <form className="mx-auto w-full px-4">
                            <div>
                                <div className='md:flex md:justify-between md:gap-2'>
                                    <div className='basis-1/2 my-5'>
                                        <h2 className='md:basis-1/4'>Fitness Center</h2>
                                        <div className='md:basis-3/4 flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                            <input
                                                label="name"
                                                name="fitnessName"
                                                type="text"
                                                placeholder="Enter center name..."
                                                className="w-full border-none focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className='my-5'>
                                        <h2 className='md:basis-1/4'>Image</h2>
                                        <div className='md:basis-3/4 flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                            <input
                                                name="fitnessImage"
                                                type="file"
                                                className="w-full border-none focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="w-full mt-6 bg-orange-600 px-3 text- rounded-full p-2"
                                type="submit">
                                Register Center
                            </button>
                        </form>
                        <div className='flex justify-end items-end mt-24'>
                            <button onClick={togglePopup} className="mt-2 px-4 py-2 rounded-md bg-gray-400 bg-opacity-50 mx-2 hover:scale-105 duration-200">close</button>
                        </div>
                    </div>
                </div>
                        </div>
                    )}
                    <div className='flex gap-3'>
                        <div className='basis-2/3 mb-10'>
                            <div className="bg-black w-full md:h-[70vh] h-[45vh] flex mt-10">
                                <video className="w-full h-full p-5 object-cover" controls>
                                    <source src={UploadVideo} type="video/mp4" />
                                </video>
                            </div>
                            <h1 className='font-black mt-2 uppercase'>Performance Summary 1</h1>
                        </div>
                        <div className='basis-1/3'>
                            <div className='bg-orange-400 my-10 rounded-md'>
                                <h1 className='font-black text-2xl my-2 uppercase text-center'>Questions</h1>
                            </div>
                            <div className='mx-4'>
                                <p className='flex gap-5 text-xs md:text-sm'>
                                    <span className='font-black'>1.</span>
                                    <p>Who is the president of nigeria</p>
                                </p>
                                <div className='my-3 text-[8px] md:text-xs mx-2 md:mx-8'>
                                    <p className='flex gap-3'>
                                        <span className='font-black'>a.</span>
                                        <p>Alhaji Bola Ahmed Tinubu</p>
                                    </p>
                                    <p className='flex gap-3'>
                                        <span className='font-black'>b.</span>
                                        <p>Alhaji Bola Ahmed Tinubu</p>
                                    </p>
                                    <p className='flex gap-3'>
                                        <span className='font-black'>c.</span>
                                        <p>Alhaji Bola Ahmed Tinubu</p>
                                    </p>
                                    <p className='flex gap-3'>
                                        <span className='font-black'>d.</span>
                                        <p>Alhaji Bola Ahmed Tinubu</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-2/3 my-10 border-2 border-black bg-gray-400'>
                        <div className='flex justify-center items-center'>
                            <h1 className='font-black mt-2 uppercase text-xl'>Performance Summary 1</h1>
                        </div>
                        <div className='flex'>
                            <div className='basis-1/2 pt-14 px-2'>
                                <table className='md:text-xl'>
                                    <thead>
                                        <tr className='border-b border-black uppercase'>
                                            <th className='px-2 py-2 text-start truncate'>Division</th>
                                            <th className='px-2 py-2 text-star truncate'>Aggregate</th>
                                        </tr>
                                    </thead>
                                    <tbody className='border-b border-black'>
                                        <tr>
                                            <td className='px-2 py-2 text-start truncate border-r border-black'>total question</td>
                                            <td className='px-2 py-2 text-start truncate'>200</td>
                                        </tr>
                                        <tr>
                                            <td className='px-2 py-2 text-start truncate border-r border-black'>Successful:</td>
                                            <td className='px-2 py-2 text-start truncate'>70/200</td>
                                        </tr>
                                        <tr>
                                            <td className='px-2 py-2 text-start truncate border-r border-black'>Unsuccessful:</td>
                                            <td className='px-2 py-2 text-start truncate'>30/200</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='basis-1/2 pt-16 px-2'>
                                <div className='flex gap-3'>
                                    <div className='w-1/2'>
                                        <p className='font-black bg-gray-100 py-3 rounded-md md:text-xl text-sm text-center'>
                                            <span className='uppercase'>Score</span>
                                            <h4 className=''>200</h4>
                                        </p>
                                    </div>
                                    <div className='w-1/2'>
                                        <p className='font-black bg-gray-100 py-3 rounded-md md:text-xl text-sm text-center'>
                                            <span className='uppercase'>Score</span>
                                            <h4 className=''>200</h4>
                                        </p>
                                    </div>
                                </div>
                                <div className='py-5'>
                                    <p className='font-black bg-gray-100 py-3 rounded-md md:text-2xl text-xl text-center'>
                                        <span className='uppercase'>Score</span>
                                        <h4 className=''>200</h4>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Trainer;
import React from 'react';
import AdminSideNav from '../../components/admin/adminSideNav';
import AdminNavbar from '../../components/admin/adminNavbar';
import { NavFunctions } from '../../components/Dashboard/navFunctions';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import UploadVideo from '../../assets/sampleVideoUpload.mp4'


function Trainer() {
    const { openSideNav, handleMenuClick } = NavFunctions();

  return (
    <>
        <div className='flex max-w-screen'>
            <div className={openSideNav ? 'md:block' : 'md:block hidden basis-[10%]'}>
                <AdminSideNav openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
            </div>
            <div className={openSideNav ? 'basis-[90%] rounded-l-xl bg-gray-200 mt-0 md:mt-2': 'basis-[100%] rounded-l-xl bg-gray-200 mt-0 md:mt-2'}>
                <AdminNavbar openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
                <div className='mx-5'>
                    <div className='flex justify-start pt-16'>
                        <Link to="/add-fitness" className='bg-blue-500 text-end flex px-2 py-1 rounded-md text-white font-bold hover:scale-105 duration-200'><span className='mt-[2px]'><BsPlus/></span><span>Add Training</span></Link>
                    </div>
                    <div className='flex gap-3'>
                        <div className='basis-2/3'>
                            <div className="bg-black w-[120vh] h-[70vh] flex my-10">
                                <video className="w-full h-full p-5 object-cover" controls>
                                    <source src={UploadVideo} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className='basis-1/3'>
                            <div className='bg-orange-400 my-10 rounded-md'>
                                <h1 className='font-black text-2xl my-2 uppercase text-center'>Questions</h1>
                            </div>
                            <div className='mx-4'>
                                <p className='flex gap-5'>
                                    <span className='font-black'>1.</span>
                                    <p>Who is the president of nigeria</p>
                                </p>
                                <div className='my-3'>
                                    <p className='flex gap-3 mx-8  text-xs'>
                                        <span className='font-black'>a.</span>
                                        <p>Alhaji Bola Ahmed Tinubu</p>
                                    </p>
                                    <p className='flex gap-3 mx-8  text-xs'>
                                        <span className='font-black'>b.</span>
                                        <p>Alhaji Bola Ahmed Tinubu</p>
                                    </p>
                                    <p className='flex gap-3 mx-8  text-xs'>
                                        <span className='font-black'>c.</span>
                                        <p>Alhaji Bola Ahmed Tinubu</p>
                                    </p>
                                    <p className='flex gap-3 mx-8  text-xs'>
                                        <span className='font-black'>d.</span>
                                        <p>Alhaji Bola Ahmed Tinubu</p>
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
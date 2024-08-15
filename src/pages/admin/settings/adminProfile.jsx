import React from 'react';
import Mr_williams from '../../../assets/Mr_williams_1.png'

function AdminProfile() {
  return (
    <>
        <div className='md:mb-10 my-5'>
            <div className='flex flex-col items-center text-gray-400 py-2'>
                <div className='flex gap-5'>
                    <img 
                        src={Mr_williams} 
                        className="md:max-w-64 max-w-20 p-2"
                        alt=""
                    />
                    
                </div>
                <div>
                    <div className='md:mt-32 mt-8'>
                        <div className='flex gap-2 '>
                            <button className='bg-orange-300 py-[2px] px-2 rounded-md hover:scale-105 duration-200'>
                                Change picture
                            </button>
                            <button className='bg-gray-200 py-[2px] px-2 rounded-md hover:scale-105 duration-200'>
                                Delete picture
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className='mt-2'>Profile name</p>
                        <input 
                            type="text"
                            name='name'
                            className='border my-2 rounded-md'
                        />
                    </div>
                    <div>
                        <p className='mt-2'>Username</p>
                        <input 
                            type="text"
                            name='username'
                            className='border my-2 rounded-md'
                        />
                    </div>
                    <div>
                        <p className='mt-2'>Status recently</p>
                        <input 
                            type="text"
                            name='status'
                            className='border my-2 rounded-md'
                        />
                    </div>
                    <div>
                        <p className='mt-2'>About me</p>
                        <textarea 
                        name="about" 
                        type="text"
                        className='border my-2 rounded-md'
                        />
                    </div>
                </div>
                
            </div>
            <div className='flex flex-col items-end py-5'>
                <button className='bg-orange-300 py-[2px] px-2 rounded-md hover:scale-105 duration-200'>
                    Save changes
                </button>
            </div>
        </div>
    </>
  )
}

export default AdminProfile;
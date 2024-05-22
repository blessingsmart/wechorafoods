import React from 'react'
import SideNav from '../../components/Dashboard/sideNav';
import  food from "../../assets/signup.jpg";
import NavBar from '../../components/Dashboard/navbar';


const Profile = () => {
  return (
    
    <>  
    <div className='flex'>
        <div className='basis-1/5'>
        <SideNav  />
        </div>
        <div className='flex flex-col pl-16 basis-4/5 '>
            <NavBar />
            <h1 className='text-center py-5 font-bold text-2xl'>WELCOME TO YOUR PROFILE</h1> 
            <div className='bg-orange-600 flex flex-col md:h-full mx-20 rounded-lg p-10'>
                <div className='flex gap-5 justify-between'>
                    <img src={food} 
                    alt="Profile picture"
                    className='w-32 h-32 rounded-full border-4 border-orange-600 flex items-center justify-center' />
                    <div className='flex flex-col gap-5 w-full'>
                        <div className='flex gap-5 '>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>Your Name</h3>
                                <input 
                                type="text"
                                placeholder='Charles Edem'
                                className='p-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>Username</h3>
                                <input type="text"
                                placeholder='username'
                                className=' p-2 rounded-lg' />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>Email</h3>
                                <input type="email"
                                placeholder='email' 
                                className='w-full p-2 rounded-lg'/>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>Password</h3>
                                <input type="password"
                                placeholder='password'
                                className='w-full p-2 rounded-lg' />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>Age</h3>
                                <input type="date"
                                placeholder='age' 
                                className='w-full p-2 rounded-lg'/>
                                </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>Gender</h3>
                                <input type="gender"
                                placeholder='gender'
                                className='w-full p-2 rounded-lg' />
                                </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>height</h3>
                                <input type="number"
                                placeholder='height' 
                                className='w-full p-2 rounded-lg'/>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>weight</h3>
                                <input type="number"
                                placeholder='weight'
                                className='w-full p-2 rounded-lg' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 self-end'>
                    <button  className="mt-6 w-20 bg-white px-3 text-orange-600 rounded-full font-semibold p-2"
                        type="submit">
                        Edit
                    </button>
                    <button  className="mt-6 w-20 bg-white px-3 text-orange-600 rounded-full font-semibold p-2"
                        type="submit">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Profile
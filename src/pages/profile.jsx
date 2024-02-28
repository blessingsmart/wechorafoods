import React from 'react'
import Navbar from '../components/navbar';
import SideNav from '../components/sideNav';

const Profile = () => {
  return (
    
    <>  
    <div>
        <SideNav  />
        <div className='flex flex-col pl-16'>
            <Navbar />
            <h1>Welcome to your profile</h1> 
        </div>
    </div>
</>
  )
}

export default Profile
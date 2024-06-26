import React, { useState, useEffect }  from 'react'
import SideNav from '../../components/Dashboard/sideNav';
import  food from "../../assets/signup.jpg";
import NavBar from '../../components/Dashboard/navbar';


const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [hideId, setHideId] = useState(false); // Initialize hideId as true
    const [showId, setShowId] = useState(false); // Initialize hideId as true

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        fetch("https://serverside.wechorafoods.com/api/dashboard", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            if(!response.ok){
                throw new Error('Unauth');
            }
            return response.json();
        })
        .then((data) => {
            setUserData(data);
            setHideId(true);
            setShowId(true);
        })
        .catch((error) => console.error('Error fetching user data:', error));
    },[history])

    console.log(userData)

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
                {userData ? (
                <div className='flex gap-5 justify-between basis-2/5'>
                    <img src={food} 
                    alt="Profile picture"
                    className='w-32 h-32 rounded-full border-4 border-orange-600 flex items-center justify-center' />
                    <div className='flex flex-col gap-5 w-full'>
                        <div className='flex gap-5 '>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>Your Name</h3>
                                <input 
                                type="text"
                                placeholder={userData.name}
                                className='p-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>Username</h3>
                                <input type="text"
                                placeholder={userData.username}
                                className=' p-2 rounded-lg' />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>Email</h3>
                                <input type="email"
                                placeholder={userData.email} 
                                className='w-full p-2 rounded-lg'/>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>Password</h3>
                                <input type="password"
                                placeholder={userData.password}
                                className='w-full p-2 rounded-lg' />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>Age</h3>
                                <input type="date"
                                placeholder={userData.age}
                                className='w-full p-2 rounded-lg'/>
                                </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>Gender</h3>
                                <input type="gender"
                                placeholder={userData.gender}
                                className='w-full p-2 rounded-lg' />
                                </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>height</h3>
                                <input type="number"
                                placeholder={userData.height} 
                                className='w-full p-2 rounded-lg'/>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>weight</h3>
                                <input type="number"
                                placeholder={userData.weight}
                                className='w-full p-2 rounded-lg' />
                            </div>
                        </div>
                    </div>
                </div>
                ): (
                    <p>Loading...</p>
                )}
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
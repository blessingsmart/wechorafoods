import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink, Link } from 'react-router-dom';
import SideNav from '../../components/Dashboard/sideNav';
import axios from "axios";
import NavBar from '../../components/Dashboard/navbar';
import { NavFunctions } from '../../components/Dashboard/navFunctions';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const history = useNavigate();
    const { openSideNav, handleMenuClick } = NavFunctions();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            history('/login'); // Redirect to login if token is not present
            return;
        }

        fetch('http://localhost:5000/api/dashboard', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Unauth');
            }
            return response.json();
        })
        .then((data) =>{ 
        setUserData(data);
        setHideId(true);   
        setShowId(true);
        })
        
        .catch((error) => console.error('Error fetching user data:', error));
    }, []);

    return (
        <>  
            <div className='flex'>
                <div className={`${openSideNav ? 'md:block' : 'md:block hidden basis-1/5'}`}>
                    <SideNav openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
                </div>
                <div className='basis-4/5'>
                    <NavBar openSideNav={openSideNav} handleMenuClick={handleMenuClick} />
                    {userData ? (
                    <main className="bg-gray-100 text-white"> 
                    </main>
                    ) : (
                        <p>Loading...</p>
                    )}
                    {userData ? (
                    <div className='p-10'>
                        <h3 className='text-2xl text-center font-bold my-5 p-5'><span className='text-3xl'>{userData.name},  </span>  Thank you for signing up. Your health information is as follows</h3>
                        <div className='grid grid-cols-3 gap-2'>
                            <button className='h-32 max-w-60 bg-orange-600 rounded-lg p-5'>
                                <h2 className='text-xl'>BMR</h2>
                                <p className='text-5xl font-bold'>{userData.bmr}</p>
                            </button>
                            <button className='h-32 bg-orange-600 max-w-60 rounded-lg p-5'>
                                <h2 className='text-xl'>BMI</h2>
                                <p className='text-5xl font-bold'>{userData.bmi}</p>
                            </button>
                            <button className='h-32 bg-orange-600 max-w-60 rounded-lg p-5'>
                                <h2 className='text-xl'>TEE</h2>
                                <p className='text-5xl font-bold'>{userData.tdee}</p>
                            </button>
                        </div>
                    </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Dashboard;

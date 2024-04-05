import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Navbar from '../components/navbar';
import SideNav from '../components/sideNav';
import Calory from '../components/calory'
// import hideId from '../components/sideNav';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const history = useNavigate();
    const [hideId, setHideId] = useState(false); // Initialize hideId as true
    const [showId, setShowId] = useState(false); // Initialize hideId as true

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            history('/login'); // Redirect to login if token is not present
            return;
        }

        fetch('https://serverside.wechorafoods.com/api/dashboard', {
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
    }, [history]);

    return (
        <>  
            <div>
                <SideNav />
                <div className='pl-16'>
                    <Navbar 
                    hideId={hideId}
                    showId={showId} />
                    <h1 className='font-semibold text-5xl text-center mt-12 mb-5'>Dashboard</h1>
                    {userData ? (
                    <main className="bg-orange-600 text-white md:h-full mx-20 rounded-lg p-10 flex flex-col items-center justify-center">
                        <Calory />
                    </main>
                    ) : (
                        <p>Loading...</p>
                    )}
                    {userData ? (
                    <div className='flex'>
                        <button className='w-52 h-32 bg-orange-600 rounded-lg mx-20 my-10 p-5'>
                            <h2 className='text-lg'>BMR</h2>
                            <p className='text-5xl font-bold'>{userData.bmr}</p>
                        </button>
                        <button className='w-52 h-32 bg-orange-600 rounded-lg mx-20 my-10 p-5'>
                            <h2 className='text-lg'>BMI</h2>
                            <p className='text-5xl font-bold'>{}</p>
                        </button>
                        <button className='w-52 h-32 bg-orange-600 rounded-lg mx-20 my-10 p-5'>
                            <h2 className='text-lg'>TEE</h2>
                            <p className='text-5xl font-bold'>{}</p>
                        </button>
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

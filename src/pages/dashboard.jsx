import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Navbar from '../components/navbar';
import SideNav from '../components/sideNav';
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
    }, [history]);

    return (
        <>  
            <div>
                <SideNav />
                <div className='pl-16'>
                    <Navbar 
                    hideId={hideId}
                    showId={showId} />
                    <h1 className='font-semibold text-5xl text-center my-5'>Dashboard</h1>
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
                    {userData ? (
                    <main className="bg-orange-600 text-white md:h-full mx-20 rounded-lg p-10 flex flex-col items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold">Welcome, {userData.name}!</h1>
                            <p className="my-4">Your Basal Metabolic Rate (BMR) is {userData.bmr}.</p>
                            <p className="my-4">
                                Basal Metabolic Rate (BMR) is the number of calories your body needs to
                                maintain basic physiological functions while at rest. It represents the minimum
                                amount of energy required to keep your body functioning.
                            </p>
                            <p className="my-4">
                                To calculate your BMR, various factors such as age, gender, weight, and height
                                are taken into account. It is an important factor in determining your daily
                                caloric needs.
                            </p>
                            <p className="my-4">
                                To learn more about BMR and how it affects your health and fitness goals, check
                                out our <RouterLink to="/bmr-info">BMR information</RouterLink> page.
                            </p>
                        </div>
                        </main>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Dashboard;

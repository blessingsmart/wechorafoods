import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink, Link } from 'react-router-dom';
import SideNav from '../../components/Dashboard/sideNav';
import NavBar from '../../components/Dashboard/navbar';
import { NavFunctions } from '../../components/Dashboard/navFunctions';
import Footer from "../../components/footer";

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
    }, []);

    return (
        <>  
            <div className='flex max-w-screen'>
                <div className={`${openSideNav ? 'md:block' : 'md:block hidden basis-[10%]'}`}>
                    <SideNav openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
                </div>
                <div className={openSideNav ? 'flex flex-col basis-[85%] border-2 md:border-orange-400' : 'flex flex-col border-2 md:border-orange-400'}>
                    <NavBar openSideNav={openSideNav} handleMenuClick={handleMenuClick} />
                    {userData ? (
                    <main className="bg-gray-100 text-white"> 
                    </main>
                    ) : (
                        <p>Loading...</p>
                    )}
                    {userData ? (
                    <div className='p-10'>
                        <h3 className='md:text-2xl text-sm text-center font-semi-bold my-5 p-5'><span className='md:text-3xl font-bold'>{userData.name},  </span>  Thank you for signing up. Your health information is as follows</h3>
                        <div className='md:grid md:grid-cols-3 gap-10 px-16'>
                            <div className='border-2 border-orange-400 rounded-lg md:p-5 py-3 my-5 text-center'>
                                <h2 className='md:text-xl'>BMR</h2>
                                <p className='md:text-5xl  font-bold'>{userData.bmr}</p>
                            </div>
                            <div className='border-2 border-orange-400 rounded-lg md:p-5 py-3 my-5 text-center'>
                                <h2 className='md:text-xl'>BMI</h2>
                                <p className='md:text-5xl  font-bold'>{userData.bmi}</p>
                            </div>
                            <div className='border-2 border-orange-400 rounded-lg md:p-5 py-3 p-2 my-5 text-center'>
                                <h2 className='md:text-xl'>TEE</h2>
                                <p className='md:text-5xl  font-bold'>{userData.tdee}</p>
                            </div>
                        </div>
                    </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
            <div className="border-t border-gray-600 mt-32">
                < Footer />
            </div>
        </>
    );
};

export default Dashboard;

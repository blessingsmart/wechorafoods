import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink, Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import SideNav from '../components/sideNav';
import axios from "axios";
import Calory from './calory';
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

    const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // Define your API query here
    const query = encodeURIComponent(searchInput);
    axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
      headers: {
        'X-Api-Key': 'seMwjmUADAPENhjZO+hQ8Q==5NGkyMDEynw0BN1R'
      },
    })
    .then((response) => {
      setAPIData(response.data);
      setFilteredResults(response.data); // Assuming you want to display all data initially
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, [searchInput]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

    return (
        <>  
            <div>
                <SideNav />
                <div className='pl-16'>
                    <Navbar 
                    hideId={hideId}
                    showId={showId} />
                    {userData ? (
                    <main className="bg-orange-600 text-white md:h-full mt-[100px] mx-20 rounded-lg p-10 flex flex-col items-center justify-center">
                        {/* <div className="text-center">
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
                        </div> */}
                        <Calory />
                    </main>
                    ) : (
                        <p>Loading...</p>
                    )}
                    {userData ? (
                    <div>
                        <h3 className='text-2xl text-center font-bold my-5 p-5'><span className='text-3xl'>{userData.name},  </span>  Thank you for signing up. Your health information is as follows</h3>
                        <div className='flex'>
                            <button className='w-80 h-32 bg-orange-600 rounded-lg mx-20 my-10 p-5'>
                                <h2 className='text-xl'>BMR</h2>
                                <p className='text-5xl font-bold'>{userData.bmr}</p>
                            </button>
                            <button className='w-80 h-32 bg-orange-600 rounded-lg mx-20 my-10 p-5'>
                                <h2 className='text-xl'>BMI</h2>
                                <p className='text-5xl font-bold'>{userData.bmi}</p>
                            </button>
                            <button className='w-80 h-32 bg-orange-600 rounded-lg mx-20 my-10 p-5'>
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

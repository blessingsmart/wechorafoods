import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink, Link } from 'react-router-dom';
import SideNav from '../../components/Dashboard/sideNav';
import axios from "axios";
import NavBar from '../../components/Dashboard/navbar';

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
            <div className='flex'>
                <div className='basis-1/5'>
                <SideNav />
                </div>
                <div className='basis-4/5'>
                    <NavBar />
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

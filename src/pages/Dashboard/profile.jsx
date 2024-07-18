import React, { useState, useEffect }  from 'react'
import SideNav from '../../components/Dashboard/sideNav';
import  food from "../../assets/signup.jpg";
import NavBar from '../../components/Dashboard/navbar';
import { Link, useNavigate } from "react-router-dom";
import Plotly from 'plotly.js-dist-min';


const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [hideId, setHideId] = useState(false); // Initialize hideId as true
    const [showId, setShowId] = useState(false); // Initialize hideId as true
    const navigate = useNavigate();

    const [updateWeight, setUpdateWeight] = useState("");
    const [updateHeight, setUpdateHeight] = useState("");
    const [updateAge, setUpdateAge] = useState("");
    const [updateGender, setUpdateGender] = useState("");
    const [updateActivity_level, setUpdateActivity_level] = useState("");

    
    useEffect(() => {
        const token = localStorage.getItem('token');
        
        fetch("http://localhost:5000/api/dashboard", {
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
            setUpdateWeight(data.weight);
            setUpdateHeight(data.height);
            setUpdateAge(data.age);
            setUpdateGender(data.gender);
            setUpdateActivity_level(data.activity_level);
            setHideId(true);
            setShowId(true);
        })
        .catch((error) => console.error('Error fetching user data:', error));
    },[history]);


    useEffect(() => {
        if (userData && userData.bmiAvg) {
            // Log the data structure to verify it's correct
            console.log("BMI Average Data:", userData.bmiAvg.differentAverage);

            const data = [{
                values: userData.bmiAvg.differentAverage.values,
                labels: userData.bmiAvg.differentAverage.labels,
                type: 'pie'
            }];

            const layout = {
                title: 'BMI Average Distribution'
            };

            Plotly.newPlot('chart1', data, layout);
        }
    }, [userData]);

  return (
    
    <>
    <div className='flex'>
        <div className='basis-1/5 border-2 border-orange-400'>
            <SideNav  />
        </div>
        <div className='flex flex-col basis-4/5 px-2 border-2 border-orange-400'>
            <div className='basis-1/5'>
                <NavBar />
            </div>
            <h1 className='text-center py-5 font-bold md:text-4xl text-2xl text-orange-600'>WELCOME TO YOUR PROFILE</h1> 
            {userData ? (
            <div className='bg-gradient-to-b from-orange-100 to-white border-4 border-orange-400 md:flex gap-4 my-10'>
                <div className='md:basis-2/7 border-4 border-orange-400 p-4 flex justify-center'>

                        <div className=''>
                            <img src={food} alt="" className='w-64 h-64 leading-4 border-4 border-orange-400 flex items-center justify-center'/>
                            <div className='mt-5 border-4 border-orange-400'>
                                <div className='flex justify-between px-2 py-2'>
                                    <p>Name: </p><p>{userData.name}</p>
                                </div>
                                <div className='flex justify-between px-2 py-2'>
                                    <p>Email: </p><p>{userData.email}</p>
                                </div>
                                <div className='flex justify-between px-2 py-2'>
                                    <p>Age: </p><p>{userData.age}</p>
                                </div>
                                <div className='flex justify-between px-2 py-2'>
                                    <p>Height: </p><p>{userData.height}</p>
                                </div>
                                <div className='flex justify-between px-2 py-2'>
                                    <p>Weight: </p><p>{userData.weight}</p>
                                </div>
                                <div className='flex justify-between px-2 py-2'>
                                    <p>Bmr: </p><p>{userData.bmr}</p>
                                </div>
                                <div className='flex justify-between px-2 py-2'>
                                    <p>Bmi: </p><p>{userData.bmi}</p>
                                </div>
                                <div className='flex justify-between px-2 py-2'>
                                    <p>Tdee: </p><p>{userData.tdee}</p>
                                </div>
                            </div>
                        </div>
                    
                </div>
                <div className='md:flex gap-4 md:basis-5/7'>
                    <div>
                        <div>
                            <div className="content-section">
                                <div className="row mx-auto justify-content-center">
                                    <div className="card m-4" style={{ width: '90%' }}>
                                        <div className="card-body">
                                            <div id="chart1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead>
                                    <tr className='bg-gray-200'>
                                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 leading-4 uppercase tracking-wider border-y-4 border-l-4 border-orange-400'></th>
                                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 leading-4 uppercase tracking-wider border-y-4 border-orange-400'>Result</th>
                                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 leading-4 uppercase tracking-wider border-y-4 border-r-4 border-orange-400'></th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200'>
                                    <tr>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>{userData.bmiAvg.classification}</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>{userData.bmiAvg.bmiAverage}</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>{userData.bmiAvg.remark}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='bg-orange-600 text-white px-4 py-2 rounded-xl hover:scale-105 duration-200 mt-32 text-center mx-16 hidden' onClick={() => navigate("/update", {state: userData})}>
                            <button className='py-2 font-bold text-xl'>Update Data</button>
                        </div>
                        <div className='mt-10'>
                            <div className='my-5 px-5 py-10 border-4 rounded-full border-orange-400 text-center animate-flash'>
                                <span className=''>{userData.bmiAvg.greeting},<span className='font-bold'> {userData.name}</span> ! {userData.bmiAvg.difference} <Link className=' text-orange-400 font-bold'>Smoothie</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ): (
                <p>Loading...</p>
            )} 
            
        </div>
    </div>
</>
  )
}

export default Profile;
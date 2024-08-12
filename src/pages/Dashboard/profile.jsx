import React, { useState, useEffect }  from 'react'
import SideNav from '../../components/Dashboard/sideNav';
import  food from "../../assets/signup.jpg";
import NavBar from '../../components/Dashboard/navbar';
import { Link, useNavigate } from "react-router-dom";
import Plotly from 'plotly.js-dist-min';
import { NavFunctions } from '../../components/Dashboard/navFunctions';
import gym_walkout from '../../assets/gym_walkout.jpg';
import Footer from "../../components/footer";


const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [hideId, setHideId] = useState(false); // Initialize hideId as true
    const [showId, setShowId] = useState(false); // Initialize hideId as true
    const navigate = useNavigate();
    const { openSideNav, handleMenuClick } = NavFunctions();

    const [updateWeight, setUpdateWeight] = useState("");
    const [updateHeight, setUpdateHeight] = useState("");
    const [updateAge, setUpdateAge] = useState("");
    const [updateGender, setUpdateGender] = useState("");
    const [updateActivity_level, setUpdateActivity_level] = useState("");

    
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
            const totalValues = {
                protein: 0,
                fats: 0,
                energy: 0,
                minerals: 0,
                vitamins: 0
            };

            userData.bmiAvg.differentAverage.values.forEach(value => {
                totalValues.protein += value.protein;
                totalValues.fats += value.fats;
                totalValues.energy += value.energy;
                totalValues.minerals += value.minerals;
                totalValues.vitamins += value.vitamins;
              });

              const data = [
                {
                values: [totalValues.protein, totalValues.fats, totalValues.energy, totalValues.minerals, totalValues.vitamins],
                labels: userData.bmiAvg.differentAverage.labels,
                type: 'pie'
            }];

            const layout = {
                title: 'Nutritional Composition Pie Chart',
            };

            Plotly.newPlot('chart1', data, layout);
        }
    }, [userData]);

  return (
    <>
    <div className={openSideNav? 'flex max-w-screen justify-center': 'flex max-w-screen justify-center px-5 md:px-0'}>
        <div className={`${openSideNav ? 'md:block' : 'md:block hidden basis-[15%]'}`}>
            <SideNav openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
        </div>
        <div className={openSideNav ? 'flex flex-col basis-[85%] border-2 md:border-orange-400' : 'flex flex-col border-2 md:border-orange-400'}>
            <NavBar openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
            <h1 className='text-center py-5 font-bold md:text-4xl text-sm text-orange-600'>WELCOME TO YOUR PROFILE</h1> 
            {userData ? (
            <div className='bg-gradient-to-b from-orange-100 to-white border-y-4 md:border-orange-400 md:flex md:gap-2 my-10'>
                <div className='md:basis-2/5 border-r-4 md:border-orange-400 pt-4 flex justify-center'>
                    <div className=''>
                        <img src={food} alt="" className='w-64 h-64 leading-4 border-4 md:border-orange-400 flex items-center justify-center'/>
                    </div>
                </div>
                <div className='md:flex md:basis-3/5 px-4'>
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
                        <div className='bg-orange-600 text-white px-4 md:py-2 rounded-xl hover:scale-105 duration-200 md:mt-32 mt-16 text-center md:mx-16 mx-10' onClick={() => navigate("/update", {state: userData})}>
                            <button className='py-2 font-bold text-xl'>Update Data</button>
                        </div>
                        <div className='my-10'>
                            <div className='my-5 px-5 py-10 border-4 md:border-orange-400 text-center'>
                                <span className=''>{userData.bmiAvg.greeting},<span className='font-bold'> {userData.name}</span> ! {userData.bmiAvg.difference} <Link className=' text-orange-400 font-bold'>Smoothie</Link></span>
                            </div>
                        </div>
                        <hr/>
                        <div className='my-5'>
                            <ul className='md:flex md:gap-4 gap-2'>
                                <li className='my-10 flex md:block gap-4'>
                                    <img src={gym_walkout} alt="project1" className='md:w-70 w-full animate-pulse'/>
                                    <div className='mt-2'>
                                        <a href="" className='flex font-bold mt-2 text-xl text-[#000]'>
                                            <span>Wechora Fitness</span>
                                            <svg className='mx-2 mt-[5px]' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-1 group-hover:stroke-teal-300 lg:ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                        <p className='text-xs mt-2'>44, king george .v. road</p>
                                    </div>
                                </li>
                                <li className='my-10 flex md:block gap-4'>
                                    <img src={gym_walkout} alt="project1" className='md:w-60 w-full animate-pulse'/>
                                    <div className='mt-2'>
                                        <a href="" className='flex font-bold mt-2 text-xl text-[#000]'>
                                            <span>Wechora Fitness</span>
                                            <svg className='mx-2 mt-[5px]' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-1 group-hover:stroke-teal-300 lg:ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                        <p className='text-xs mt-2'>44, king george .v. road</p>
                                    </div>
                                </li>
                                <li className='my-10 flex md:block gap-4'>
                                    <img src={gym_walkout} alt="project1" className='md:w-60 w-full animate-pulse'/>
                                    <div className='mt-2'>
                                        <a href="" className='flex font-bold mt-2 text-xl text-[#000]'>
                                            <span>Wechora Fitness</span>
                                            <svg className='mx-2 mt-[5px]' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-1 group-hover:stroke-teal-300 lg:ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                        <p className='text-xs mt-2'>44, king george .v. road</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            ): (
                <p>Loading...</p>
            )} 
            
        </div>
    </div>
    <div className="border-t border-gray-600 mt-32">
      < Footer />
    </div>
</>
  )
}

export default Profile;
import React, { useState, useEffect }  from 'react'
import SideNav from '../../components/Dashboard/sideNav';
import  food from "../../assets/signup.jpg";
import NavBar from '../../components/Dashboard/navbar';
import { Link, useNavigate } from "react-router-dom";
import Plotly from 'plotly.js-dist-min';
import { NavFunctions } from '../../components/Dashboard/navFunctions';
import Footer from "../../components/footer";
import { BsGlobe } from 'react-icons/bs';


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

//************************** Onboard Fitness Function ************************************************//
    const [onBoardFitness, setOnBoardFitness] = useState([]);


    useEffect(() => {
        fetch("https://serverside.wechorafoods.com/api/onBoardFitness", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((data) => {
            const fitnessArray = Array.isArray(data) ? data : [data];
            setOnBoardFitness(fitnessArray)
        })
        .catch((error) => console.log(error))
    }, []);

  return (
    <>
    <div className='flex max-w-screen'>y
        <div className={`${openSideNav ? 'md:block' : 'md:block hidden basis-[10%]'}`}>
            <SideNav openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
        </div>
        <div className={openSideNav ? 'basis-[90%] rounded-l-xl bg-gray-200 mt-0 md:mt-2': 'basis-[100%] rounded-l-xl bg-gray-200 mt-0 md:mt-2'}>
            <NavBar openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
            <h1 className='text-center py-5 font-bold md:text-4xl text-sm text-orange-600'>WELCOME TO YOUR PROFILE</h1> 
            {userData ? (
            <div>
                <div className='bg-gradient-to-b from-orange-100 to-white border-y-4 md:border-orange-400 md:flex md:gap-2 mt-10'>
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
                        </div>
                    </div>
                </div>
                <div className='w-full mb-10'>
                    <div className='mb-10'>
                        <span className='bg-gray-400 text-gray-200 uppercase font-bold px-2 rounded-r-md'>Fitness Center</span>
                    </div>
                    <div className='md:flex'>
                        <div className='basis-1/3 overflow-y-auto h-64 mt-5 custom-scrollbar mx-5'>
                            {onBoardFitness.map((item, index) => (
                                <ul key={index} className='p-2 bg-gradient-to-b from-orange-100 to-white'>
                                    <li className='py-5 flex gap-4'>
                                        <span className='font-bold text-xl text-[#000]'>
                                            <span className='uppercase md:text-2xl'>{item.fitnessName}</span>
                                            <p className='text-xs mt-4'>{item.fitnessAddress}</p>
                                            <a href={item.fitnessWebsite} className='flex justify-center items-center gap-2 mt-[2px] px-1 mr-4 bg-orange-600 text-center rounded-md hover:scale-105 duration-200'><BsGlobe className='mt-1'/><span>website</span></a>
                                        </span>
                                        <a href=""><img src={`../../../src/imagesFitness/${item.fitnessImage}`} alt="project1" className='md:w-16 animate-pulse'/></a>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className='basis-1/3 overflow-y-auto h-64 mt-5 custom-scrollbar mx-5'>
                            {onBoardFitness.map((item, index) => (
                                <ul key={index} className='p-2 bg-gradient-to-b from-orange-100 to-white'>
                                    <li className='py-5 flex gap-4'>
                                        <span className='font-bold text-xl text-[#000]'>
                                            <span className='uppercase md:text-2xl'>{item.fitnessName}</span>
                                            <p className='text-xs mt-4'>{item.fitnessAddress}</p>
                                            <a href={item.fitnessWebsite} className='flex justify-center items-center gap-2 mt-[2px] px-1 mr-4 bg-orange-600 text-center rounded-md hover:scale-105 duration-200'><BsGlobe className='mt-1'/><span>website</span></a>
                                        </span>
                                        <a href=""><img src={`../../../src/imagesFitness/${item.fitnessImage}`} alt="project1" className='md:w-16 animate-pulse'/></a>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className='basis-1/3 overflow-y-auto h-64 mt-5 custom-scrollbar mx-5'>
                            {onBoardFitness.map((item, index) => (
                                <ul key={index} className='p-2 bg-gradient-to-b from-orange-100 to-white'>
                                    <li className='py-5 flex gap-4'>
                                        <span className='font-bold text-xl text-[#000]'>
                                            <span className='uppercase md:text-2xl'>{item.fitnessName}</span>
                                            <p className='text-xs mt-4'>{item.fitnessAddress}</p>
                                            <a href={item.fitnessWebsite} className='flex justify-center items-center gap-2 mt-[2px] px-1 mr-4 bg-orange-600 text-center rounded-md hover:scale-105 duration-200'><BsGlobe className='mt-1'/><span>website</span></a>
                                        </span>
                                        <a href=""><img src={`../../../src/imagesFitness/${item.fitnessImage}`} alt="project1" className='md:w-16 animate-pulse'/></a>
                                    </li>
                                </ul>
                            ))}
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
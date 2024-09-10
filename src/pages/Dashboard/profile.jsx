import React, { useState, useEffect }  from 'react'
import SideNav from '../../components/Dashboard/sideNav';
import  food from "../../assets/signup.jpg";
import NavBar from '../../components/Dashboard/navbar';
import { Link, useNavigate } from "react-router-dom";
import Plotly from 'plotly.js-dist-min';
import { NavFunctions } from '../../components/Dashboard/navFunctions';
import Footer from "../../components/footer";
import { BsGlobe, BsTelephoneFill, BsChevronDoubleDown } from 'react-icons/bs';


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
    const [isHidden, setIsHidden] = useState([]);
    const [countDown, setCountDown] = useState(20);
    
      
    const handleSeeMore = (index) => {
    const seeMore = [...isHidden];
    seeMore[index] = false;
    setIsHidden(seeMore);
    };
    
    const handleDelayedNavigation = (item) => {
        setIsHidden((prev) => prev.map(() => true)); // Update correctly

        const countDownInterval = setInterval(() => {
            setCountDown((preCountDown) => preCountDown - 1);
        }, 100); // Adjust interval as needed

        setTimeout(() => {
            clearInterval(countDownInterval);
            navigate('/fitnessDetails', {state: item});
        }, 2000); // Adjusted to match countdown timing
    };

    useEffect(() => {
        if(countDown <= 0){
            clearInterval(countDown);
        }
    }, [countDown]);

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
    <div className='flex max-w-screen'>
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
                            {onBoardFitness.slice(0).map((item, index) => (
                                <ul key={index} className='p-2 bg-gradient-to-b from-orange-100 to-white mb-5 rounded-2xl'>
                                    <li className='py-3'>
                                        <div className='flex justify-between gap-4'>
                                            <span className='w-1/2 font-bold text-xl text-[#000]'>
                                                <span className='uppercase md:text-2xl'>{item.fitnessName}</span>
                                                <p className='text-xs mt-6'>You are one workout away from a good mood.</p>
                                                <a href={item.fitnessWebsite} className='flex justify-center mt-[2px] items-center text-sm gap-2 bg-orange-600 rounded-md hover:scale-105 duration-200 w-2/3'><BsTelephoneFill className='mt-1'/><span>Contact Us</span></a>
                                            </span>
                                            <div className='w-1/2 flex justify-center'>
                                                <a href=""><img src={`https://serverside.wechorafoods.com/assets/${item.fitnessImage}`} alt="project1" className='md:w-16 animate-pulse'/></a>
                                            </div>
                                        </div>
                                        {isHidden[index] ? (
                                            <div>
                                                <hr className='mt-2'/>
                                                <div className='flex grid grid-cols-2 mt-2'>
                                                    <p className='text-xs mt-[2px]'><span className='font-black'>Address:</span> {item.fitnessAddress}</p>
                                                    <p className='text-xs mt-[2px]'><span className='font-black'>Phone:</span> {item.fitnessContact}</p>
                                                    <p className='text-xs mt-[2px]'><span className='font-black'>Email:</span> {item.fitnessEmail}</p>
                                                </div>
                                            </div>
                                        ) : (
                                            null
                                        )}
                                        
                                        {isHidden[index] ? (
                                            null
                                        ) : (
                                            <p className='flex gap-1 text-blue-500 justify-center cursor-pointer text-xs mt-4 hover:scale-105 duration-200' onClick={() => handleDelayedNavigation(item)} disabled={isHidden}><span onClick={() => handleSeeMore(index)}>More</span><BsChevronDoubleDown className='mt-1'/></p>
                                        )}
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className='basis-1/3 overflow-y-auto h-64 mt-5 custom-scrollbar mx-5'>
                            {onBoardFitness.map((item, index) => (
                                <ul key={index} className='p-2 bg-gradient-to-b from-orange-100 to-white mb-5 rounded-2xl'>
                                    <li className='py-5 flex justify-between gap-4'>
                                        <span className='font-bold text-xl text-[#000]'>
                                            <span className='uppercase md:text-2xl'>{item.fitnessName}</span>
                                            <p className='text-xs mt-4'>{item.fitnessAddress}</p>
                                            <a href={item.fitnessWebsite} className='flex justify-center items-center gap-2 mt-[2px] px-1 mr-4 bg-orange-600 text-center rounded-md hover:scale-105 duration-200'><BsGlobe className='mt-1'/><span>website</span></a>
                                        </span>
                                        <div className='w-1/4'>
                                            <a href=""><img src={`https://serverside.wechorafoods.com/assets/${item.fitnessImage}`} alt="project1" className='md:w-16 animate-pulse'/></a>
                                        </div>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className='basis-1/3 overflow-y-auto h-64 mt-5 custom-scrollbar mx-5'>
                            {onBoardFitness.map((item, index) => (
                                <ul key={index} className='p-2 bg-gradient-to-b from-orange-100 to-white mb-5 rounded-2xl'>
                                    <li className='py-5 flex justify-between gap-4'>
                                        <span className='font-bold text-xl text-[#000]'>
                                            <span className='uppercase md:text-2xl'>{item.fitnessName}</span>
                                            <p className='text-xs mt-4'>{item.fitnessAddress}</p>
                                            <a href={item.fitnessWebsite} className='flex justify-center items-center gap-2 mt-[2px] px-1 mr-4 bg-orange-600 text-center rounded-md hover:scale-105 duration-200'><BsGlobe className='mt-1'/><span>website</span></a>
                                        </span>
                                        <div className='w-1/4'>
                                            <a href=""><img src={`https://serverside.wechorafoods.com/assets/${item.fitnessImage}`} alt="project1" className='md:w-16 animate-pulse'/></a>
                                        </div>
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
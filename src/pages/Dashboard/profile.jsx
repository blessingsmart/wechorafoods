import React, { useState, useEffect }  from 'react'
import SideNav from '../../components/Dashboard/sideNav';
import  food from "../../assets/signup.jpg";
import NavBar from '../../components/Dashboard/navbar';
import { Link } from "react-router-dom";


const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [hideId, setHideId] = useState(false); // Initialize hideId as true
    const [showId, setShowId] = useState(false); // Initialize hideId as true

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
            setHideId(true);
            setShowId(true);
        })
        .catch((error) => console.error('Error fetching user data:', error));
    },[history])

    console.log(userData)

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
            <div className='bg-gradient-to-b from-orange-100 to-white md:flex gap-4 py-10'>
                <div className='md:basis-2/7 border-4 border-orange-400 p-4 flex justify-center'>
                    {userData ? (
                        <div className=''>
                            <img src={food} alt="" className='w-64 h-64 leading-4 border-4 border-orange-600 flex items-center justify-center'/>
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
                            </div>
                        </div>
                    ): (
                        <p>Loading...</p>
                    )} 
                </div>
                <div className='md:flex gap-4 md:basis-5/7'>
                    <div>
                        <div>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead>
                                    <tr className='bg-gray-200'>
                                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 leading-4 uppercase tracking-wider border-4 border-orange-400'>Classifications</th>
                                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 leading-4 uppercase tracking-wider border-4 border-orange-400'>BMI kg/m2</th>
                                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 leading-4 uppercase tracking-wider border-4 border-orange-400'>Remarks</th>

                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200'>
                                    <tr>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>Normal Range</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>18.5 - 24.9</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>Average</td>
                                    </tr>
                                    <tr>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>Overweight</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>25.0 - 29.9</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>Middle Increase</td>
                                    </tr>
                                    <tr>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>Obesity Class I</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>30.0 - 34.9</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>moderate</td>
                                    </tr>
                                    <tr>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>Obesity Class II</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>35.0 - 39.9</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>Severe</td>
                                    </tr>
                                    <tr>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>Obesity Class III</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>40 and above</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>Very Severe</td>
                                    </tr>
                                </tbody>
                            </table>
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
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>BMI kg/m2</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>18.5 - 24.9</td>
                                        <td className='px-6 py-4 whitespace-no-wrap leading-5 border-4 border-orange-400'>Average</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='border-4 border-orange-400'>
                        <div className='font-bold text-center uppercase'>
                            <h1>Update Task</h1>
                        </div>
                        <div className='px-2 py-5'>
                            <div className='flex justify-between py-2'>
                                <h3 className='p-2'>Name</h3>
                                <input 
                                type="text"
                                placeholder='Name'
                                className='p-2 rounded-lg' />
                            </div>
                            <div className='flex justify-between py-2'>
                                <h3 className='p-2'>Weight</h3>
                                <input 
                                type="text"
                                placeholder='Weight'
                                className='p-2 rounded-lg' />
                            </div>
                            <div className='flex justify-between py-2'>
                                <h3 className='p-2'>Heigth</h3>
                                <input 
                                type="text"
                                placeholder='Height'
                                className='p-2 rounded-lg' />
                            </div>
                            <div className='flex justify-between py-2'>
                                <h3 className='p-2'>Old Date</h3>
                                <input 
                                type="text"
                                placeholder='last date'
                                className='p-2 rounded-lg' />
                            </div>
                            <div className='flex justify-between py-2'>
                                <h3 className='p-2'>New Date</h3>
                                <input 
                                type="text"
                                placeholder='current date'
                                className='p-2 rounded-lg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-10 mx-5'>
                <h3 className='font-bold uppercase underline'>Nutrition Facts</h3>
                <div className='flex mt-5'>
                    <span className='mr-16'>Obasity</span>
                    <p className='ml-16'>30</p>
                </div>
                <div className='flex mt-5'>
                    <span className='mr-16'>Normal</span>
                    <p className='ml-16'>25</p>
                </div>
                <div className='bg-white-600 font-bold mt-5 p-2 border-4 border-orange-400 rounded-full text-center'>
                    <span className=''>You are 5 kg over your normal weight, Esteem user. Visit our weight loss smoothie by clicking here. <Link className=' text-orange-400'>Smoothie</Link></span>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Profile;
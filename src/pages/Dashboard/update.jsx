import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SideNav from '../../components/Dashboard/sideNav';
import NavBar from '../../components/Dashboard/navbar';
import Footer from "../../components/footer";
import { NavFunctions } from '../../components/Dashboard/navFunctions';

function Update() {
    const location = useLocation();
    const [updateName, setUpdateName] = useState("");
    const [updateWeight, setUpdateWeight] = useState("");
    const [updateHeight, setUpdateHeight] = useState("");
    const [updateAge, setUpdateAge] = useState("");
    const [updateGender, setUpdateGender] = useState("");
    const [updateActivity_level, setUpdateActivity_level] = useState("");
    const { openSideNav, handleMenuClick } = NavFunctions();
    
    useEffect(() => {
        console.log(location);
        setUpdateName(location.state.name);
        setUpdateWeight(location.state.weight);
        setUpdateHeight(location.state.height);
        setUpdateAge(location.state.age);
        setUpdateGender(location.state.gender);
        setUpdateActivity_level(location.state.activity_level);
    }, [])

    const updateData = () => {
        const token = localStorage.getItem('token');
        fetch("http://localhost:5000/api/updateUser", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                name: updateName,
                weight: updateWeight,
                height: updateHeight,
                age: updateAge,
                gender: updateGender,
                activity_level: updateActivity_level
            })
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'ok') {
            console.log(data);
            window.location.href = "/profile"
            // Update local state or re-fetch user data
            } else {
            console.error('Error updating user:', data.data);
            }
        })
        .catch((error) => console.error('Error:', error));
    }
  return (
    <>
    <div className={openSideNav? 'flex max-w-screen justify-center': 'flex max-w-screen justify-center px-5 md:px-0'}>
        <div className={`${openSideNav ? 'md:block' : 'md:block hidden basis-1/5'}`}>
            <SideNav openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
        </div>
        <div className='flex flex-col basis-4/5 md:border-2 border md:border-orange-400'>
            <NavBar openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
            <h1 className='text-center py-5 font-bold md:text-4xl text-2xl text-orange-600'>Update Information</h1> 
            <div className='md:border-4 border md:border-orange-400 md:m-16'>
                <div className='md:px-2 py-5 md:mx-16'>
                    <h1 className='text-center font-bold text-xl pb-16'>User Data</h1>
                    <div className='flex justify-between py-2 mx-5'>
                        <h3 className='md:p-2'>Name</h3>
                        <input 
                        type="text"
                        disabled
                        defaultValue={updateName}
                        placeholder='New Name'
                        className='md:p-2 rounded-lg md:max-w-[200px] max-w-[125px]'
                        onChange={(e) => setUpdateName(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between py-2 mx-5'>
                        <h3 className='md:p-2'>Weight</h3>
                        <input 
                        type="text"
                        defaultValue={updateWeight}
                        placeholder='New weight'
                        className='md:p-2 rounded-lg md:max-w-[200px] max-w-[125px]'
                        onChange={(e) => setUpdateWeight(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between py-2 mx-5'>
                        <h3 className='md:p-2'>Heigth</h3>
                        <input 
                        type="text"
                        defaultValue={updateHeight}
                        placeholder='New height'
                        className='md:p-2 rounded-lg md:max-w-[200px] max-w-[125px]'
                        onChange={(e) => setUpdateHeight(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between py-2 mx-5'>
                        <h3 className='md:p-2'>Age</h3>
                        <input 
                        type="text"
                        defaultValue={updateAge}
                        placeholder='New age'
                        className='md:p-2 rounded-lg md:max-w-[200px] max-w-[125px]'
                        onChange={(e) => setUpdateAge(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between py-2 mx-5'>
                        <h3 className='md:p-2'>Gender</h3>
                        <input 
                        type="text"
                        disabled
                        defaultValue={updateGender}
                        placeholder='New gender'
                        className='md:p-2 rounded-lg md:max-w-[200px] max-w-[125px]'
                        onChange={(e) => setUpdateGender(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between py-2 mx-5'>
                        <h3 className='md:p-2'>Activity Level</h3>
                        <select
                            defaultValue={updateActivity_level}
                            onChange={(e) => setUpdateActivity_level(e.target.value)}
                            label="activity_level"
                            name="activity_level"
                            type="text"
                            placeholder="Activity_level..."
                            className="md:p-2 rounded-lg md:max-w-[200px] max-w-[125px]"
                        >
                            <option value="sedentary">Sedentary (little or no exercise)</option>
                            <option value="lightlyActive">Lightly active (light exercise/sports 1-3 days/week)</option>
                            <option value="moderatelyActive">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                            <option value="veryActive">Very active (hard exercise/sports 6-7 days a week)</option>
                            <option value="extraActive">Extra active (very hard exercise & physical job or 2x training)</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-center items-center my-5'>
                    <button 
                        className='bg-orange-600 text-white px-4 py-2 rounded-xl hover:scale-105 duration-200'
                        onClick={updateData}>
                            Save Update
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className="border-t border-gray-600 mt-32">
      < Footer />
    </div>
    </>
  )
}

export default Update
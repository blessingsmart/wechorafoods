import React, { useState } from 'react';
import AdminSideNav from '../../components/admin/adminSideNav';
import AdminNavbar from '../../components/admin/adminNavbar';
import { NavFunctions } from '../../components/Dashboard/navFunctions';
import AdminProfile from './settings/adminProfileManager';
import AdminOperator from './settings/adminOperatorManager';
import AdminFitness from './settings/adminFitness';


function Settings() {
    const { openSideNav, handleMenuClick } = NavFunctions();
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        {
            name: 'Profile Manager',
            content: (<AdminProfile/>),
        },
        {
            name: 'Operator Manager',
            content: (<AdminOperator/>),
        },
        {
            name: 'Report Manager',
            content: 'Content for Tab 3',
        },
        {
            name: 'Onboard Fitness Center', 
            content: (<AdminFitness/>),
        },
        {
            name: 'Group Manager', 
            content: 'Content for Tab 5',
        },
    ];

  return (
    <>
        <div className='flex max-w-screen'>
            <div className={openSideNav ? 'md:block' : 'md:block hidden basis-[10%]'}>
                <AdminSideNav openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
            </div>
            <div className={openSideNav ? 'basis-[90%] rounded-l-xl bg-gray-200 mt-0 md:mt-2': 'basis-[100%] rounded-l-xl bg-gray-200 mt-0 md:mt-2 '}>
                <AdminNavbar openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
                <div className='flex mx-2 rounded-lg md:mt-10 mt-4 md:text-sm text-[10px]'>
                    <div className='bg-gray-100 rounded-md w-1/5 pt-2 mb-2'>
                        {tabs.map((tab, index) => (
                            <button 
                                key={index} 
                                onClick={() => setActiveTab(index)}
                                className={`px-2 m-2 rounded-full ${activeTab === index ? 'border-b-2 border-orange-300' : null}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                    <div className='rounded-md w-4/5 mb-16'>
                        <p className='mx-2'>{tabs[activeTab].content}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Settings;
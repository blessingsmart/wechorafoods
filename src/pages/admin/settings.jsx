import React, { useState } from 'react';
import AdminSideNav from '../../components/admin/adminSideNav';
import AdminNavbar from '../../components/admin/adminNavbar';
import { NavFunctions } from '../../components/Dashboard/navFunctions';
import AdminProfile from './settings/adminProfile';
import AdminAccount from './settings/adminAccount';


function Settings() {
    const { openSideNav, handleMenuClick } = NavFunctions();
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        {
            name: 'Profile',
            content: (<AdminProfile/>),
        },
        {
            name: 'Accounts',
            content: (<AdminAccount/>),
        },
        {
            name: 'Notification', content: 'Content for Tab 3',
        }
    ];

  return (
    <>
        <div className='flex max-w-screen'>
            <div className={openSideNav ? 'md:block' : 'md:block hidden basis-[10%]'}>
                <AdminSideNav openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
            </div>
            <div className={openSideNav ? 'basis-[90%] rounded-l-xl bg-gray-200 mt-0 md:mt-2': 'basis-[100%] rounded-l-xl bg-gray-200 mt-0 md:mt-2 '}>
                <AdminNavbar openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
                <div className='mx-2 rounded-lg'>
                    <div className='md:mt-10 my-5 rounded-md  md:w-2/3 m-4'>
                        {tabs.map((tab, index) => (
                            <button 
                                key={index} 
                                onClick={() => setActiveTab(index)}
                                className={`bg-gray-200 px-2 m-2 rounded-full ${activeTab === index ? 'border-b-2 border-orange-300' : null}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                    <div className='bg-white rounded-md md:w-2/3'>
                        <p className='mx-2'>{tabs[activeTab].content}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Settings;
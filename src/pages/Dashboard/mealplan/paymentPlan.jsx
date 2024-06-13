import React, { useState } from 'react'
import SideNav from '../../../components/Dashboard/sideNav';
import NavBar from '../../../components/Dashboard/navbar';
import Flutter from './flutter';

const PaymentPlan = () => {
    const [selectedPlan, setSelectedPlan] = useState('weekly');

    const handleSelectedPlan = (e) => {
        setSelectedPlan(e.target.value)
    }

    const links = [
        {
            id: 1,
            title: "challenger",
            description: 'plan with 100+ meal challenges, new plans utilize every week',
            price: '#10000',
            plan: '/week billed monthly'
        },
        {
            id: 2,
            title: "Pro",
            description: 'plan with 100+ meal challenges, new plans utilize every week',
            price: '#20000',
            plan: '/week billed monthly'
        },
        {
            id: 3,
            title: "Pro Plus",
            description: 'plan with 100+ meal challenges, new plans utilize every week',
            price: '#30000',
            plan: '/week billed monthly'
        }
    ]
  return (
    <>
        <div className='flex'>
            <div className="basis-1/5">
                <SideNav />
            </div>
            <div className='basis-4/5'>
                <NavBar />
                <div className='bg-white-200'>
                    <div className='text-center'>
                        <h1 className='text-6xl font-bold pt-16 text-orange-600'>Select plan</h1>
                    </div>
                    <div className='text-center text-xl mt-5 font-bold text-gray-600'>
                        <label>
                            <input
                            type="radio"
                            value="weekly"
                            checked={selectedPlan === 'weekly'}
                            onChange={handleSelectedPlan}
                            className='mx-2'
                            />
                            Weekly plan
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="monthly"
                            checked={selectedPlan === 'monthly'}
                            onChange={handleSelectedPlan}
                            className='mx-2'
                            />
                            Switch to monthly plan
                        </label>
                    </div>
                    <div className=''>
                        <ul  className='flex md:flex-row grid md:grid-cols-3 gap-8 mx-3 mt-24'>
                            {links.map(({id, title, description, price, plan}) => {
                                const formattedPrice = new Intl.NumberFormat('en-NG', {
                                    style: 'currency',
                                    currency: 'NGN'
                                }).format(parseInt(price.replace(/[^\d.-]/g, ""), 10));
                                return(
                                    <li key={id} className='bg-gradient-to-t from-orange-600 via-orange-300 to-orange-200 font-bold my-24'>
                                    <div className='mx-4'>
                                        <h3 className='text-xl text-center'>{title}</h3>
                                        <p className='mt-5'>{description}</p>
                                        <p className='mt-8 text-2xl'>{formattedPrice}{plan}</p>
                                    </div>
                                    <div className='flex justify-center item-center my-5'>
                                        <button className='bg-orange-700 border border-orange-600 px-32 py-2 rounded-md'>
                                            <Flutter />
                                        </button>
                                    </div>
                                </li>
                                )}
                            )};
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PaymentPlan;
import React from 'react'
import SideNav from '../../components/Dashboard/sideNav'
import NavBar from '../../components/Dashboard/navbar'
import { Link as RouterLink } from 'react-router-dom'
import  yogurt from "../../assets/ProbioticGreekYogurt.jpg";

const MealPlan = () => {
    const links = [
        {
            id: 1,
            src: yogurt,
            title: "High fibre meal plan",
            message: "7-Day No-Sugar, High-Protein, Anti-Inflammatory Meal Plan for Better Blood Sugar, Created by a Dietitian"
        },
        {
            id: 2,
            src: yogurt,
            title: "High fibre meal plan",
            message: "7-Day No-Sugar, High-Protein, Anti-Inflammatory Meal Plan for Better Blood Sugar, Created by a Dietitian"
        },
        {
            id: 3,
            src: yogurt,
            title: "High fibre meal plan",
            message: "7-Day No-Sugar, High-Protein, Anti-Inflammatory Meal Plan for Better Blood Sugar, Created by a Dietitian"
        },
        {
            id: 4,
            src: yogurt,
            title: "High fibre meal plan",
            message: "7-Day No-Sugar, High-Protein, Anti-Inflammatory Meal Plan for Better Blood Sugar, Created by a Dietitian"
        },
        {
            id: 5,
            src: yogurt,
            title: "High fibre meal plan",
            message: "7-Day No-Sugar, High-Protein, Anti-Inflammatory Meal Plan for Better Blood Sugar, Created by a Dietitian"
        },
        {
            id: 6,
            src: yogurt,
            title: "High fibre meal plan",
            message: "7-Day No-Sugar, High-Protein, Anti-Inflammatory Meal Plan for Better Blood Sugar, Created by a Dietitian"
        },
    ]
  return (
    <>
        <div className="flex">
            <div className="basis-1/5">
                <SideNav />
            </div>
            <div className='basis-4/5'>
                <NavBar />
                <div>
                    <h1 className="font-bold text-7xl p-8 text-center text-orange-600">Meal Plans</h1>
                    <p className='font-bold mx-6 text-xl text-center'>Our delicious meal plans are designed by registered dietitians and food experts to help you lose weight, eat more fiber, go vegan and more. Browse dozens of meal plans to find one that's right for you.</p>
                </div>
                <div className="flex justify-center item-center mt-16">
                    <RouterLink to='/paymentPlan' className='mx-10'>
                        <button className='bg-orange-600 text-sm flex items-center gap-2 rounded-xl text-white px-5 py-2 cursor-pointer hover:scale-105 duration-200'>
                            Weight gain plan
                        </button>
                    </RouterLink>
                    <RouterLink to='/paymentPlan' className='mx-10'>
                        <button className='bg-orange-600 text-sm flex items-center gap-2 rounded-xl text-white px-5 py-2 cursor-pointer hover:scale-105 duration-200'>
                            Weight loss plan
                        </button>
                    </RouterLink>
                </div>
                <div className='mt-24'>
                    <ul className='flex md:flex-row grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-3'>
                        {links.map(({id, src, title, message}) => (
                            <li key={id} className=''>
                                <div className='rounded-md'>
                                    <img src={src} alt="" className='h-56 w-[58vh]'/>
                                </div>
                                <div className='bg-gradient-to-t from-orange-600 via-white to-white mt-4'>
                                    <h4 className='text-xl font-semi-bold uppercase'>{title}</h4>
                                    <p className='text-2xl mt-3 font-bold'>{message}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default MealPlan
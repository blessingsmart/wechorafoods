import React from 'react'
import  food  from "../assets/food.png";
import  yogurt  from "../assets/yogurt.png";
import  yam  from "../assets/yam.png";
import  stew  from "../assets/stew.png";
import  tray  from "../assets/tray.png";
import  snickers  from "../assets/snickers.png";
import  drink  from "../assets/drink.png";
import  gift  from "../assets/gift.png";
import  jollof  from "../assets/jollof.png";
import  smoothie  from "../assets/smoothie.jpg";
import  nuts  from "../assets/nuts.png";
import  cherry  from "../assets/cherry.png";


const Menu = () => {

    const links = [
        {
          id: 1,
          src: tray ,
          title: "Food tray",
          text: "Fried rice, Jollof Rice, Tropical Delight Smoothies, Chocolates, cakes, Shawarma, Fruits, Chicken, Meat kebab",
        },
        {
          id: 2,
          src: cherry ,
          title: "Mixed fruits",
          text: "Grape, Strawberry, Kiwi, Blueberry",
        },
        {
          id: 3,
          src: nuts,
          title: "Mixed nuts",
          text: "Almond, Brazil, Macadamia, Walnuts, Cashew Nuts",
        },
        {
          id: 4,
          src: jollof,
          title: "Chop Money Jollof",
          text: "Chop Money Jellof Rice comes with a combo of 500ml smoothies to go along side",
        },
        {
          id: 5,
          src: stew,
          title: "Soup and stew combo",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 6,
          src: yam,
          title: "Yam and goat pepper soup",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 7,
          src: food,
          title: "Diet meal plan",
          text: "35,000 One off consultation fee, upon confirmation of payment by our finance team, a form will be shared to collect all relevant information about our client.",
        },
        {
          id: 8,
          src: yogurt,
          title: "Wechora Greek yogurt",
          text: "Unsweetened and Sweetened 500ML GREEK YOGHURT",
        },
        {
          id: 9,
          src: drink,
          title: "Drinking yogurt",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
        {
          id: 10,
          src: smoothie,
          title: "Smoothies",
          text: "All flavors of smoothies of 500ml",
        },
        {
          id: 11,
          src: gift,
          title: "Surprise birthday gift box",
          text: "The item in the package includes Fresh Flower, Cake, Chocolates, 3 pack of wechora Greek Yogurt, a 1.5 litre bow of Sea Food Okra Soup or any preferred Soup, e.t.c",
        },
        {
          id: 12,
          src: snickers,
          title: "Special gift box",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
        },
      ];


  return (
    <>
    <div name="menu" className='flex flex-col items-center gap-12 p-12'>
        <div className='flex flex-col font-bold text-4xl items-center'>
            <h1><span className='text-orange-600 '>Packages</span> That <span className='text-yellow-300'>Always</span> Make</h1>
            <h1>You Ask For <span className='text-orange-600 '>More</span></h1>
        </div>
        <div className='flex gap-3 text-gray-400'>
            <button className='bg-orange-600 px-3 text-white rounded-full'>Food Items</button>
            <button className='border-2 px-3 border-gray-400 rounded-full'>Meal Plans</button>
            <button className='border-2 px-3 border-gray-400 rounded-full'>Gift Boxes</button>
            <button className='border-2 px-3 border-gray-400 rounded-full'>Beverages</button>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 sm:px-0'>
            {
            links.map(({ id, src, title, text}) => (
                <div key={id} className=' relative flex flex-col items-center rounded-3xl bg-gradient-to-t from-orange-100 to-white my-3 px-3'>
                    <img src={src} alt='products' className='rounded-full pt-1 px-1 w-3/4 border-t-8 border-orange-600' />
                    <p className='w-full text-center py-3 font-bold text-orange-600 text-2xl '>{title}</p >
                    <p className='w-full text-center pb-5 py-3 '>{text}</p >
                    <a href="https://www.whatsapp.com/catalog/2349043743730/?app_absent=0"
                        className='absolute bottom-0 translate-y-5'> 
                    <button className='bg-orange-600 text-white px-4 py-2 rounded-full duration-200 hover:scale-105 w-fit flex justify-center items-center gap-2'>Order Now</button>
                    </a>
                </div>
                ))}
        </div>    
    </div>
    </>
  )
}

export default Menu
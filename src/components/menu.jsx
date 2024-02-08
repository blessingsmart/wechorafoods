import React, { useState } from 'react'
import  food  from "../assets/food.png";
import  yogurt  from "../assets/yogurt.png";
import  yam  from "../assets/yam.png";
import  stew  from "../assets/stew.png";
import  tray  from "../assets/tray.png";
import  Package from "..//assets/Package.jpg";
import  drink  from "../assets/drink.png";
import  gift  from "../assets/gift.png";
import  jollof  from "../assets/jollof.png";
import  smoothie  from "../assets/smoothie.jpg";
import  nuts  from "../assets/nuts.png";
import  cherry  from "../assets/cherry.png";


const Menu = () => {

    const [selectedCategory, setSelectedCategory] = useState('Food Items');

    const links = [
        {
          id: 1,
          src: tray ,
          title: "Food tray",
          text: "Fried rice, Jollof Rice, Tropical Delight Smoothies, Chocolates, cakes, Shawarma, Fruits, Chicken, Meat kebab",
          category: "Food Items"
        },
        {
          id: 2,
          src: cherry ,
          title: "Mixed fruits",
          text: "Grape, Strawberry, Kiwi, Blueberry",
          category: "Food Items"
        },
        {
          id: 3,
          src: nuts,
          title: "Mixed nuts",
          text: "Almond, Brazil, Macadamia, Walnuts, Cashew Nuts",
          category: "Food Items"
        },
        {
          id: 4,
          src: jollof,
          title: "Chop Money Jollof",
          text: "Chop Money Jellof Rice comes with a combo of 500ml smoothies to go along side",
          category: "Food Items"
        },
        {
          id: 5,
          src: stew,
          title: "Soup and stew combo",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
          category: "Food Items"
        },
        {
          id: 6,
          src: yam,
          title: "Yam and goat pepper soup",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
          category: "Food Items"
        },
        {
          id: 7,
          src: food,
          title: "Diet meal plan",
          text: "35,000 One off consultation fee, upon confirmation of payment by our finance team, a form will be shared to collect all relevant information about our client.",
          category: "Meal Plans"
        },
        {
          id: 8,
          src: yogurt,
          title: "Wechora Greek yogurt",
          text: "Unsweetened and Sweetened 500ML GREEK YOGHURT",
          category: "Beverages"
        },
        {
          id: 9,
          src: drink,
          title: "Drinking yogurt",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
          category: "Beverages"
        },
        {
          id: 10,
          src: smoothie,
          title: "Smoothies",
          text: "All flavors of smoothies of 500ml",
          category: "Food Items"
        },
        {
          id: 11,
          src: gift,
          title: "Surprise birthday gift box",
          text: "The item in the package includes Fresh Flower, Cake, Chocolates, 3 pack of wechora Greek Yogurt, a 1.5 litre bow of Sea Food Okra Soup or any preferred Soup, e.t.c",
          category: "Gift Boxes"
        },
        {
          id: 12,
          src: Package,
          title: "Special gift box",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam!",
          category: "Gift Boxes"
        },
      ];

      const filteredLinks = links.filter(link => {
        return selectedCategory === 'All' || link.category === selectedCategory;
      });


  return (
    <>
    <div name="menu" className='flex flex-col items-center gap-12 p-12'>
        <div className='flex flex-col font-bold text-4xl items-center'>
            <h1><span className='text-orange-600 '>Packages</span> That <span className='text-yellow-300'>Always</span> Make</h1>
            <h1>You Ask For <span className='text-orange-600 '>More</span></h1>
        </div>
        <div className='flex gap-3 text-gray-400'>
            <button 
            className={` px-3 border-2 border-gray-400 rounded-full 
            bg-${selectedCategory === 'All' ? 'orange-600' : 'transparent'}
            ${selectedCategory === 'All' ? 'text-white' : 'text-gray-400'}`}
            onClick={() => setSelectedCategory('All')}>All
            </button>
            <button 
            className={` px-3 border-2 border-gray-400 rounded-full 
            bg-${selectedCategory === 'Food Items' ? 'orange-600' : 'transparent'}
            ${selectedCategory === 'Food Items' ? 'text-white' : 'text-gray-400'}`}
            onClick={() => setSelectedCategory('Food Items')}>Food Items
            </button>
            <button 
            className={`border-2 px-3 border-gray-400 rounded-full 
            bg-${selectedCategory === 'Meal Plans' ? 'orange-600' : 'transparent'}
            ${selectedCategory === 'Meal Plans' ? 'text-white' : 'text-gray-400'}`} 
            onClick={() => setSelectedCategory('Meal Plans')}>Meal Plans
            </button>
            <button 
            className={`border-2 px-3 border-gray-400 rounded-full 
            bg-${selectedCategory === 'Gift Boxes' ? 'orange-600' : 'transparent'}
            ${selectedCategory === 'Gift Boxes' ? 'text-white' : 'text-gray-400'}`} 
            onClick={() => setSelectedCategory('Gift Boxes')}>Gift Boxes
            </button>
            <button 
            className={`border-2 px-3 border-gray-400 rounded-full 
            bg-${selectedCategory === 'Beverages' ? 'orange-600' : 'transparent'}
            ${selectedCategory === 'Beverages' ? 'text-white' : 'text-gray-400'}`} 
            onClick={() => setSelectedCategory('Beverages')}>Beverages
            </button>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 sm:px-0'>
            {
            filteredLinks.map(({ id, src, title, text}) => (
                <div key={id} className=' relative flex flex-col items-center rounded-3xl bg-gradient-to-t from-orange-100 via-white to-white my-3 px-3'>
                    <div>
                        <div className='relative bg-gradient-to-b from-orange-600/70 via-white to-white   w-64 h-64 rounded-full'></div>
                        <img src={src} alt='products' className=' absolute border-8 border-white top-4 right-7 -translate-x-1 rounded-full h-56 w-56' />
                    </div>
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
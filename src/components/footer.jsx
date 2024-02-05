import React from 'react'

const Footer = () => {
  return (
    <div className='p-12 flex flex-col'>
        <div className='flex gap-10 justify-around'>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-2 text-2xl font-bold'>
                <p className='text-orange-600'>Wechora</p> <p>Foods</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur  </p>
            </div>
            <div className='flex flex-col gap-5'>
                <h2 className='text-orange-600 font-semibold text-2xl'>About Us</h2>
                <h3>Contact Us</h3>
                <h3>Company</h3>
            </div>
            <div className='flex flex-col gap-5'>
                <h2 className='text-orange-600 font-semibold text-2xl'>Get in touch</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div className=''>
                    <input 
                    type="text"
                    className='border-2 text-gray-400 rounded-full px-3'
                    placeholder='Email' />
                    <button className=' mx-5 rounded-full text-white bg-orange-600 my-5 px-3 py-2'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='flex items-center text-center place-self-center pt-10'>
            <p>Copyright © 2023 Wechora Foods.</p>
        </div>
    </div>
  )
}

export default Footer
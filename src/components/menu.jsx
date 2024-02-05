import React from 'react'

const Menu = () => {
  return (
    <div className='flex flex-col items-center p-12'>
        <div className='flex flex-col font-bold text-4xl items-center'>
            <h1><span className='text-orange-600 '>Packages</span> that <span className='text-yellow-300'>always</span> make</h1>
            <h1>you Ask For <span className='text-orange-600 '>More</span></h1>
        </div>
        <div className='flex gap-3 text-gray-400'>
            <button className='bg-orange-600 rounded-full'>Food Items</button>
            <button className='border-2 border-gray-400 rounded-full'>Meal Plans</button>
            <button className='border-2 border-gray-400 rounded-full'>Gift Boxes</button>
            <button className='border-2 border-gray-400 rounded-full'>Beverages</button>
        </div>
    </div>
  )
}

export default Menu
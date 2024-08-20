import React, { useState } from 'react';
import { BsBoxArrowUpRight, BsPower } from 'react-icons/bs';

function AdminFitness() {
    const items = [
        {
            "img": 'https://lh3.googleusercontent.com/p/AF1QipOp8qpqfcqy9Q7cBgnxsQrcIEn3w2kW68jgpRwB=s1360-w1360-h1020',
            "name": "i-Fitness Gym",
            "link": "https://fitnessfactory.ng/",
        },
        {
            "img": 'https://lh3.googleusercontent.com/p/AF1QipMJhKg3m9AtxVl3rtMsHLTN7baVV4kdyA8rveuo=s1360-w1360-h1020',
            "name": "Fitness Factory Ltd",
            "link": "https://fitnessfactory.ng/",
        },
        {
            "img": 'https://lh3.googleusercontent.com/p/AF1QipOp8qpqfcqy9Q7cBgnxsQrcIEn3w2kW68jgpRwB=s1360-w1360-h1020',
            "name": "i-Fitness Gym",
            "link": "https://fitnessfactory.ng/",
        },
        {
            "img": 'https://lh3.googleusercontent.com/p/AF1QipMJhKg3m9AtxVl3rtMsHLTN7baVV4kdyA8rveuo=s1360-w1360-h1020',
            "name": "Fitness Factory Ltd",
            "link": "https://fitnessfactory.ng/",
        },
        {
            "img": 'https://lh3.googleusercontent.com/p/AF1QipOp8qpqfcqy9Q7cBgnxsQrcIEn3w2kW68jgpRwB=s1360-w1360-h1020',
            "name": "i-Fitness Gym",
            "link": "https://fitnessfactory.ng/",
        },
        {
            "img": 'https://lh3.googleusercontent.com/p/AF1QipMJhKg3m9AtxVl3rtMsHLTN7baVV4kdyA8rveuo=s1360-w1360-h1020',
            "name": "Fitness Factory Ltd",
            "link": "https://fitnessfactory.ng/",
        },
        {
            "img": 'https://lh3.googleusercontent.com/p/AF1QipOp8qpqfcqy9Q7cBgnxsQrcIEn3w2kW68jgpRwB=s1360-w1360-h1020',
            "name": "i-Fitness Gym",
            "link": "https://fitnessfactory.ng/",
        },
        {
            "img": 'https://lh3.googleusercontent.com/p/AF1QipMJhKg3m9AtxVl3rtMsHLTN7baVV4kdyA8rveuo=s1360-w1360-h1020',
            "name": "Fitness Factory Ltd",
            "link": "https://fitnessfactory.ng/",
        },
        {
            "img": 'https://lh3.googleusercontent.com/p/AF1QipOp8qpqfcqy9Q7cBgnxsQrcIEn3w2kW68jgpRwB=s1360-w1360-h1020',
            "name": "i-Fitness Gym",
            "link": "https://fitnessfactory.ng/",
        },
        {
            "img": 'https://lh3.googleusercontent.com/p/AF1QipMJhKg3m9AtxVl3rtMsHLTN7baVV4kdyA8rveuo=s1360-w1360-h1020',
            "name": "Fitness Factory Ltd",
            "link": "https://fitnessfactory.ng/",
        },
    ];

    const [visibleItems, setVisibleItems] = useState(4);
    const [isEnabled, setIsEnabled] = useState(true)
    const totalItems = items.length;

    const showMoreItems = () => {
        setVisibleItems(totalItems);
    };

    const handleDisable = () => {
        setIsEnabled(!isEnabled);
    };

    return (
        <div className='bg-white'>
            <span className='bg-gray-100 rounded-r-md text-gray-400'>Fitness Centers:</span>
            <div className='grid grid-cols-2 md:grid-cols-4 my-5 gap-2 mx-2'>
                {items.slice(0, visibleItems).map((item, index) => (
                    <div key={index} className='bg-gray-200 rounded-md'>
                        <div>
                            <img src={item.img} alt="" className='w-full rounded-md' />
                        </div>
                        <div className='m-2'>
                            <span className='font-bold'>{item.name}</span>
                            <div className='flex justify-between'>
                                <a href={item.link} className='flex gap-1 items-center text-blue-500 hover:text-blue-700' target="_blank" rel="noopener noreferrer">
                                    <h4>Visit</h4>
                                    <BsBoxArrowUpRight />
                                </a>
                                <button className='bg-blue-500 px-2'>
                                    <BsPower/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleItems < totalItems && (
                <button 
                    onClick={showMoreItems} 
                    className='text-blue-500 hover:text-blue-700 block mx-auto mt-4'
                >
                    See More
                </button>
            )}
        </div>
    );
}

export default AdminFitness;
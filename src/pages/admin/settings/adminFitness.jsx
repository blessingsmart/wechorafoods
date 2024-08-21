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
    const [showDisabledItem, setShowDisabledItem] = useState(false);
    const [hiddenItems, setHiddenItems] = useState(Array(items.length).fill(false));
    const totalItems = items.length;

    const showMoreItems = () => {
        setVisibleItems(totalItems);
    };
    const showLessItems = () => {
        setVisibleItems(4);
    };

    const handleDisable = (index) => {
        const updatedHiddenItems = [...hiddenItems];
        updatedHiddenItems[index] = true;
        setHiddenItems(updatedHiddenItems);
    };
    const handleEnable = (index) => {
        const updatedHiddenItems = [...hiddenItems];
        updatedHiddenItems[index] = false;
        setHiddenItems(updatedHiddenItems);
    };

    const showDisabledItemsButton = () => {
        setShowDisabledItem(!showDisabledItem);
    }

    return (
        <>
            <div className='bg-white mb-5'>
                <span className='bg-gray-100 rounded-r-md text-gray-400'>Fitness Centers:</span>
                <div className='grid grid-cols-2 md:grid-cols-4 my-5 gap-2 mx-2'>
                    {items.slice(0, visibleItems).map((item, index) => (
                        <div key={index} className={ hiddenItems[index] ? 'blur-0' : 'bg-gray-200 rounded-md'}>
                            <div>
                                <img src={item.img} alt="" className={hiddenItems[index] ? 'blur-md' : 'w-full rounded-md'}/>
                            </div>
                            <div className='m-2'>
                                <span className='font-bold'>{item.name}</span>
                                <div className='flex justify-between'>
                                    <a href={item.link} className={hiddenItems[index] ? 'flex gap-1 blur-sm' : 'flex gap-1 items-center text-blue-500 hover:text-blue-700'}>
                                        <h4>Visit</h4>
                                        <BsBoxArrowUpRight />
                                    </a>
                                    <div className='flex gap-2'>
                                        <button className={hiddenItems[index] ? 'blur-sm' : 'bg-blue-500 rounded-full px-2'} onClick={() => handleDisable(index)}>
                                            Disable
                                        </button>
                                        <button className={hiddenItems[index] ? 'bg-blue-500 rounded-full px-2' : 'blur-sm'} onClick={() => handleEnable(index)}>
                                            Enable
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleItems < totalItems ? (
                    <button 
                        onClick={showMoreItems} 
                        className='text-blue-500 hover:text-blue-700 block mx-auto mt-4'
                    >
                        See More
                    </button>
                ) : (
                    <button 
                        onClick={showLessItems} 
                        className='text-blue-500 hover:text-blue-700 block mx-auto mt-4'
                    >
                        See Less
                    </button>
                )}

            </div>
        </>
    );
}

export default AdminFitness;
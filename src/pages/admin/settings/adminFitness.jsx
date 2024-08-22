import React, { useState } from 'react';
import { BsBoxArrowUpRight, BsBroadcast, BsGeoAlt } from 'react-icons/bs';

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

    return (
        <>
            <div className='bg-white mb-5'>
                <span className='bg-gray-100 rounded-r-md text-gray-400'>Fitness Centers:</span>
                <div className='my-5 gap-2 mx-2'>
                    {items.slice(0, visibleItems).map((item, index) => (
                        <div key={index} className={ hiddenItems[index] ? 'bg-gray-200 rounded-md blur-0' : 'bg-gray-200 rounded-md'}>
                            <div className='flex m-[6px] pt-[4px] gap-1'>
                                <div className='text-center rounded-md w-1/2'>
                                    <div className={ hiddenItems[index] ? 'bg-white pt-3 blur-md' : 'bg-white pt-3'}>
                                        <h1 className='md:text-7xl text-xl font-bold'>OWN YOUR STRENGHT, OWN YOU</h1>
                                        <div className='flex justify-center items-center md:gap-4 gap-2 md:my-5 my-2 mx-2'>
                                            <button className='bg-black text-white font-bold md:px-4 px-1 py-2 mb-2 rounded-full md:text-sm text-[5px]'>START YOUR JOURNEY</button>
                                            <div className='flex gap-1'>
                                                <p><BsBroadcast/></p>
                                                <p className='md:text-xs text-[5px] font-black mt-[1px]'>LUXURY FITNESS EXPERIENCE</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-1 mb-2'>
                                        <div className='flex bg-pink-200 w-2/3 rounded-md'>
                                            <img src={item.img} alt="" className={ hiddenItems[index] ? 'mx-2 py-2 w-2/5 rounded-md blur-md' : 'mx-2 py-2 w-2/5 rounded-md'}/>
                                            <div className='w-3/5  py-2'>
                                                <div className='flex md:justify-between md:gap-5'>
                                                    <div className='w-1/2'>
                                                        <span className='md:text-xs sm:text-[9px] text-[5px] font-black'>{item.name}</span>
                                                        <p className={ hiddenItems[index] ? 'md:text-xs sm:text-[7px] text-[4px] mt-2 blur-md' : 'md:text-xs sm:text-[7px] text-[4px] mt-2'}>CONTACT US & RISE STRONGER</p>
                                                    </div>
                                                    <div className={ hiddenItems[index] ? 'w-2/3 blur-md' : 'w-2/3'}>
                                                        <p className='md:text-xs sm:text-[7px] text-[5px] font-bold w-1/2'>12034 FITNESS LN, LAGOS ISLAND</p>
                                                        <p className='text-sm text-black mt-1'><BsGeoAlt/></p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-between m-[2px] '>
                                                    <a href={item.link} className={hiddenItems[index] ? 'flex gap-1 items-center text-blue-500 hover:text-blue-700 md:text-xs sm:text-[7px] text-[5px] w-1/3 blur-md' : 'flex gap-1 items-center text-blue-500 hover:text-blue-700 md:text-xs sm:text-[7px] text-[5px] w-1/3'}>
                                                            <h4>Visit</h4>
                                                            <BsBoxArrowUpRight />
                                                    </a>
                                                    <button className={hiddenItems[index] ? 'hidden' : 'bg-orange-400 rounded-full px-2 md:text-xs sm:text-[7px] text-[5px] w-1/2'} onClick={() => handleDisable(index)}>
                                                        Disable
                                                    </button>
                                                    <button className={hiddenItems[index] ? 'bg-blue-500 rounded-full px-2 md:text-xs sm:text-[7px] text-[5px] w-1/2' : 'hidden'} onClick={() => handleEnable(index)}>
                                                        Enable
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={hiddenItems[index] ? 'w-1/3 md:text-xs sm:text-[9px] text-[5px] bg-white rounded-md font-bold blur-md' : 'w-1/3 md:text-xs sm:text-[9px] text-[5px] bg-white rounded-md font-bold'}>
                                            <h1 className='underline py-2 font-black'>SERVICES</h1>
                                            <ul className=''>
                                                <li className=''>BOXING RING</li>
                                                <li className=''>FOOTBALL COURT</li>
                                                <li className=''>JUICE BAR</li>
                                                <li className=''>PERSONAL TRAINERS</li>
                                                <li className=''>LOCKERS</li>
                                                <li className=''>FREE PARKING</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <img src={item.img} alt="" className={hiddenItems[index] ? 'w-1/2 rounded-md blur-md' : 'w-1/2 rounded-md'}/>
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
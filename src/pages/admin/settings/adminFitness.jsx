import React, { useEffect, useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function AdminFitness() {
    const [onBoardItems, setOnBoardItems] = useState([]); // Initialize as an array
    const [visibleItems, setVisibleItems] = useState(4);
    const [hiddenItems, setHiddenItems] = useState([]);

    const showMoreItems = () => {
        setVisibleItems(onBoardItems.length);
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

    useEffect(() => {
        fetch("https://serverside.wechorafoods.com/api/onBoardFitness", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            const fitnessArray = Array.isArray(data) ? data : [data]; // Convert object to array if necessary
            setOnBoardItems(fitnessArray); // Set the state with the array
            setHiddenItems(Array(fitnessArray.length).fill(false)); // Initialize hidden items array
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <div className='bg-white mb-5'>
            <span className='bg-gray-100 rounded-r-md text-gray-400'>Fitness Centers:</span>
            <div className='flex justify-end  mr-2'>
                <Link to="/add-fitness" className='bg-blue-500 text-end flex px-2 py-1 rounded-md text-white font-bold hover:scale-105 duration-200'><span className='mt-[2px]'><BsPlus/></span><span>Add New</span></Link>
            </div>
            <div className='w-[95%] my-5 gap-2 mx-auto overflow-auto'>
                <table className='table-fixed'>
                    <thead>
                        <tr className="bg-gray-200">
                            <th className='md:px-4 px-2 py-2 text-center truncate'>Name</th>
                            <th className='md:px-4 px-2 py-2 text-center truncate'>Address</th>
                            <th className='md:px-4 px-2 py-2 text-center truncate'>Contact</th>
                            <th className='md:px-4 px-2 py-2 text-center truncate'>Email</th>
                            <th className='md:px-4 px-2 py-2 text-center truncate'>Website</th>
                            <th className='md:px-4 px-2 py-2 text-center truncate'>Instagram</th>
                            <th className='md:px-4 px-2 py-2 text-center truncate'>Facebook</th>
                            <th className='md:px-4 px-2 py-2 text-center truncate'>Logo</th>
                            <th className='md:px-4 px-2 py-2 text-center truncate'>Enable/Disable</th>
                        </tr>
                    </thead>
                    <tbody>
                        {onBoardItems.slice(0, visibleItems).map((item, index) => (
                            <tr key={index} className={hiddenItems[index] ? 'bg-gray-200 rounded-md blur-0' : 'bg-gray-200 rounded-md'}>
                                <td className='md:px-4 px-2 py-2 text-center md:text-xs sm:text-[9px] text-[5px] truncate'>{item.fitnessName}</td>
                                <td className={hiddenItems[index] ? 'md:px-4 px-2 py-2 text-center md:text-xs text-[9px] blur-sm truncate' : 'md:px-4 px-2 py-2 text-center md:text-xs text-[9px] truncate'}>{item.fitnessAddress}</td>
                                <td className={hiddenItems[index] ? 'md:px-4 px-2 py-2 text-center md:text-xs text-[9px] blur-sm truncate' : 'md:px-4 px-2 py-2 text-center md:text-xs text-[9px] truncate'}>{item.fitnessContact}</td>
                                <td className={hiddenItems[index] ? 'md:px-4 px-2 py-2 text-center md:text-xs text-[9px] blur-sm truncate' : 'md:px-4 px-2 py-2 text-center md:text-xs text-[9px] truncate'}>{item.fitnessEmail}</td>
                                <td className={hiddenItems[index] ? 'md:px-4 px-2 py-2 text-center md:text-xs text-[9px] blur-sm truncate' : 'md:px-4 px-2 py-2 text-center md:text-xs text-[9px] truncate'}>{item.fitnessWebsite}</td>
                                <td className={hiddenItems[index] ? 'md:px-4 px-2 py-2 text-center md:text-xs text-[9px] blur-sm truncate' : 'md:px-4 px-2 py-2 text-center md:text-xs text-[9px] truncate'}>{item.fitnessInstagram}</td>
                                <td className={hiddenItems[index] ? 'md:px-4 px-2 py-2 text-center md:text-xs text-[9px] blur-sm truncate' : 'md:px-4 px-2 py-2 text-center md:text-xs text-[9px] truncate'}>{item.fitnessFacebook}</td>
                                <td className='md:px-4 px-2 py-2 text-center'><img src={`https://serverside.wechorafoods.com/assets/${item.fitnessImage}`} alt="" className={hiddenItems[index] ? 'w-2/3 mx-2 py-2 rounded-md blur-md' : 'w-2/3 mx-2 py-2 rounded-md'} /></td>
                                <td className='md:px-4 px-2 py-2 text-center'>
                                    {hiddenItems[index] ? (
                                        <button className='bg-blue-500 rounded-full px-2 md:text-xs text-[9px]' onClick={() => handleEnable(index)}>Enable</button>
                                    ) : (
                                        <button className='bg-orange-400 rounded-full px-2 md:text-xs text-[9px]' onClick={() => handleDisable(index)}>Disable</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {visibleItems < onBoardItems.length ? (
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
    );
}

export default AdminFitness;

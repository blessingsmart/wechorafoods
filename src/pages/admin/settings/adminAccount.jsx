import React from 'react';
import { BsPerson } from "react-icons/bs";

function AdminAccount() {
  return (
    <>
        <div className='md:mb-10 my-5 md:text-sm text-[10px]'>
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white table-spacing'>
                    <thead>
                        <tr>
                            <th className='px-3 md:px-10 py-4 border-b text-gray-600 tracking-wider'>Name</th>
                            <th className='px-3 md:px-10 py-4 border-b text-gray-600 tracking-wider'>Email</th>
                            <th className='px-3 md:px-10 py-4 border-b text-gray-600 tracking-wider'>Client</th>
                            <th className='px-3 md:px-10 py-4 border-b text-gray-600 tracking-wider'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r'>aliogochukwu@gmail.com</td>
                            <td className='px-3 md:px-10 py-4 border-r'>Lazarus</td>
                            <td className='px-3 md:px-10 py-4'>Staff</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r'>aliogochukwu@gmail.com</td>
                            <td className='px-3 md:px-10 py-4 border-r'>Lazarus</td>
                            <td className='px-3 md:px-10 py-4'>Staff</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r'>aliogochukwu@gmail.com</td>
                            <td className='px-3 md:px-10 py-4 border-r'>Lazarus</td>
                            <td className='px-3 md:px-10 py-4'>Staff</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r'>aliogochukwu@gmail.com</td>
                            <td className='px-3 md:px-10 py-4 border-r'>Lazarus</td>
                            <td className='px-3 md:px-10 py-4'>Staff</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r'>aliogochukwu@gmail.com</td>
                            <td className='px-3 md:px-10 py-4 border-r'>Lazarus</td>
                            <td className='px-3 md:px-10 py-4'>Staff</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default AdminAccount;
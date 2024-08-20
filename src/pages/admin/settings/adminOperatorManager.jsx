import React from 'react';
import { BsPerson, BsPencil, BsTrash } from "react-icons/bs";

function AdminAccount() {
  return (
    <>
        <div className='md:mb-10 md:text-sm text-[10px]'>
            <div className='bg-white md:mb-10 mb-5'>
                <div className='flex flex-col text-gray-400 p-2'>
                    <div className='flex gap-2'>
                        <p className='mt-2'>Name</p>
                        <input 
                            type="text"
                            name='status'
                            className='border my-2 rounded-md'
                        />
                    </div>
                    <div className='flex gap-2'>
                        <p className='mt-2'>Role</p>
                        <input 
                            type="text"
                            name='status'
                            className='border my-2 rounded-md'
                        />
                    </div>
                </div>
                <div className='flex flex-col items-end pb-2 px-2'>
                    <button className='bg-orange-300 py-[2px] px-2 rounded-md hover:scale-105 duration-200'>
                        Search
                    </button>
                </div>
            </div>
            <div className='overflow-x-auto  mb-5'>
                <table className='min-w-full bg-white table-spacing'>
                    <thead>
                        <tr className='bg-orange-400'>
                            <th className='px-3 md:px-10 py-4 border-b text-gray-600'>Name</th>
                            <th className='px-3 md:px-10 py-4 border-b text-gray-600'>Role</th>
                            <th className='px-3 md:px-10 py-4 border-b text-gray-600'>Edit</th>
                            <th className='px-3 md:px-10 py-4 border-b text-gray-600'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Admin</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Editor</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Accountant</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Secretary</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Cashier</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Cashier</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Cashier</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Cashier</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Cashier</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Cashier</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Cashier</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Cashier</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Cashier</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Cashier</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                        <tr className='border-b'>
                            <td className='px-3 md:px-10 flex py-4 border-r justify-center'><span><BsPerson/></span><span>Ali</span></td>
                            <td className='px-3 md:px-10 py-4 border-r text-center'>Cashier</td>
                            <td className='px-3 md:px-10 py-4 border-r bg-green-400'><BsPencil/></td>
                            <td className='px-3 md:px-10 py-4 bg-red-500'><BsTrash/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default AdminAccount;
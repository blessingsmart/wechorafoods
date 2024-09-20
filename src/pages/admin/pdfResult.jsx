import React from 'react'

function pdfResult() {
  return (
    <>
        <div className='my-10 border-2 border-black bg-gray-400 mx-5 hidden'>
            <div className='md:basis-1/4 mt-10'>
                <div className='flex justify-center items-center'>
                    <h1 className='font-black mt-2 uppercase text-xl'>Selected answer</h1>
                </div>
                <table className='w-full mt-10'>
                    <thead className='border-b border-black uppercase'>
                        <tr>
                            <th className='px-2 py-2 text-center truncate'>Question</th>
                            <th className='px-2 py-2 text-center truncate'>Selected Answer</th>
                            <th className='px-2 py-2 text-center truncate'>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        <tr>
                            <td className='px-2 py-2 text-center truncate border-r'>Q: </td>
                            <td className='px-2 py-2 text-center truncate border-r'></td>
                            
                            <td className='text-green-900 px-2 py-2 text-center truncate border-r'>Correct Answer!</td>
                            <td className='text-red-700 px-2 py-2 text-center truncate border-r'>Wrong Answer!</td>
                        
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default pdfResult
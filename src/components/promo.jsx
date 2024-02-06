import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const Promo = () => {
  return (
    <div className="bg-yellow-500 my-20 py-20 flex flex-col gap-10">
        <div className='flex flex-col place-self-end text-5xl px-10 items-center text-white font-extrabold'>
        <p>Are you ready to order with </p>
        <p>the best deals?</p>
        </div>
        <button className='w-fit flex items-center place-self-center bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-3 rounded-lg text-white font-bold'>
        PROCEED TO ORDER <MdKeyboardArrowRight size={25} />
        </button>
    </div>
  )
}

export default Promo
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import  food1 from "..//assets/food1.jpg";

const Promo = () => {
  return (
    <div className=" my-20 relative">
        <img src={food1} alt=""
                className='' />
        <div className=' absolute md:top-40 md:right-0 top-10 right-0 flex flex-col gap-5'>
            <p className='place-self-end text-lg md:text-5xl px-10 items-center text-white font-extrabold text-center' >Are you ready to order with
                <br />the best deals?</p>
            <a href="https://www.whatsapp.com/catalog/2349043743730/?app_absent=0"
                className='place-self-center'>
                <button className='w-fit flex items-center text-sm md:text-xl  bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-3 rounded-lg text-white font-bold'>
                PROCEED TO ORDER <MdKeyboardArrowRight size={25} />
                </button>
            </a>
        </div>
    </div>
  )
}

export default Promo
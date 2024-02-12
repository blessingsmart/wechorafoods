import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import  food  from "../assets/food.png";
import { CgProfile } from "react-icons/cg";


const Testimonial = () => {
  useEffect(() => {

    const splide2 = new Splide('#splide2', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 1,
      breakpoints: {
        640: {
          perPage: 1,},
        },
      autoScroll: {
        speed: 1,
      },
    }).mount({ AutoScroll });

    return () => {
        // Destroy Splide instances on unmount to prevent memory leaks.
        splide2.destroy();
    };

  }, []); 

  return (
    <div className='md:p-16 bg-orange-600  '>
        <h1 className='text-4xl font-bold text-center text-white mb-10'>Reviews</h1>
        <div name="Testimonials" id="splide2" className="splide md:p-16 md:mx-20 bg-white rounded-lg text-black font-medium text-xs md:text-sm">
          <div className="splide__track">
              <ul className="splide__list"> 
              <li className="splide__slide px-5">
                  <div className='flex flex-col gap-2 items-center px-20'> 
                      <CgProfile className='sm:h-20 sm:w-20 w-12 h-12' />
                      <p>"Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals so it’s worth checking them out before you book. Highly recommended." </p>
                          <div className='flex flex-col text-xs'>
                          <p className='text-orange-600 font-bold text-lg'>Usman Abubakar</p>
                          </div>
                  </div>
              </li>
              </ul>
          </div>
        </div>
    </div>
  );
};

export default Testimonial;
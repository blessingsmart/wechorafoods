import React from "react";
import SideNav from '../../components/Dashboard/sideNav';
import NavBar from '../../components/Dashboard/navbar';
import SmoothieSelector from '../../components/Dashboard/smoothieselector'; // Import the SmoothieSelector component

function Smoothie() {
  return (
    <>
      <div className="flex">
        <div className="basis-1/5">
          <SideNav />
        </div>
        <div className="basis-4/5 ">
          <NavBar />
          <div className="">
            <h1 className="font-bold text-4xl p-8 text-center text-orange-600">Build Your Perfect Smoothie!</h1>
            <div className="p-8 flex flex-col gap-5">
              <p><span className='text-white bg-orange-600 rounded-full py-2 px-3'>Fruity</span> Select your favorite fruits to create a custom blend! {"(see options below)"}</p>
              <p><span className='text-white bg-orange-600 rounded-full py-2 px-3'>Classic Smoothie</span> Pick a pre-designed smoothie recipe for a quick and delicious choice. {"(see options below)"}</p>
            </div>
            <h1 className="font-bold text-xl p-8 text-center "><span className='text-orange-600 '>Choose</span> Your <span className='text-yellow-300'>Base</span></h1>
            <div className="flex flex-col justify-center items-center">
              <div className="rounded-full p-2 bg-orange-600/20 w-fit justify-center flex items-center">
                <button className="rounded-full py-2 px-5 hover:text-white hover:bg-orange-600 ">Fruity</button>
                <button className="rounded-full py-2 px-5 hover:text-white hover:bg-orange-600">Classic Smoothie</button>
              </div>
              <SmoothieSelector /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Smoothie;

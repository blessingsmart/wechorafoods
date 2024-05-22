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
        <div className="basis-4/5">
          <NavBar />
          <h1 className="font-bold text-4xl p-8 text-center">Welcome to Wechora Smoothie Selector</h1>
          <SmoothieSelector /> {/* Render the SmoothieSelector component */}
        </div>
      </div>
    </>
  );
}

export default Smoothie;

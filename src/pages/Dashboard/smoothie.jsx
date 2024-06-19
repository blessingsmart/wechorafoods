import React, { useState } from "react";
import SideNav from '../../components/Dashboard/sideNav';
import NavBar from '../../components/Dashboard/navbar';
import SmoothieSelector from '../../components/Dashboard/smoothieselector'; // Import the SmoothieSelector component
import {weightGainSmoothies} from './data'
import {weightLossSmoothies} from './data'
import {weightGainFruit} from './data'
import {weightLossFruit} from './data'
import {weightGainParfait} from './data'
import {weightLossParfait} from './data'
import Footer from "../../components/footer";

const Smoothie = ()=>{
  const [addItem, setAddItem] = useState([]);

  const handleAddItem = (newItem) => {
    setAddItem({id: newItem.id, title: newItem.title});

    const itemExist = addItem.find((exist) => exist.id === newItem.id);
    if(itemExist){
      setAddItem(
        addItem.map((item) => 
          item.id === newItem.id ? { ...item, title: newItem.title } : item
      ));
    } else{
      setAddItem([...addItem, newItem]);
    }
  };

  const handleRemoveItem = (removeItem) => {
    const itemExist = addItem.find((exist) => exist.id === removeItem.id);

    if(itemExist){
      const updatedItem = addItem.filter((item) => item.id !== removeItem.id);
      setAddItem(updatedItem);
    } else {
      console.log("Item does not exist in the list");
    }
  };

return (
  <>
    <div className="flex">
      <div className="basis-1/5">
        <SideNav />
      </div>
      <div className="basis-4/5 ">
        <NavBar />
        <div className="">
          <h1 className="font-bold text-6xl p-8 text-center text-orange-600">Build Your Perfect Smoothie!</h1>
          <div className="">
            <div className="p-10 flex gap-5">
            
              <div className="basis-5/7 h-screen flex flex-col">
                <div className="">
                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>MENU</h4>
                </div>
                <div className="flex-1 overflow-y-auto border-y border-gray-600">
                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Weight Gain Smoothies</h4>  
                  <div className="flex md:flex-row grid md:grid-cols-3 gap-2 py-4 bg-orange-200 px-5">
                    {weightGainSmoothies.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>

                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Weight Loss Smoothies</h4>
                  <div className="flex md:flex-row grid md:grid-cols-3 gap-2 py-4 bg-orange-200 px-5">
                    {weightLossSmoothies.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>

                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Weight Gain Fruit Juice</h4>
                  <div className="flex md:flex-row grid md:grid-cols-3 gap-2 py-4 bg-orange-200 px-5">
                    {weightGainFruit.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>

                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Weight Loss Fruit Juice</h4>
                  <div className="flex md:flex-row grid md:grid-cols-3 gap-2 py-4 bg-orange-200 px-5">
                    {weightLossFruit.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>

                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Weight Gain Parfait</h4>
                  <div className="flex md:flex-row grid md:grid-cols-3 gap-2 py-4 bg-orange-200 px-5">
                    {weightGainParfait.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>

                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Weight Loss Parfait</h4>
                  <div className="flex md:flex-row grid md:grid-cols-3 gap-2 py-4 bg-orange-200 px-5">
                    {weightLossParfait.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-screen flex flex-col">
                <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Custom Tray</h4>
                <div className="basis-2/7 flex-1 overflow-y-auto p-5 select-none boxes border border-gray-600 rounded-md md:min-w-64">
                  { addItem.map((item) => (
                    <div key={item.id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 text-white py-5 px-5 my-3 rounded-full text-center" onClick={()=> handleRemoveItem(item)}>
                      {item.title}
                    </div>
                  ))}
                  
                </div>
                <div className="flex justify-between px-2">
                    <button className="bg-red-300 text-black hover:text-white font-semibold px-8 py-2 mt-5 rounded-md hover:bg-red-600 hover:scale-105 duration-200">Clear</button>
                    <button className="bg-red-300 text-black hover:text-white font-semibold px-8 py-2 mt-5 rounded-md hover:bg-green-600 hover:scale-105 duration-200">Pay</button>
                </div>
              </div>
            </div>
          </div>
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
    <div className="border-t border-gray-600 mt-64">
      < Footer />
    </div>
  </>
);
}

export default Smoothie;
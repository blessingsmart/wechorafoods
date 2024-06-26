import React, { useState } from "react";
import SideNav from '../../components/Dashboard/sideNav';
import NavBar from '../../components/Dashboard/navbar';
import SmoothieSelector from '../../components/Dashboard/smoothieselector';
import {typeOfSmoothie} from './data';
import {typeOfFruitJuice} from './data';
import {typeOfParfait} from './data';
import {weightGainSmoothies} from './data';
import {weightLossSmoothies} from './data';
import {weightGainFruit} from './data';
import {weightLossFruit} from './data';
import {weightGainParfait} from './data';
import {weightLossParfait} from './data';
import { ingredients } from './data';
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai'

const Smoothie = ()=>{
  const [addItem, setAddItem] = useState([]);

  const handleAddItem = (newItem) => {
    const itemExist = addItem.find(item => item.id === newItem.id);

    if(itemExist){
      setAddItem(prevItems =>
        prevItems.map(item => 
          item.id === newItem.id ? { ...item, title: newItem.title } : item
      ));
    } else{
      const newItemObject = ingredients.find(item => item.id === newItem.id);
      if (newItemObject) {
          setAddItem(prevItems => [...prevItems, newItemObject]);
      }
    }
  };

  const handleRemoveItem = (clickedItem, subItemTitle) => {
    const itemExist = addItem.find(item => item.id === clickedItem.id);

    if(itemExist){
      const updatedTitles = itemExist.title.filter(title => title !== subItemTitle);
      if(updatedTitles.length > 0){
        setAddItem(prevItems =>
          prevItems.map(item =>
            item.id === clickedItem.id ? {...item, title: updatedTitles} : item
      ));
      } else {
        setAddItem(prevItems =>
          prevItems.filter(item => item.id !== clickedItem.id)
        );
      }
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
          <h1 className="font-bold md:text-6xl text-2xl md:p-8 pt-4 text-center text-orange-600">Build Your Perfect Smoothie!</h1>
          <div className="">
            <div className="md:p-10 flex gap-5">
            
              <div className="basis-5/7 h-screen flex flex-col md:mt-10 mt-8">
                <div className="">
                  <h4 className='py-2 px-3 md:text-2xl font-bold'>MENU</h4>
                </div>
                <div className="flex-1 overflow-y-auto border border-gray-600">
                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Smoothies</h4>  
                  <div className="flex md:flex-row grid md:grid-cols-3 gap-2 py-4 bg-orange-200 px-5">
                    {typeOfSmoothie.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 text-xs font-bold my-5 p-2 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>

                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Fruit Juices</h4>  
                  <div className="flex md:flex-row grid md:grid-cols-3 gap-2 py-4 bg-orange-200 px-5">
                    {typeOfFruitJuice.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>

                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Parfait</h4>  
                  <div className="flex md:flex-row grid md:grid-cols-3 gap-2 py-4 bg-orange-200 px-5">
                    {typeOfParfait.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>

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
              <div className="h-screen flex flex-col md:mt-10 mt-8">
                <h4 className='py-2 px-3 md:text-2xl font-bold'>Custom Tray</h4>
                <div className="basis-2/7 flex-1 overflow-y-auto px-3 select-none boxes border border-gray-600 rounded-md md:min-w-64">
                {addItem.map(item => (
                    <div key={item.id} className="text-white py-2 my-3 rounded-md">
                        {item.title.map((subItemTitle, index) => (
                            <ul key={`${item.id}-${index}`} className='flex justify-between p-2'>
                              <li className="basis-4/5 bg-gray-600 p-2 rounded-full text-center">{subItemTitle[0]} <span>{subItemTitle[1]}</span></li><span className="p-2 text-red-900" onClick={() => handleRemoveItem(item, subItemTitle)}><AiOutlineClose size='20'/></span>
                            </ul>
                        ))}
                    </div>
                ))}
                  
                </div>
                <div className="flex justify-between px-2">
                    <button className="bg-red-300 text-black hover:text-white font-semibold px-8 py-2 mt-5 rounded-md hover:bg-red-600 hover:scale-105 duration-200">Clear</button>
                    <button className="bg-red-300 text-black hover:text-white font-semibold px-8 py-2 mt-5 rounded-md hover:bg-green-600 hover:scale-105 duration-200">Pay</button>
                </div>
                <Link to="/test" className="bg-red-300 text-center text-black hover:text-white font-semibold px-8 py-2 mt-5 rounded-md hover:bg-green-600 hover:scale-105 duration-200">Test</Link>
              </div>
            </div>
          </div>

          <div className="">
            <div className="p-10">
              <div className="border-b border-gray-600">
                  <h4 className='text-center py-2 px-3 mt-10 text-2xl font-bold'>CATEGORIZATION</h4>
              </div>
              <div className="basis-5/7 md:h-[165vh] h-[350vh] flex flex-col md:flex-row md:grid md:grid-cols-3 gap-10 border border-gray-600 p-5">
                <div className="flex-1 overflow-y-auto">
                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Weight Gain Smoothies</h4>  
                  <div className="flex md:flex-row grid md:grid-cols-1 grid-cols-2 gap-2 py-4 bg-orange-200 px-5">
                    {weightGainSmoothies.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto">
                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Weight Loss Smoothies</h4>  
                  <div className="flex md:flex-row grid md:grid-cols-1 grid-cols-2 gap-2 py-4 bg-orange-200 px-5">
                    {weightLossSmoothies.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Weight Gain Fruits</h4>  
                  <div className="flex md:flex-row grid md:grid-cols-1 grid-cols-2 gap-2 py-4 bg-orange-200 px-5">
                    {weightGainFruit.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Weight Loss Fruits</h4>  
                  <div className="flex md:flex-row grid md:grid-cols-1 grid-cols-2 gap-2 py-4 bg-orange-200 px-5">
                    {weightLossFruit.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Weight Gain Parfait</h4>  
                  <div className="flex md:flex-row grid md:grid-cols-1 grid-cols-2 gap-2 py-4 bg-orange-200 px-5">
                    {weightGainParfait.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Weight Loss Parfait</h4>  
                  <div className="flex md:flex-row grid md:grid-cols-1 grid-cols-2 gap-2 py-4 bg-orange-200 px-5">
                    {weightLossParfait.map(({id, title}) => (
                      <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                      {title}
                    </button>
                    ))}
                  </div>
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
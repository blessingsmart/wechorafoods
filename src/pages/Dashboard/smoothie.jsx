import React, { useState } from "react";
import SideNav from '../../components/Dashboard/sideNav';
import NavBar from '../../components/Dashboard/navbar';
import SmoothieSelector from '../../components/Dashboard/smoothieselector'; // Import the SmoothieSelector component

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

  const links = [
    {
      id: 1,
      title: "Smoothie"
    },
    {
      id: 2,
      title: "Parfait"
    },
    {
      id: 3,
      title: "Fish Pie"
    },
    {
      id: 4,
      title: "Meat Pie"
    },
    {
      id: 5,
      title: "Shawama"
    },
    {
      id: 6,
      title: "Spring Roll"
    },
    {
      id: 7,
      title: "Burger"
    },
    {
      id: 8,
      title: "Pizza"
    },
  ];
  
  const smoothies = [
    {
      id: 9,
      title: "Berry smoothie",
    },
    {
      id: 10,
      title: "Crio bru smoothie",
    },
    {
      id: 11,
      title: "Tropical tumeric smoothie",
    },
    {
      id: 12,
      title: "Avocado smoothie",
    },
    {
      id: 13,
      title: "Banana peach smoothie",
    },
    {
      id: 14,
      title: "Kiwi cucumber smoothie",
    },
    {
      id: 15,
      title: "Berry beet smoothie",
    },
    {
      id: 16,
      title: "Strawberry mango green smoothie",
    },
    {
      id: 17,
      title: "Kale recharge smoothie", // Corrected id values for unique keys
    },
    {
      id: 18,
      title: "Pineapple weight smoothie",
    },
    {
      id: 19,
      title: "Caramel cashew smoothie",
    },
    {
      id: 20,
      title: "Green spirulina smoothie",
    },
    {
      id: 21,
      title: "Avocado peach weightloss smoothie",
    },
    {
      id: 22,
      title: "Spinach avocado smoothie",
    },
    {
      id: 23,
      title: "Apple cinnamon smoothie",
    },
  ];

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
          <div className="p-10 flex gap-5">

            <div className="basis-5/7">
              <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Fruit Categories</h4>  
              <div className="flex md:flex-row grid md:grid-cols-3 gap-2 pt-4 bg-orange-200 px-5">
                {links.map(({id, title}) => (
                  <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                  {title}
                </button>
                ))}
              </div>
              <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Smoothies Categories</h4>
              <div className="flex md:flex-row grid md:grid-cols-3 gap-2 pt-4 bg-orange-200 px-5">
                {smoothies.map(({id, title}) => (
                  <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 p-5 select-none text-white rounded-full" onClick={()=> handleAddItem({id, title})}>
                  {title}
                </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className='py-2 px-3 mt-10 text-2xl font-bold'>Custom Tray</h4>
              <div className="basis-2/7 p-5 select-none boxes bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 rounded-md md:min-w-64">
                { addItem.map((item) => (
                  <div key={item.id} className="bg-gradient-to-t from-orange-600 via-orange-300 to-orange-200 py-5 px-10 my-3 rounded-full text-center" onClick={()=> handleRemoveItem(item)}>
                  {item.title}
                  </div>
                ))}
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
  </>
);
}

export default Smoothie;
import React, { useState } from 'react';

const fruits = [
  { name: 'Apple', price: 1000 },
  { name: 'Banana', price: 500 },
  { name: 'Strawberry', price: 800 },
  { name: 'Mango', price: 500 },
];

function SmoothieSelector() {
  const [selectedFruits, setSelectedFruits] = useState({});

  const handleFruitChange = (fruit, quantity) => {
    setSelectedFruits(prevState => ({
      ...prevState,
      [fruit]: quantity,
    }));
  };

  const calculateTotalPrice = () => {
    return Object.entries(selectedFruits).reduce((total, [fruit, quantity]) => {
      const fruitData = fruits.find(f => f.name === fruit);
      return total + fruitData.price * quantity;
    }, 0);
  };

  return (
    <div className='text-black flex gap-5' >
      <div className='rounded-3xl bg-gray-100 border p-5'>
        <h1 className='font-bold my-5'>Pick Your Fruits</h1>
        <div className='flex gap-10'>
          <div>
            {fruits.map(fruit => (
              <div key={fruit.name}>
                <label>{fruit.name} (#{fruit.price} each) </label>
              </div>
            ))}
          </div>
          <div>
            {fruits.map(fruit => (
              <div key={fruit.name}>
                <input
                  type="number"
                  min="0"
                  value={selectedFruits[fruit.name] || 0}
                  onChange={e => handleFruitChange(fruit.name, Number(e.target.value))}
                  className='w-20 '
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between items-center'>
        <h2 className='bg-gray-100 rounded-full px-3 py-1 font-bold'>Total Price</h2>
        <h2 className='text-3xl font-bold'> #{calculateTotalPrice().toFixed(2)}</h2>
        <button className='border border-orange-600 hover:bg-orange-600 hover:text-white w-full rounded-2xl py-3 font-bold text-orange-600'>Order</button>
      </div>
    </div>
  );
}

export default SmoothieSelector;

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
    <div className='text-black'>
      <h1>Pick Your Fruits</h1>
      {fruits.map(fruit => (
        <div key={fruit.name}>
          <label>{fruit.name} (#{fruit.price} each): </label>
          <input
            type="number"
            min="0"
            value={selectedFruits[fruit.name] || 0}
            onChange={e => handleFruitChange(fruit.name, Number(e.target.value))}
          />
        </div>
      ))}
      <h2>Total Price: #{calculateTotalPrice().toFixed(2)}</h2>
    </div>
  );
}

export default SmoothieSelector;

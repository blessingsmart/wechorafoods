import React, { useState } from 'react'

function TEE() {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

  return (
    <div className='bg-orange-600 text-center'>
        <h1 className='font-bold pt-10 text-3xl'>TDEE Calculator</h1>
        <p className='bg-orange-900 text-white mt-5 mx-[20%] rounded-lg font-bold'>Enter Your Informatiods</p>
        <div className='bg-orange-900 mt-5 mx-[20%] py-2'>
          <div>
            <ul className='flex justify-center item font-bold'>
              <li className='bg-orange-600 mx-5 px-10 rounded-lg'><a href="#">cm</a></li>
              <li className='bg-orange-600 mx-5 px-10 rounded-lg'><a href="#">kg</a></li>
            </ul>
          </div>
          <div className='mt-8'>
            <label htmlFor="age"className='text-xl mx-5 font-bold'>
              <span>Age</span>
            </label>
            <input 
              type="number"
              name='age'
              placeholder='Enter Your age'
              className='border border-gray-600 mx-5'
            />
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              Option 1
            </label>

            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              Option 2
            </label>

            <label>
              <input
                type="radio"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              Option 3
            </label>

            <p>Selected option: {selectedOption}</p>
          </div>
        </div>
    </div>
  )
}

export default TEE;
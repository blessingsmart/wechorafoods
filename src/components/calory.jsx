import React, { useState, useEffect } from "react";
import axios from "axios";
import  wechora_logo from "..//assets/wechora_logo.png";
import  calory_logo from "..//assets/calory_logo.jpg";
import  brisk_logo from "..//assets/brisk_logo.jpg";
import  gym_walkout from "..//assets/gym_walkout.jpg";
import  jogging_logo from "..//assets/jogging_logo.png";
import  power_yoga from "..//assets/power_yoga.png";
import { Link } from "react-router-dom";

function Calory() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // Define your API query here
    const query = encodeURIComponent(searchInput);
    axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
      headers: {
        'X-Api-Key': 'seMwjmUADAPENhjZO+hQ8Q==5NGkyMDEynw0BN1R'
      },
    })
    .then((response) => {
      setAPIData(response.data);
      setFilteredResults(response.data); // Assuming you want to display all data initially
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, [searchInput]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  return (
    <div style={{ padding: 20 }}>
      <img className="mx-[38%] pb-3 rounded-[30%] w-[20%]" src={wechora_logo} alt="" />
      <form onSubmit={(e) => { e.preventDefault(); searchItems(searchInput); }}>
        <div className="flex m-4 justify-center">
          <input
            className="w-[60%] text-gray-600 border border-gray-600 rounded-md p-2"
            label="calory"
            name="calory"
            type="text"
            autoComplete="off"
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter Food Name"
            id="calory"
          />
          <button type="submit" className="mx-4 bg-[#f45906] rounded-md border p-2 text-xl">Find calories</button>
        </div>
      </form>
      {filteredResults.map((item, index) => (
        <div key={index}>
          <div>
            <h1 className="mx-2 justify-center md-4 flex mt-5 md:text-5xl sm:text-3xl text-xl">
              <span className="capitalize mx-3 font-bold">{item.name}</span> has a total of <strong className="mx-4">({item.calories}) calories</strong>
              <img className="w-10 m" src={calory_logo} alt="/" />
            </h1>

            <div>
              <div className="md:mx-[28%] sm:mx-[2%] md-4 flex mt-5">
                This food contains a high amount of sodium. High sodium causes severe retention.
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-200 mx-[10%] max-w-[1200px] item-center my-5 rounded-md pb-3">
              <h2 className="text-black md:text-4xl sm:text-2xl text-xl font-bold mt-[5%] pt-5 text-center">Nutritional values</h2>
              <ul>
                <li className="text-black mx-[8%] mt-[5%] bg-[#f45906] rounded-md border p-2 text-xl">Serving Size Per 100/Grams<span className="float-end"></span></li>
                <li className="text-black mx-[8%] mt-[5%]">Carbonhydrate: <span className="float-end">{item.carbohydrates_total_g}</span></li>
                <li className="text-black mx-[8%] mt-4">Cholesterol: <span className="float-end">{item.cholesterol_mg}</span></li>
                <li className="text-black mx-[8%] mt-4">Saturated Fat: <span className="float-end">{item.fat_saturated_g}</span></li>
                <li className="text-black mx-[8%] mt-4">Total Fat: <span className="float-end">{item.fat_total_g}</span></li>
                <li className="text-black mx-[8%] mt-4">Fibre Content: <span className="float-end">{item.fiber_g}</span></li>
                <li className="text-black mx-[8%] mt-4">Potassium: <span className="float-end">{item.potassium_mg}</span></li>
                <li className="text-black mx-[8%] mt-4">Protein: <span className="float-end">{item.protein_g}</span></li>
                <li className="text-black mx-[8%] mt-4">Sodium: <span className="float-end">{item.sodium_mg}</span></li>
                <li className="text-black mx-[8%] mt-4 mb-5">Sugar: <span className="float-end">{item.sugar_g}</span></li>
              </ul>
            </div>
            <div className="bg-gray-200 max-w-[1200px] mx-[10%] p-2">
              <h4 className="bg-[#f45906] border rounded-md text-black text-center mx-[8%] md:text-3xl sm:text-xl text-xl">To burn <span className="font-bold">{item.calories}</span> calories you will have to</h4>
              <div className="flex mx-[10%] mt-10">
                <div>
                  <img src={jogging_logo} alt="" />
                </div>
                <div className="text-black px-[11%]">
                  <h5 className="font-bold">Jog</h5>
                  <p>You will have to jog for <strong>{Math.round((item.calories / 229) * 60)}</strong> minutes</p>
                </div>
              </div>

              <div className="flex mx-[10%] mt-10">
                <div>
                  <img src={power_yoga} alt="" />
                </div>
                <div className="text-black px-[11%]">
                  <h5 className="font-bold">Do Power Yoga</h5>
                  <p>You will have to do Power Yoga for <strong>{Math.round((item.calories / 223) * 60)}</strong> minutes</p>
                </div>
              </div>

              <div className="flex mx-[10%] mt-10">
                <div>
                  <img src={gym_walkout} alt="" />
                </div>
                <div className="text-black px-[10%]">
                  <h5 className="font-bold">Get a Gym Workout</h5>
                  <p>You will have to lift weights for <strong>{Math.round((item.calories / 484) * 60)}</strong> minutes</p>
                </div>
              </div>

              <div className="flex mx-[10%] mt-10">
                <div>
                  <img src={brisk_logo} alt="" />
                </div>
                <div className="text-black px-[10%]">
                  <h5 className="font-bold">Go for a Brisk Walk</h5>
                  <p>You will have to brisk walk for <strong>{Math.round((item.calories / 294) * 60)}</strong> minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Calory;
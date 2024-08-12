import React, { useEffect, useState } from 'react';
import AdminSideNav from '../../components/admin/adminSideNav';
import AdminNavbar from '../../components/admin/adminNavbar';
import Plotly from 'plotly.js-dist-min';
import { BsPerson } from "react-icons/bs";


function AdminDashboard() {
    const token = localStorage.getItem('token');

useEffect(() => {
    fetch("https://serverside.wechorafoods.com/api/dashboard", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Unauth');
        }
        return response.json();  // Parse the JSON response
    })
    .then((userData) => {
        if (userData && userData.bmiAvg) {
            // Log the data structure to verify it's correct
            console.log("BMI Average Data:", userData.bmiAvg.differentAverage);
            const totalValues = {
                protein: 0,
                fats: 0,
                energy: 0,
                minerals: 0,
                vitamins: 0
            };

            userData.bmiAvg.differentAverage.values.forEach(value => {
                totalValues.protein += value.protein;
                totalValues.fats += value.fats;
                totalValues.energy += value.energy;
                totalValues.minerals += value.minerals;
                totalValues.vitamins += value.vitamins;
              });

              const data = [
                {
                x: userData.bmiAvg.differentAverage.labels,
                y: [totalValues.protein, totalValues.fats, totalValues.energy, totalValues.minerals, totalValues.vitamins],
                type: 'bar',
                marker: {
                    color: '#fb923c',
                }
            }];

            const layout = {
                title: 'Nutritional Composition Bar Chart',
                xaxis: {
                    title: 'Nutrients',
                },
                yaxis: {
                    title: 'Values',
                },
                bargap: 0.95,
                
            };

            Plotly.newPlot('chart1', data, layout);
        }
    })
    .catch((error) => console.log('Error Fetching user data:', error));
}, []);  // Run the effect only once on mount

  return (
    <>
        <div className='flex max-w-screen'>
            <div className='basis-[10%]'>
                <AdminSideNav />
            </div>
            <div className='basis-[90%] rounded-l-xl bg-gray-200 mt-0 md:mt-2'>
                <AdminNavbar />
                <div className='md:mt-10 my-5 rounded-md  md:w-2/3 m-4'>
                    <div className="content-section">
                        <div className="row mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <div id="chart1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white my-5'>
                        <div className='flex justify-between p-3'>
                            <span className=''>
                                <h1>Personal Trainer</h1>
                            </span>
                            <span className='bg-orange-300 px-2 rounded-sm'>
                                <h3>Add Trainer</h3>
                            </span>
                        </div>
                        <div className='overflow-x-auto'>
                            <table className='min-w-full bg-white table-spacing'>
                                <thead>
                                    <tr className='bg-gray-200 px-2'>
                                        <th className='px-3 md:px-10 py-4 text-gray-600 tracking-wider'>Name</th>
                                        <th className='px-3 md:px-10 py-4 text-gray-600 tracking-wider'>Email</th>
                                        <th className='px-3 md:px-10 py-4 text-gray-600 tracking-wider'>Client</th>
                                        <th className='px-3 md:px-10 py-4 text-gray-600 tracking-wider'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='px-3 md:px-10 flex py-4'><span><BsPerson/></span><span>Ali</span></td>
                                        <td className='px-3 md:px-10 py-4'>aliogochukwu@gmail.com</td>
                                        <td className='px-3 md:px-10 py-4'>Lazarus</td>
                                        <td className='px-3 md:px-10 py-4'>Staff</td>
                                    </tr>
                                    <tr>
                                        <td className='px-3 md:px-10 flex py-4'><span><BsPerson/></span><span>Ali</span></td>
                                        <td className='px-3 md:px-10 py-4'>aliogochukwu@gmail.com</td>
                                        <td className='px-3 md:px-10 py-4'>Lazarus</td>
                                        <td className='px-3 md:px-10 py-4'>Staff</td>
                                    </tr>
                                    <tr>
                                        <td className='px-3 md:px-10 flex py-4'><span><BsPerson/></span><span>Ali</span></td>
                                        <td className='px-3 md:px-10 py-4'>aliogochukwu@gmail.com</td>
                                        <td className='px-3 md:px-10 py-4'>Lazarus</td>
                                        <td className='px-3 md:px-10 py-4'>Staff</td>
                                    </tr>
                                    <tr>
                                        <td className='px-3 md:px-10 flex py-4'><span><BsPerson/></span><span>Ali</span></td>
                                        <td className='px-3 md:px-10 py-4'>aliogochukwu@gmail.com</td>
                                        <td className='px-3 md:px-10 py-4'>Lazarus</td>
                                        <td className='px-3 md:px-10 py-4'>Staff</td>
                                    </tr>
                                    <tr>
                                        <td className='px-3 md:px-10 flex py-4'><span><BsPerson/></span><span>Ali</span></td>
                                        <td className='px-3 md:px-10 py-4'>aliogochukwu@gmail.com</td>
                                        <td className='px-3 md:px-10 py-4'>Lazarus</td>
                                        <td className='px-3 md:px-10 py-4'>Staff</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3'>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminDashboard;
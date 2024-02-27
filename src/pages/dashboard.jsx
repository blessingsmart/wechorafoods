import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const history = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            history('/login'); // Redirect to login if token is not present
            return;
        }

        fetch('http://localhost:5000/api/dashboard', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Unauth');
            }
            return response.json();
        })
        .then((data) => setUserData(data))
        .catch((error) => console.error('Error fetching user data:', error));
    }, [history]);

    return (
        <main className="bg-orange-600 text-white md:h-screen flex flex-col items-center justify-center">
            {userData ? (
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Welcome, {userData.name}!</h1>
                    <p className="my-4">Your Basal Metabolic Rate (BMR) is {userData.bmr}.</p>
                    <p className="my-4">
                        Basal Metabolic Rate (BMR) is the number of calories your body needs to
                        maintain basic physiological functions while at rest. It represents the minimum
                        amount of energy required to keep your body functioning.
                    </p>
                    <p className="my-4">
                        To calculate your BMR, various factors such as age, gender, weight, and height
                        are taken into account. It is an important factor in determining your daily
                        caloric needs.
                    </p>
                    <p className="my-4">
                        To learn more about BMR and how it affects your health and fitness goals, check
                        out our <RouterLink to="/bmr-info">BMR information</RouterLink> page.
                    </p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
};

export default Dashboard;

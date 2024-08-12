import React, { useState } from 'react';
import { Link as RouterLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import  food from "..//assets/logo.png";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const history = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://serverside.wechorafoods.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data)
            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }
            localStorage.setItem('token', data.token);
            if(data.user.userType === "admin"){
                history('/adminDashboard'); // Redirect to adminDashboard after successful login
            }else{
                history('/dashboard'); // Redirect to dashboard after successful login
            }
        } catch (error) {
            setError(error.message);
        }
    };



    return (
        <main className="bg-orange-600 ">
            <div className="flex h-screen rounded-lg justify-center">
                <img
                    src={food}
                    alt="logo"
                    className="py-10 hidden md:block"
                />
            <section className="my-10 p-10 bg-white rounded-r-lg flex flex-col justify-center gap-5">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-center"
                >
                    <div className="w-full max-w-[30rem] grid grid-cols-1 gap-4 mb-6 md:mb-12">
                        <h1 className="text-orange-600 md:text-4xl text-2xl font-semibold">
                            Welcome Back
                        </h1>
                        <p className="text-black text-sm md:text-base font-normal">
                            Sign in to continue
                        </p>
                    </div>
                    <div className="w-full max-w-[30rem] grid grid-cols-1 gap-4">
                        <input
                            className="border border-gray-600 rounded-md p-2"
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            placeholder="Email..."
                            id="email"
                        />
                        <input
                            className="border border-gray-600 rounded-md p-2"
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password..."
                            id="current-password"
                            autoComplete="current-password"
                        />
                    </div>
                    <button
                        className="w-full mt-6  bg-orange-600 px-3 text-white rounded-full p-2"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="w-full  grid grid-cols-1 gap-4">
                        <h5 className="text-sm lg:text-lg font-medium">
                            Don{`'`}t have an Account?{" "}
                            <RouterLink className="text-gray-600 text-sm lg:text-lg font-bold" to="/signup">
                                Sign Up
                            </RouterLink>
                        </h5>
                    </div>
            </section>
            </div>
        </main>
    );
};

export default Login;
import { Link as RouterLink} from "react-router-dom";
import { useState } from "react";
import Popup from "../components/popup";
import Modal from "react-modal";
import  food from "..//assets/logo.png";

Modal.setAppElement("#root");

const BASE_URL = "https://severside-wechorafoods.com/";



const SignUp = () => {
    
        const [formData, setFormData] = useState({
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            confirm_password: "",
            gender: "",
            height: "",
            weight: "",
            age: "",
            activity_level: ""
        });

        const [isOpen, setIsOpen] = useState(false);
        const [message, setMessage] = useState("");
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!formData.firstname || !formData.firstname || !formData.username || !formData.email || !formData.password || !formData.confirm_password) {
                setMessage("Please fill in all fields.");
                setIsOpen(true);
                return;
            }
            try {
                const response = await fetch("https://serverside.wechorafoods.com/api/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    const data = await response.json();
                    setMessage("Signup successful!");
                    setIsOpen(true);
                } else {
                    const errorData = await response.json();
                    setMessage(errorData.message);
                    setIsOpen(true);
                }

            } catch (error) {
                setMessage("An error occurred. Please try again later.");
                setIsOpen(true);
            }
            
        };

        const closeModal = () => {
            setIsOpen(false);
        };
    
    
    return (
        <main className="bg-orange-600 text-white md:h-screen px-3 md:px-0 flex">
            <img src={food} alt="" className="hidden md:block" />
            <form onSubmit={handleSubmit} className="mx-auto  max-w-[60rem] mt-3 px-5">
                <div className="my-3 flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">WELCOME TO
                    <RouterLink to="/"> WECHORA FOODS</RouterLink> 
                    </h2>
                    <p className="">Register your account</p>
                </div>
                <div className="flex flex-col gap-5 my-5">
                    <div className="flex">
                        <div>
                            <h2>First Name</h2>
                            <input
                                value={formData.firstname}
                                onChange={handleChange}
                                label="Name"
                                name="firstname"
                                type="text"
                                placeholder=" First Name..."
                                className="text-black p-2 w-full border border-gray-600 rounded-md"
                            />
                        </div>
                        <div>
                            <h2>Surname</h2>
                            <input
                                value={formData.lastname}
                                onChange={handleChange}
                                label="Name"
                                name="lastname"
                                type="text"
                                placeholder="Surname Name..."
                                className="text-black p-2 w-full border border-gray-600 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <h2>Username</h2>
                            <input
                                value={formData.username}
                                onChange={handleChange}
                                label="Username"
                                name="username"
                                type="text"
                                placeholder="Username..."
                                className="text-black p-2 w-full border border-gray-600 rounded-md"
                            />
                        </div>
                        <div>
                            <h2>Gender</h2>
                            <select
                                value={formData.gender}
                                onChange={handleChange}
                                label="gender"
                                name="gender"
                                type="text"
                                placeholder="Gender..."
                                className="text-black p-2 w-full border border-gray-600 rounded-md"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        
                    </div>
                    <div>
                        <h2>Email</h2>
                        <input
                            value={formData.email}
                            onChange={handleChange}
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Email..."
                            className="text-black p-2 w-full border border-gray-600 rounded-md"
                        />
                    </div>
                    <div>
                        <h2>Activity Level</h2>
                        <select
                            value={formData.activity_level}
                            onChange={handleChange}
                            label="activity_level"
                            name="activity_level"
                            type="text"
                            placeholder="Activity_level..."
                            className="text-black p-2 w-full border border-gray-600 rounded-md"
                        >
                            <option value="sedentary">Sedentary (little or no exercise)</option>
                            <option value="lightlyActive">Lightly active (light exercise/sports 1-3 days/week)</option>
                            <option value="moderatelyActive">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                            <option value="veryActive">Very active (hard exercise/sports 6-7 days a week)</option>
                            <option value="extraActive">Extra active (very hard exercise & physical job or 2x training)</option>
                        </select>
                    </div>
                </div>
                {/* container for passwords */}
                <div className="w-full md:flex  md:flex-row grid grid-cols-2 justify-between gap-[5%] items-center">
                    <div className="flex items-center gap-1">
                        <h2>Height</h2>
                        <input
                            value={formData.height}
                            onChange={handleChange}
                            label="height"
                            name="height"
                            type="height"
                            placeholder="cm"
                            id="height"
                            className="text-black p-2 w-16 border border-gray-600 rounded-md mb-2"
                        />
                    </div>
                    <div className="flex items-center gap-1">
                        <h2>Weight</h2>
                        <input
                            value={formData.weight}
                            onChange={handleChange}
                            label=" weight"
                            name="weight"
                            type="weight"
                            placeholder="kg"
                            id="weight"
                            className="text-black p-2 w-16 border border-gray-600 rounded-md"
                        />
                    </div>
                    <div className="flex items-center gap-1">
                            <h2>Age</h2>
                            <input
                                value={formData.age}
                                onChange={handleChange}
                                label="age"
                                name="age"
                                type="age"
                                placeholder="age..."
                                className="text-black p-2 w-16 border border-gray-600 rounded-md"
                            />
                        </div>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-between gap-[5%] items-center">
                    <div className="w-full">
                        <h2>Password</h2>
                        <input
                            value={formData.password}
                            onChange={handleChange}
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Password..."
                            id="new-password"
                            autoComplete="new-password"
                            className="text-black p-2 w-full border border-gray-600 rounded-md mb-2"
                        />
                    </div>
                    <div className="w-full">
                        <h2>Confirm Password</h2>
                        <input
                            value={formData.confirm_password}
                            onChange={handleChange}
                            label=" Confirm Password"
                            name="confirm_password"
                            type="password"
                            autoComplete="new-password"
                            placeholder="Confirm Password..."
                            id="new_password"
                            className="text-black p-2 w-full border border-gray-600 rounded-md"
                        />
                    </div>
                </div>
                <button 
                    className="w-full mt-6  bg-white px-3 text-orange-600 rounded-full p-2"
                    type="submit">
                    Sign Up
                </button>
                <h5 className="my-4">
                    Have an Account?
                    <RouterLink to="/login">
                        {" "}
                        <span>Login</span>
                    </RouterLink>
                </h5>
            </form>
            <Popup isOpen={isOpen} onClose={closeModal} message={message} />
        </main>
    );
};

export default SignUp;
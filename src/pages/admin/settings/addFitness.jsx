import React, { useState } from 'react';
import Modal from 'react-modal';  // Import react-modal
import food from "../../../assets/logo.png";
import { BsPersonPlus, BsGeoAlt, BsFillTelephoneFill, BsEnvelope, BsGlobe, BsInstagram, BsFacebook, BsImage } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Popup from '../../../components/popup';

// Set the app element for react-modal
Modal.setAppElement('#root');

function AddFitness() {
    const [fitnessData, setFitnessData] = useState({
        fitnessName: "",
        fitnessAddress: "",
        fitnessContact: "",
        fitnessEmail: "",
        fitnessWebsite: "",
        fitnessInstagram: "",
        fitnessFacebook: "",
        fitnessImage: null, // Image should be null initially
    });

    const [message, setMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFitnessData({
            ...fitnessData,
            [name]: files ? files[0] : value, // Update file if present, otherwise update value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fitnessName, fitnessAddress, fitnessContact, fitnessEmail, fitnessWebsite, fitnessInstagram, fitnessFacebook, fitnessImage } = fitnessData;

        if (!fitnessName || !fitnessAddress || !fitnessContact || !fitnessEmail || !fitnessWebsite || !fitnessInstagram || !fitnessFacebook || !fitnessImage) {
            setMessage("Please fill in all fields");
            setIsOpen(true);
            return;
        }

        const formData = new FormData();
        Object.entries(fitnessData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            const response = await fetch("http://localhost:5000/api/fitness", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setMessage('Registration successful');
                setIsOpen(true);
                navigate("/settings");
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
        <>
            <div className='w-full bg-orange-600 h-full rounded-lg'>
                <div className='flex justify-center w-4/5 mx-auto'>
                    <img
                        src={food}
                        alt="logo"
                        className="md:basis-2/4 py-10 hidden md:block"
                    />
                    <div className='md:basis-2/4 md:px-0 px-5 my-10 py-10 bg-gray-200 rounded-r-lg flex flex-col justify-center gap-10'>
                        <h1 className='text-center uppercase text-2xl font-bold'>Register a new fitness center</h1>
                        <form onSubmit={handleSubmit} className="mx-auto w-full px-4">
                            <div>
                                <div className='md:flex md:justify-between md:gap-2'>
                                    <div className='basis-1/2 my-5'>
                                        <h2 className='md:basis-1/4'>Fitness Center</h2>
                                        <div className='md:basis-3/4 flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                            <BsPersonPlus className='mt-[3px]' />
                                            <input
                                                label="name"
                                                name="fitnessName"
                                                value={fitnessData.fitnessName}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Enter center name..."
                                                className="w-full border-none focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className='basis-1/2 my-5'>
                                        <h2 className='md:basis-1/4'>Address</h2>
                                        <div className='md:basis-3/4 flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                            <BsGeoAlt className='mt-[3px]' />
                                            <input
                                                label="address"
                                                name="fitnessAddress"
                                                value={fitnessData.fitnessAddress}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Enter address..."
                                                className="w-full border-none focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='my-5'>
                                        <h2 className='md:basis-1/4'>Contact</h2>
                                        <div className='md:basis-3/4 flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                            <BsFillTelephoneFill className='mt-[3px]' />
                                            <input
                                                label="contact"
                                                name="fitnessContact"
                                                value={fitnessData.fitnessContact}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Enter phone number..."
                                                className="w-full border-none focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className='my-5'>
                                        <h2 className='md:basis-1/4'>Email</h2>
                                        <div className='md:basis-3/4 flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                            <BsEnvelope className='mt-[3px]' />
                                            <input
                                                label="email"
                                                name="fitnessEmail"
                                                value={fitnessData.fitnessEmail}
                                                onChange={handleChange}
                                                type="email"
                                                placeholder="Enter email..."
                                                className="w-full border-none focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='my-5'>
                                        <h2 className='md:basis-1/4'>Website</h2>
                                        <div className='md:basis-3/4 flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                            <BsGlobe className='mt-[3px]' />
                                            <input
                                                label="website"
                                                name="fitnessWebsite"
                                                value={fitnessData.fitnessWebsite}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Add website..."
                                                className="w-full border-none focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className='my-5'>
                                        <h2 className='md:basis-1/4'>Instagram</h2>
                                        <div className='md:basis-3/4 flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                            <BsInstagram className='mt-[3px]' />
                                            <input
                                                label="instagram"
                                                name="fitnessInstagram"
                                                value={fitnessData.fitnessInstagram}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Add instagram..."
                                                className="w-full border-none focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='my-5'>
                                        <h2 className='md:basis-1/4'>Facebook</h2>
                                        <div className='md:basis-3/4 flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                            <BsFacebook className='mt-[3px]' />
                                            <input
                                                label="facebook"
                                                name="fitnessFacebook"
                                                value={fitnessData.fitnessFacebook}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Add facebook..."
                                                className="w-full border-none focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className='my-5'>
                                        <h2 className='md:basis-1/4'>Image</h2>
                                        <div className='md:basis-3/4 flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                            <BsImage className='mt-[3px]' />
                                            <input
                                                name="fitnessImage"
                                                onChange={handleChange}
                                                type="file"
                                                className="w-full border-none focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="w-full mt-6 bg-orange-600 px-3 text- rounded-full p-2"
                                type="submit">
                                Register Center
                            </button>
                        </form>
                        <Popup isOpen={isOpen} onClose={closeModal} message={message} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddFitness;

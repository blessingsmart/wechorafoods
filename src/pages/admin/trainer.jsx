import React, { useEffect, useState } from 'react';
import AdminSideNav from '../../components/admin/adminSideNav';
import AdminNavbar from '../../components/admin/adminNavbar';
import { NavFunctions } from '../../components/Dashboard/navFunctions';
import { BsPlus } from 'react-icons/bs';
import UploadVideo from '../../assets/sampleVideoUpload.mp4';
import food from "../../assets/logo.png";


function Trainer() {
    const { openSideNav, handleMenuClick } = NavFunctions();
    const [isUploadQuestion, setIsUploadQuestion] = useState(false);
    const [isUploadVideo, setIsUploadVideo] = useState(false);
    const [getQuestion, setGetQuestion] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState({});
    const [questionData, setQuestionData] = useState({
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
    });


    const handleUploadQuestion = () => {
        setIsUploadQuestion(!isUploadQuestion);
    };
    const handleUploadVideo = () => {
        setIsUploadVideo(!isUploadVideo);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setQuestionData({
            ...questionData,
            [name]: value,
        });
    };

{/**************************************************** Function for submit handling *************************************************************/}
    const handleSubmit = async(e) => {
        e.preventDefault()
        if(!questionData.question || !questionData.optionA || !questionData.optionB || !questionData.optionC || !questionData.optionD){
            alert('Fill in all fields')
            return
        }
        try{
            const response = await fetch("http://localhost:5000/api/trainingQuestion", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(questionData),
            })
            if(response.ok){
                const data = await response.json();
                alert(data.message || 'Question uploaded successfully');
                setIsUploadQuestion(false);
                setQuestionData({question: "", optionA: "", optionB: "", optionC: "", optionD: ""})
            }else{
                const errorData = await response.json();
                alert(errorData.message || 'Server error nn');
            }
        } catch (error) {
            console.log(error);
            alert('Network error. please try again later');

        }
    };

{/**************************************************** Function for fetching the data from database *************************************************************/}
    useEffect(() => {
        fetch("http://localhost:5000/api/getTrainingQuestion", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            if(!response.ok){
                throw new Error('Error fetching questions')
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const dataArray = Array.isArray(data) ? data : [data];
            setGetQuestion(dataArray)
        })
        .catch((error) => {
            console.log(error || 'Server error nn')
        })
    }, [])

{/**************************************************** Function for handling the answer checked button*************************************************************/}
    const handleCheckedAnswer = (questionId, answer) => {
        setSelectedAnswer((prevAnswer) => ({
            ...prevAnswer,
            [questionId]: answer
        })
    )}

  return (
    <>
        <div className='flex max-w-screen'>
            <div className={openSideNav ? 'md:block' : 'md:block hidden basis-[10%]'}>
                <AdminSideNav openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
            </div>
            <div className={openSideNav ? 'basis-[90%] rounded-l-xl bg-gray-200 mt-0 md:mt-2': 'basis-[100%] rounded-l-xl bg-gray-200 mt-0 md:mt-2'}>
                <AdminNavbar openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
                <div className='mx-5'>
                    <div className='flex justify-between pt-16'>
                        <button onClick={handleUploadVideo} className='bg-blue-500 text-end flex px-2 py-1 rounded-md text-white font-bold hover:scale-105 duration-200'><span className='mt-[2px]'><BsPlus/></span><span>Add Training</span></button>
                        <button onClick={handleUploadQuestion} className='bg-blue-500 text-end flex px-2 py-1 rounded-md text-white font-bold hover:scale-105 duration-200'><span className='mt-[2px]'><BsPlus/></span><span>Add Question</span></button>
                    </div>

{/**************************************************** Popup window for question upload *************************************************************/}
                    {isUploadQuestion && (
                        <div className='fixed flex items-center justify-center inset-20 z-20 bg-orange-500 h-screen top-0 left-0 right-0 bottom-0'>
                            <div className='flex justify-center w-4/5 mx-auto'>
                                <img
                                    src={food}
                                    alt="logo"
                                    className="md:basis-2/4 py-10 hidden md:block"
                                />
                                <div className='md:basis-2/4 md:px-0 px-5 my-10 py-10 bg-gray-200 rounded-r-lg flex flex-col justify-center gap-10'>
                                    <h1 className='text-center uppercase text-2xl font-bold'>Upload new question</h1>
                                    <form onSubmit={handleSubmit} className="mx-auto w-full px-4">
                                        <div>
                                            <div className='basis-1/2 my-5 text-center'>
                                                <h2 className='md:basis-1/4 uppercase'>Question</h2>
                                                <div className='md:basis-3/4 flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                                    <input
                                                        label="question"
                                                        value={questionData.question}
                                                        onChange={handleChange}
                                                        name="question"
                                                        type="text"
                                                        placeholder="Enter question..."
                                                        className="w-full border-none focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex justify-between gap-2'>
                                                <div className='basis-1/2 my-5 flex gap-1 justify-center'>
                                                    <h2 className='mt-2'>A.</h2>
                                                    <div className='flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                                        <input
                                                            label="optionA"
                                                            value={questionData.optionA}
                                                            onChange={handleChange}
                                                            name="optionA"
                                                            type="text"
                                                            placeholder="Enter option A..."
                                                            className="w-full border-none focus:outline-none"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='basis-1/2 my-5 flex gap-1 justify-center'>
                                                    <h2 className='mt-2'>B.</h2>
                                                    <div className='flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                                        <input
                                                            label="optionB"
                                                            value={questionData.optionB}
                                                            onChange={handleChange}
                                                            name="optionB"
                                                            type="text"
                                                            placeholder="Enter option B..."
                                                            className="w-full border-none focus:outline-none"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-between gap-2'>
                                                <div className='basis-1/2 my-5 flex gap-1 justify-center'>
                                                    <h2 className='mt-2'>C.</h2>
                                                    <div className='flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                                        <input
                                                            label="optionC"
                                                            value={questionData.optionC}
                                                            onChange={handleChange}
                                                            name="optionC"
                                                            type="text"
                                                            placeholder="Enter option C..."
                                                            className="w-full border-none focus:outline-none"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='basis-1/2 my-5 flex gap-1 justify-center'>
                                                    <h2 className='mt-2'>D.</h2>
                                                    <div className='flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                                        <input
                                                            label="optionD"
                                                            value={questionData.optionD}
                                                            onChange={handleChange}
                                                            name="optionD"
                                                            type="text"
                                                            placeholder="Enter option D..."
                                                            className="w-full border-none focus:outline-none"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="w-full mt-6 bg-orange-600 px-3 text- rounded-full p-2 hover:scale-105 duration-200"
                                            type="submit">
                                            Submit
                                        </button>
                                    </form>
                                    <div className='flex justify-end items-end mt-20'>
                                        <button onClick={handleUploadQuestion} className="mt-2 px-4 py-2 rounded-md bg-red-700 bg-opacity-50 mx-2 hover:scale-105 duration-200">close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

{/**************************************************** Popup window for video upload *************************************************************/}
                    {isUploadVideo && (
                        <div className='fixed flex items-center justify-center inset-20 z-20 bg-orange-500 h-screen top-0 left-0 right-0 bottom-0'>
                            <div className='flex justify-center w-4/5 mx-auto'>
                                <img
                                    src={food}
                                    alt="logo"
                                    className="md:basis-2/4 py-10 hidden md:block"
                                />
                                <div className='md:basis-2/4 md:px-0 px-5 my-10 py-10 bg-gray-200 rounded-r-lg flex flex-col justify-center gap-10'>
                                    <h1 className='text-center uppercase text-2xl font-bold'>Upload new video</h1>
                                    <form onSubmit={handleSubmit} className="mx-auto w-full px-4">
                                        <div>
                                            <div className='basis-1/2 my-5 text-center'>
                                                <h2 className='md:basis-1/4 uppercase'>Question</h2>
                                                <div className='md:basis-3/4 flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                                    <input
                                                        label="question"
                                                        value={questionData.question}
                                                        onChange={handleChange}
                                                        name="question"
                                                        type="text"
                                                        placeholder="Enter question..."
                                                        className="w-full border-none focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="w-full mt-6 bg-orange-600 px-3 text- rounded-full p-2 hover:scale-105 duration-200"
                                            type="submit">
                                            Submit
                                        </button>
                                    </form>
                                    <div className='flex justify-end items-end mt-20'>
                                        <button onClick={handleUploadVideo} className="mt-2 px-4 py-2 rounded-md bg-red-700 bg-opacity-50 mx-2 hover:scale-105 duration-200">close</button>
                                    </div>
                                </div>
                </div>
                        </div>
                    )}
                    <div className='flex gap-3'>
                        <div className='basis-2/3 mb-10'>
                            <div className="bg-black w-full md:h-[70vh] h-[45vh] flex mt-10">
                                <video className="w-full h-full p-5 object-cover" controls>
                                    <source src={UploadVideo} type="video/mp4" />
                                </video>
                            </div>
                            <h1 className='font-black mt-2 uppercase'>Performance Summary 1</h1>
                        </div>
                        <div className='basis-1/3'>
                            <div className='bg-orange-400 mt-10 rounded-t-md'>
                                <h1 className='font-black text-2xl mt-2 uppercase text-center'>Questions</h1>
                            </div>
                            <div className='border-2 border-gray-400 h-[80%]'>
                                {getQuestion.slice(0).map((item, index) =>(
                                    <div key={index} className='mx-4 mt-10'>
                                        <p className='flex gap-5 text-xs md:text-sm'>
                                            <span className='font-black'>{item._id}</span>
                                            <p>{item.question}</p>
                                        </p>
                                        <div className='my-3 text-[8px] md:text-xs mx-2 md:mx-8'>
                                            <p className='flex gap-3'>
                                                <input
                                                    type="radio"
                                                    name={`question_${index}`}
                                                    value="A"
                                                    onChange={() => handleCheckedAnswer(item._id, "A")}
                                                    checked={selectedAnswer[item._id] === "A"}
                                                />
                                                <span className='font-black'>a.</span>
                                                <p>{item.optionA}</p>
                                            </p>
                                            <p className='flex gap-3'>
                                                <input
                                                    type="radio"
                                                    name={`question_${index}`}
                                                    value="B"
                                                    onChange={() => handleCheckedAnswer(item._id, "B")}
                                                    checked={selectedAnswer[item._id] === "B"}
                                                />
                                                <span className='font-black'>b.</span>
                                                <p>{item.optionB}</p>
                                            </p>
                                            <p className='flex gap-3'>
                                                <input
                                                    type="radio"
                                                    name={`question_${index}`}
                                                    value="C"
                                                    onChange={() => handleCheckedAnswer(item._id, "C")}
                                                    checked={selectedAnswer[item._id] === "C"}
                                                />
                                                <span className='font-black'>c.</span>
                                                <p>{item.optionC}</p>
                                            </p>
                                            <p className='flex gap-3'>
                                                <input
                                                    type="radio"
                                                    name={`question_${index}`}
                                                    value="D"
                                                    onChange={() => handleCheckedAnswer(item._id, "D")}
                                                    checked={selectedAnswer[item._id] === "D"}
                                                />
                                                <span className='font-black'>d.</span>
                                                <p>{item.optionD}</p>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                <div>
                                    <h1>Selected Answer:</h1>
                                    <div>
                                        {Object.keys(selectedAnswer).map((questionId) => (
                                            <ul key={questionId}>
                                                <li>Question {questionId}: {selectedAnswer[questionId]}</li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-2/3 my-10 border-2 border-black bg-gray-400'>
                        <div className='flex justify-center items-center'>
                            <h1 className='font-black mt-2 uppercase text-xl'>Performance Summary 1</h1>
                        </div>
                        <div className='flex'>
                            <div className='basis-1/2 pt-14 px-2'>
                                <table className='md:text-xl'>
                                    <thead>
                                        <tr className='border-b border-black uppercase'>
                                            <th className='px-2 py-2 text-start truncate'>Division</th>
                                            <th className='px-2 py-2 text-star truncate'>Aggregate</th>
                                        </tr>
                                    </thead>
                                    <tbody className='border-b border-black'>
                                        <tr>
                                            <td className='px-2 py-2 text-start truncate border-r border-black'>total question</td>
                                            <td className='px-2 py-2 text-start truncate'>200</td>
                                        </tr>
                                        <tr>
                                            <td className='px-2 py-2 text-start truncate border-r border-black'>Successful:</td>
                                            <td className='px-2 py-2 text-start truncate'>70/200</td>
                                        </tr>
                                        <tr>
                                            <td className='px-2 py-2 text-start truncate border-r border-black'>Unsuccessful:</td>
                                            <td className='px-2 py-2 text-start truncate'>30/200</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='basis-1/2 pt-16 px-2'>
                                <div className='flex gap-3'>
                                    <div className='w-1/2'>
                                        <p className='font-black bg-gray-100 py-3 rounded-md md:text-xl text-sm text-center'>
                                            <span className='uppercase'>Score</span>
                                            <h4 className=''>200</h4>
                                        </p>
                                    </div>
                                    <div className='w-1/2'>
                                        <p className='font-black bg-gray-100 py-3 rounded-md md:text-xl text-sm text-center'>
                                            <span className='uppercase'>Score</span>
                                            <h4 className=''>200</h4>
                                        </p>
                                    </div>
                                </div>
                                <div className='py-5'>
                                    <p className='font-black bg-gray-100 py-3 rounded-md md:text-2xl text-xl text-center'>
                                        <span className='uppercase'>Score</span>
                                        <h4 className=''>200</h4>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Trainer;
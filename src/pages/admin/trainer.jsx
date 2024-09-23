import React, { useEffect, useRef, useState } from 'react';
import AdminSideNav from '../../components/admin/adminSideNav';
import AdminNavbar from '../../components/admin/adminNavbar';
import { NavFunctions } from '../../components/Dashboard/navFunctions';
import { BsPlus } from 'react-icons/bs';
import UploadVideo from '../../assets/sampleVideoUpload.mp4';
import food from "../../assets/logo.png";
import { BsDownload } from 'react-icons/bs';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom';

function Trainer() {
    const history = useNavigate();
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
        correctAnswer: "",
    });
    const [uploadVideo, setUploadVideo] = useState(null);
    const [getTotalScore, setGetTotalScore] = useState(0);

    // For handling quiz results submission
    const [resultData, setResultData] = useState({
        totalQuestions: 0,
        successful: 0,
        unsuccessful: 0,
    });

    const questionInputRef = useRef(null); // focusing the cursor on the first input box, indicating that you should fill the form

    // ************Calculations: Average, TotalScore ***********************************************************************
    const handleGetScores = () => {
        let score = 0;
        getQuestion.forEach((question) => {
            if (selectedAnswer[question._id] === question.correctAnswer) {
                score += 1; // Increment score for each correct answer
            }
        });
        setGetTotalScore(score);
    };

    const handleUploadQuestion = (option) => {
        setIsUploadQuestion(!isUploadQuestion);
        setQuestionData({ ...questionData, correctAnswer: option });
    };

    const handleUploadVideo = () => {
        setIsUploadVideo(!isUploadVideo);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuestionData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCorrectAnswer = (value) => {
        setQuestionData(prevData => ({
            ...prevData,
            correctAnswer: value
        }));
    };

    const handleCheckedAnswer = (questionId, answer) => {
        setSelectedAnswer((prevAnswer) => ({
            ...prevAnswer,
            [questionId]: answer
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!questionData.question || !questionData.optionA || !questionData.optionB || !questionData.optionC || !questionData.optionD || !questionData.correctAnswer) {
            alert('Fill in all fields');
            return;
        }
        try {
            const response = await fetch("http://localhost:5000/api/trainingQuestion", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(questionData),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message || 'Question uploaded successfully');
                setIsUploadQuestion(false);
                setQuestionData({
                    question: "",
                    optionA: "",
                    optionB: "",
                    optionC: "",
                    optionD: "",
                    correctAnswer: ""
                });
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Server error');
            }
        } catch (error) {
            console.log(error);
            alert('Network error. Please try again later');
        }
    };

    useEffect(() => {
        fetch("http://localhost:5000/api/getTrainingQuestion", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error fetching questions');
                }
                return response.json();
            })
            .then((data) => {
                const dataArray = Array.isArray(data) ? data : [data];
                setGetQuestion(dataArray);
            })
            .catch((error) => {
                console.log(error || 'Server error');
            });
    }, []);

    const handleVideoUpload = (e) => {
        setUploadVideo(e.target.files[0]);
    };

    const handleSubmitVideo = async (e) => {
        e.preventDefault();
        if (!uploadVideo) {
            alert('The form is empty');
            return;
        }

        const formData = new FormData();
        formData.append('video', uploadVideo);

        try {
            const response = await fetch("http://localhost:5000/api/video", {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const isVideo = await response.json();
                alert(isVideo.message || "Video uploaded successfully");
                setUploadVideo(null);
                e.target.reset(); // Reset the form fields, including the file input
            } else {
                const errorData = await response.json();
                alert(errorData.message || "Server error");
            }
        } catch (error) {
            console.log(error);
            alert("Network error. Please try again later");
        }
    };

    useEffect(() => {
        if (isUploadQuestion) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        if (isUploadQuestion && questionInputRef.current) {
            questionInputRef.current.focus();
        }
        return () => {
            document.body.style.overflow = 'auto'; // cleanup on component unmount
        };
    }, [isUploadQuestion]);
    

    // ************** Refactored handleSubmitResult ****************
    const handleSubmitResult = async () => {
        const score = getQuestion.length;
        const successful = (getTotalScore / score) * 2;
        const unsuccessful = 2 - successful;

        setResultData({
            score: score,
            successful: successful,
            unsuccessful: unsuccessful
        });

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                history('/login'); // Redirect to login if token is not present
                return;
            }
            const response = await fetch("http://localhost:5000/api/TestResult", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    successful: successful,
                    unsuccessful: unsuccessful,
                    score: score,
                }),
            });

            if (!response.ok) {
                throw new Error('Error submitting results');
            }

            const data = await response.json();
            console.log('Result saved:', data);
        } catch (error) {
            console.error('Error saving the result', error);
        }
    };

// ************ Converting test result to Pdf file ***********************************************************************
    const [textData, setTextData] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            history('/login'); // Replace history with navigate for React Router v6
            return;
        }
        fetch("http://localhost:5000/api/resultPDF", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Unauth');
            }
            return response.json();
        })
        .then((data) => {
            setTextData(data);
        })
        .catch((error) => {
            console.error('Error fetching the pdf file', error); // Fix typo
        });
    }, []);

    const generatePDFWithPDFLib = async () => {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([600, 400]);
    
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    
        // Define table positions and column widths
        const startX = 150;
        const startY = 300;
        const rowHeight = 25;
        const columnWidths = [150, 150]; // Adjust width for two columns: name and value
    
        // Define table data in a dictionary format (name-value pairs)
        const text = textData || {
            userId: "12345",
            successful: 10,
            unsuccessful: 5,
            score: 85,
        };
    
        const data = {
            "User ID": text.userId.toString(),
            "Successful": text.successful.toString(),
            "Unsuccessful": text.unsuccessful.toString(),
            "Score": text.score.toString(),
        };

        const title = "Test Performance Summary"; // Title content
        const titleFontSize = 18; // Font size for title
        const titleYPosition = startY + 30; // Position title above the table (adjust as needed)

        // Draw title
        page.drawText(title, {
            x: startX + 35, // Align with table's X position
            y: titleYPosition, // Set Y position above the table
            size: titleFontSize,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        });
    
        // Draw table headers (Name and Value)
        const headers = ["Name", "Value"];
        headers.forEach((header, i) => {
            page.drawText(header, {
                x: startX + i * columnWidths[i] + 5, // +5 for padding
                y: startY - 20, // Adjust Y for text positioning
                size: 20,
                font: timesRomanFont,
                color: rgb(0, 0, 0),
            });
        });
    
        // Draw border for headers (top, bottom, left, and right)
        page.drawRectangle({
            x: startX,
            y: startY - rowHeight,
            width: columnWidths.reduce((a, b) => a + b, 0),
            height: rowHeight,
            borderWidth: 1,
            borderColor: rgb(0, 0, 0),
        });
    
        // Draw table data (Name-Value pairs)
        let currentY = startY - rowHeight - 10; // Y position for data (below headers)
        Object.entries(data).forEach(([key, value], rowIndex) => {
            // Draw "Name" (key) column
            page.drawText(key, {
                x: startX + 5, // Padding for first column
                y: currentY - 12,
                size: 12,
                font: timesRomanFont,
                color: rgb(0, 0, 0),
            });
    
            // Draw "Value" column
            page.drawText(value, {
                x: startX + columnWidths[0] + 10, // Start after first column
                y: currentY - 10,
                size: 12,
                font: timesRomanFont,
                color: rgb(0, 0, 0),
            });
    
            // Draw full border around the current row (top, bottom, left, right)
            page.drawRectangle({
                x: startX,
                y: currentY - rowHeight + 10, // Adjust Y for row height
                width: columnWidths.reduce((a, b) => a + b, 0),
                height: rowHeight,
                borderWidth: 1,
                borderColor: rgb(0, 0, 0),
            });
    
            // Update Y position for the next row
            currentY -= rowHeight;
        });
    
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        saveAs(blob, 'tabular-text-with-borders.pdf');
    };
    
    
    

    const [isHidden, setIsHidden] = useState(false);

    const handleHidden = () => {
        setIsHidden(!isHidden);
    };

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
                                                        ref={questionInputRef}
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
                                            <div className='md:flex md:justify-between md:gap-2'>
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
                                                    <label className="flex items-center ml-2">
                                                        <input
                                                            type="checkbox"
                                                            name="correctAnswer"
                                                            value="A"
                                                            checked={questionData.correctAnswer === "A"}
                                                            onChange={() => handleCorrectAnswer("A")}
                                                        />
                                                        <span className='ml-1'>Correct</span>
                                                    </label>
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
                                                    <label className="flex items-center ml-2">
                                                        <input
                                                            type="checkbox"
                                                            name="correctAnswer"
                                                            value="B"
                                                            checked={questionData.correctAnswer === "B"}
                                                            onChange={() => handleCorrectAnswer("B")}
                                                        />
                                                        <span className='ml-1'>Correct</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className='md:flex md:justify-between md:gap-2'>
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
                                                    <label className="flex items-center ml-2">
                                                        <input
                                                            type="checkbox"
                                                            name="correctAnswer"
                                                            value="C"
                                                            checked={questionData.correctAnswer === "C"}
                                                            onChange={() => handleCorrectAnswer("C")}
                                                        />
                                                        <span className='ml-1'>Correct</span>
                                                    </label>
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
                                                    <label className="flex items-center ml-2">
                                                        <input
                                                            type="checkbox"
                                                            name="correctAnswer"
                                                            value="D"
                                                            checked={questionData.correctAnswer === "D"}
                                                            onChange={() => handleCorrectAnswer("D")}
                                                        />
                                                        <span className='ml-1'>Correct</span>
                                                    </label>
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
                                    <button
                                        onClick={handleUploadQuestion}
                                        className="mt-2 px-4 py-2 rounded-md bg-red-700 text-white mx-2 hover:scale-105 duration-200">
                                        Close
                                    </button>

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
                                    <form onSubmit={handleSubmitVideo} className="mx-auto w-full px-4">
                                        <div>
                                            <div className='basis-1/2 my-5 text-center'>
                                                <h2 className='md:basis-1/4 uppercase'>Video</h2>
                                                <div className='md:basis-3/4 flex gap-1 bg-white text-black p-2 border border-gray-600 rounded-md'>
                                                <input
                                                    onChange={handleVideoUpload}
                                                    name="video"
                                                    type="file"
                                                    accept="video/*"
                                                    className="w-full border-none focus:outline-none"
                                                />
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="w-full mt-6 bg-orange-600 px-3 text-white rounded-full p-2 hover:scale-105 duration-200"
                                            type="submit">
                                            Submit
                                        </button>
                                    </form>
                                    <div className='flex justify-end items-end mt-20'>
                                        <button
                                            onClick={handleUploadVideo}
                                            className="mt-2 px-4 py-2 rounded-md bg-red-700 text-white mx-2 hover:scale-105 duration-200">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='md:flex gap-3'>
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
                            <div className='border-2 border-gray-400 h-[56%] overflow-y-auto'>
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
                                <div className='flex justify-center'>
                                    <button onClick={handleSubmitResult} className='bg-blue-800 py-2 px-5  my-24 text-white rounded-full hover:scale-105 duration-200'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-5'>
                    <button onClick={generatePDFWithPDFLib} className='bg-gray-600 py-2 px-5 text-white rounded-md hover:scale-105 duration-200 flex gap-3 mx-5'><span>Download Result</span><BsDownload className='text-xl'/></button>
                    <button onClick={handleHidden} className='bg-blue-800 py-2 px-5 text-white rounded-md hover:scale-105 duration-200 flex gap-3 mx-5'>View result</button>
                </div>
                {isHidden ? (
                    <div className='my-10 border-2 border-black bg-gray-400 mx-5'>
                        <div className='flex justify-center items-center'>
                            <h1 className='font-black mt-2 uppercase text-xl'>Performance Summary 1</h1>
                        </div>
                        <div className='md:flex'>
                            <div className='basis-3/5 pt-14 px-2'>
                                <table className='md:text-xl w-full'>
                                    <thead>
                                        <tr className='border-b border-black uppercase'>
                                            <th className='px-2 py-2 text-start truncate'>Division</th>
                                            <th className='px-2 py-2 text-start truncate'>Aggregate</th>
                                        </tr>
                                    </thead>
                                    <tbody className='border-b border-black'>
                                        <tr>
                                            <td className='px-2 py-2 text-start truncate border-r border-black'>Total Questions</td>
                                            <td className='px-2 py-2 text-start truncate'>5</td>
                                        </tr>
                                        <tr>
                                            <td className='px-2 py-2 text-start truncate border-r border-black'>Successful:</td>
                                            <td className='px-2 py-2 text-start truncate'>successful</td>
                                        </tr>
                                        <tr>
                                            <td className='px-2 py-2 text-start truncate border-r border-black'>Unsuccessful:</td>
                                            <td className='px-2 py-2 text-start truncate'>unsuccessful</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='basis-2/5 pt-16 px-2'>
                                <div className='flex gap-3'>
                                    <div className='w-1/2'>
                                        <p className='font-black bg-gray-100 py-3 rounded-md md:text-xl text-sm text-center'>
                                            <span className='uppercase'>Score</span>
                                            <h4 className=''>100</h4>
                                        </p>
                                    </div>
                                    <div className='w-1/2'>
                                        <p className='font-black bg-gray-100 py-3 rounded-md md:text-xl text-sm text-center'>
                                            <span className='uppercase'>Another Metric</span>
                                            <h4 className=''>150</h4>
                                        </p>
                                    </div>
                                </div>
                                <div className='py-5'>
                                    <p className='font-black bg-gray-100 py-3 rounded-md md:text-2xl text-xl text-center'>
                                        <span className='uppercase'>Overall Score</span>
                                        <h4 className=''>200</h4>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (null)}
                
            </div>
        </div>
    </>
  )
}

export default Trainer;
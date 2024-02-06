// import './App.css'
import { React} from "react";
import  {RouterProvider}  from "react-router-dom";
import BrowserRouter from "./routes";


function App() {

  return (
    <>
      <RouterProvider router={BrowserRouter} />
    </>
  )
}

export default App

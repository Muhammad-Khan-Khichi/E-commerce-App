import { Outlet } from 'react-router-dom'
import '../App.css'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import FetchItems from '../Components/FetchItems'
import { useSelector } from 'react-redux'
import loader from "./LnsyWFOFnw.json"
import Lottie from "lottie-react";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus)
  return (
    <>
    <Header/>
    <FetchItems/>
    {fetchStatus.currentlyFetching ?<div className='w-full flex items-center justify-center'>  <Lottie 
        animationData={loader} 
        loop={true}
        className="w-64 h-64"
      /> </div>: <Outlet/>}
    <Footer/>
    </>
  )
}

export default App

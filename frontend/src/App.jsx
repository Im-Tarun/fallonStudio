import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Header from "./components/Header"
import Data from "./components/Data"


function App() {
  const [admin, setAdmin] = useState(true)
  const [allFeedbacks, setallFeedbacks] = useState([])

  useEffect(() => {
    getFeedbacks()
  
  }, [admin])

  const getFeedbacks = async () => {
    const res = await fetch("https://fallonstudio.onrender.com/api/feedbacks")
    const data = await res.json()
    setallFeedbacks(data.data)
  }
  
  

  return (
    <div className=" min-h-screen	">
      <div className="w-full fixed top-0   z-10 bg-[#48A6A7] shadow-lg">
        <Header admin={admin} setAdmin={setAdmin} />
      </div>
      <div className="w-[90%] mx-auto pt-20 md:pb-36 pb-18  sm:w-sm md:w-md lg:w-xl">
        {admin ? <Form /> : <Data allFeedbacks={allFeedbacks}/>}
      </div>
      <div className="fixed w-full bottom-0">

        <Footer />
      </div>
    </div>
  )
}

export default App

import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <>
            <Header text="Review App" />
            <div className="container">
            <h1>My App</h1>
                <FeedbackList feedback={feedback} handleDelete={()=>console.log("hello")} />
            </div>           
        </> 
    )
}


export default App
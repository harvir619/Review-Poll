import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    
    const deleteFeedback = () => {
        console.log('App',id)
    }
    
    return (
        <>
            <Header text="Review App" />
            <div className="container">
            <h1>My App</h1>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>           
        </> 
    )
}


export default App
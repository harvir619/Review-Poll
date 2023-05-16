import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            console.log(feedback.filter((item)=>item.id !== id))
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
        
        setFeedback()
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
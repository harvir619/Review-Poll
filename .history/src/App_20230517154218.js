import {v4 as uuidv4} from 'uuid'
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'



function App() {
    const [feedback, setFeedback] = useState(FeedbackData)    
    
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }
    
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    
    return (
        <Router>
            <Header text="Review Poll" />
            <div className="container">
                <Routes>
                    <Route path='/'>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                    </Route>
                    <Route path='/about' component={AboutPage}/>
                </Routes>
            </div>           
        </Router> 
    )
}


export default App
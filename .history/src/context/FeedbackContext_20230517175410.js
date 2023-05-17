import { createContext, useState } from "react";


const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating:5,
            text: 'This item is from context',
        }
    ])
    
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }
    
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    
    return <FeedbackContext.Provider value={{ feedback,deleteFeedback}}>
        {children}
     </FeedbackContext.Provider>
    
}

export default FeedbackContext
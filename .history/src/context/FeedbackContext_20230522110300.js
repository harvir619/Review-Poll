import { createContext, useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import FeedbackData from "../data/FeedbackData"

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const [isLoading,setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    
    //delete an item
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }
    
    // add an item
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    //Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) =>
                (item.id === id ? { ...item, ...updItem } : item)
            )  
        )
           setFeedbackEdit({
      item: {},
      edit: false,
    })
    }
    
    //set item to be updated
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    
    
    useEffect(() => {
          fetchFeedback() 
    }, [])
    
    //Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        
        setFeedback(data)
        setIsLoading(false)
    }
    return <FeedbackContext.Provider value={{ feedback,deleteFeedback,addFeedback,editFeedback,feedbackEdit,updateFeedback}}>
        {children}
     </FeedbackContext.Provider>
    
}

export default FeedbackContext
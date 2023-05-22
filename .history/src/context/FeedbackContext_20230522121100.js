import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const [isLoading,setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    
    useEffect(() => {
          fetchFeedback() 
    }, [])
    
    const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    
    setFeedback(data)
    setIsLoading(false)
    }
    //delete an item
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`/feedback/${id}`, {method: 'DELETE'})
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }
    
    // add an item
    const addFeedback = async (newFeedback) => {
        // newFeedback.id = uuidv4()
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newFeedback)
        })
        
        const data = await response.json()
        
        setFeedback([data, ...feedback])
    }

    //Update feedback item
    const updateFeedback = async (id, updItem) => {
        
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(updItem)
        })
        const data = await response.json()
        
        
        setFeedback(
            feedback.map((item) =>
                (item.id === id ? { ...item, ...data } : item)
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

    
    //Fetch feedback

    return <FeedbackContext.Provider value={{ feedback,deleteFeedback,addFeedback,editFeedback,feedbackEdit,updateFeedback}}>
        {children}
     </FeedbackContext.Provider>
    
}

export default FeedbackContext
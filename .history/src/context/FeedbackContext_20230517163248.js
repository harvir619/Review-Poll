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
}
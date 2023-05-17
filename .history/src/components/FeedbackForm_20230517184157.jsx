import FeedbackContext from "../context/FeedbackContext"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import Card from "./shared/Card"
import { useContext, useEffect, useState } from 'react'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating,setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const {addFeedback,feedbackEdit} = useContext(FeedbackContext)
    
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
       }  
    },[feedbackEdit])
    
    const handleTextChange = (e) => {
        const inputValue = e.target.value;
        setText(inputValue);
        
        if (inputValue === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (inputValue.trim().length < 10) {
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
    };
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if (text.trim().length > 10){
            const newFeedback = { text, rating }
           addFeedback(newFeedback)
            
            setText('')
        }
    }
    
  return (
      <Card>
          <form onSubmit={handleSubmit}>
              <h2>What is your opinion?</h2>
              <RatingSelect select={ (rating)=>setRating(rating)} />
              <div className="input-group">
                  <input
                      type="text"
                      onChange={handleTextChange}
                      placeholder="Write a review"
                      value={text} 
                  />
                  <Button
                      type="Submit"
                      children="Send"
                      isDisabled={btnDisabled}
                  />
              </div>
              
              {message && <div className='message'>{message}</div>}
          </form>
    </Card>
  )
}

export default FeedbackForm
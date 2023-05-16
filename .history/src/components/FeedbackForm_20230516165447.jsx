import Button from "./shared/Button"
import Card from "./shared/Card"
import {useState} from 'react'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    
    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
         console.log(text)
        setText(e.target.value)
    }
    
  return (
      <Card>
          <form>
              <h2>What is your opinion?</h2>
              {/* @todo - rating select component */}
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
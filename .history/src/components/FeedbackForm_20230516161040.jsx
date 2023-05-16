import Button from "./shared/Button"
import Card from "./shared/Card"
import {useState} from 'react'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setDisabled] = useState(true)
    const [message, setMessage] = useState('')
    
    const handleTextChange = (e) => {
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
                  <Button type="Submit" children="Send"/>
              </div>
          </form>
    </Card>
  )
}

export default FeedbackForm
import Card from "./shared/Card"
import {useState} from 'react'

function FeedbackForm() {
    const [text, setText] = useState('')
    
    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    
  return (
      <Card>
          <form>
              <h2>How would you rate your service with us?</h2>
              {/* @todo - rating select component */}
              <div className="input-group">
                  <input
                      type="text"
                      onChange={handleTextChange}
                      placeholder="Write a review"
                      value={text} 
                  />
                  <button type='submit'>Send</button>
              </div>
          </form>
    </Card>
  )
}

export default FeedbackForm
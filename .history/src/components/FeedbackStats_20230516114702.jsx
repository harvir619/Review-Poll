import React from 'react'

function FeedbackStats({ feedback }) {
    //Calculate ratings average
    
    let average = feedback.reduce((acc, cur) => {
            var b = acc + cur.rating
       return b/feedback.length 
    },0)
  return (
      <div className='feedback-stats'>
          <h4>{feedback.length} Reviews</h4>
          <h4>Average Rating: {average}</h4>
    </div>
  )
}

export default FeedbackStats
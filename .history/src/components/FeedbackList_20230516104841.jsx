import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropType from 'prop-types'

function FeedbackList({feedback}) {
    if (!feedback || feedback.length === 0) {
      return <p>No feedback yet</p>
  }
  
    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id } item={item }  />
            ))}
          
    </div>
  )
}


FeedbackList.propTypes={
    feedback.array.isRequired,
}
export default FeedbackList
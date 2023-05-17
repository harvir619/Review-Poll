import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from "framer-motion"

// export const MyComponent = ({ isVisible }) => (
//     <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
// )


function FeedbackList({feedback,handleDelete}) {
    if (!feedback || feedback.length === 0) {
      return <p>No feedback yet</p>
  }
  
    return (
      <div className='feedback-list'>
        <AnimatePresence>
            {feedback.map((item) => (
              <FeedbackItem key={item.id} item={item}
                handleDelete={handleDelete} />
            ))}
          </AnimatePresence>
    </div>
  )
}


FeedbackList.propTypes={
    feedback: PropTypes.array.isRequired,
}
export default FeedbackList
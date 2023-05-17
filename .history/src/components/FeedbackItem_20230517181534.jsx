import React, { useContext } from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes,FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem({item}) {
    const [rating,setRating] = useState(item.rating)
    const [text, setText] = useState(item.text)
    const {deleteFeedback} = useContext(FeedbackContext)
    
    return (
      <Card reverse={false}>
        <div className="num-display">{rating}</div>
        <button className="close" onClick={()=>deleteFeedback(item.id)}>
          <FaTimes color='purple'/>
        </button>
        <button className="edit">
          <FaEdit color='purple'/>
        </button>
        <div className="text-display">{text}</div>
      </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}


export default FeedbackItem
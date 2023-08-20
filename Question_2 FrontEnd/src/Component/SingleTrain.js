import React from 'react'
import './component.css'
const SingleTrain = ({train}) => {
  return (
    
   
    <tr>
      <td>{train.trainName}</td>
      <td>{train.trainNumber}</td>
      
    </tr>
    
 
  )
}

export default SingleTrain

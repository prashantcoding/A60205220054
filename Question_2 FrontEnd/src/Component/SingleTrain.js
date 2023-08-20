import React from 'react'
import './component.css'
const SingleTrain = ({train}) => {
  return (
    
   
    <tr>
      <td>{train.trainName}</td>
      <td>{train.trainNumber}</td>
      <td>
        <td>AC {train.seatsAvailable.AC}</td>
        <td>sleeper {train.seatsAvailable.sleeper}</td>
        <td> {train.seatsAvailable.sleeper}</td>
       
      </td>
      <td> {train.departureTime.Hours+":"+train.departureTime.Minutes+":"+train.departureTime.Seconds}</td>
      <td>
        <td>AC {"Rs."+train.price.AC} </td>
        <td>sleeper {"Rs."+train.price.sleeper}</td>
       
       
      </td>
      <td>{
        <td >{train.delayedBy +"minutes"}</td>
        }</td>
    </tr>
    
 
  )
}

export default SingleTrain

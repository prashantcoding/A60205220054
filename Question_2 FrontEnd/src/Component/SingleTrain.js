import React from 'react'
import './component.css'
import { Link, useNavigate } from 'react-router-dom'
const SingleTrain = ({train}) => {
  const navgate=useNavigate();
  
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

       <Link to={`/train/${train.trainNumber}`}> <td><button  className="button" >Details</button></td></Link>
    </tr>
    
 
  )
}

export default SingleTrain

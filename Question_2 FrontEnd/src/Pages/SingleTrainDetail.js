import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleTrainDetail = () => {
  const params=useParams();
  const trainNum=params.trainNum;
  const [train,setTrain]=useState([]);
  
  useEffect(()=>{
       let getData=localStorage.getItem('trainData')
       getData=JSON.parse(getData)
        const FilterTrain = getData.filter(train => {
       
        return   trainNum==train.trainNumber;
      });
        setTrain(FilterTrain )
       
  },[])
  
  
  return (
   train&& <div >
      
    <tr>
      {
        train.map((train)=>(<>
        <table className='singleTrain '  style={{width:"100%"}}>
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
        }</td></table></>))
      }
 
      
    </tr>
    </div>
 
  )
}

export default SingleTrainDetail

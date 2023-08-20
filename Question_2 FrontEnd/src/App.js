import React, { useEffect, useState } from 'react'
import NavBar from './Component/NavBar'
import SingleTrain from './Component/SingleTrain'
import axios from 'axios' 
import '../src/Component/component.css'
const App = () => {
  const [trainData,setTrainDdata]=useState(null);
  useEffect(() => {
    const currentTime = new Date();
    async function getTrain(){
       const response= await axios({
        method: "get",
        url: "http://localhost:5000/train/train",
        
      
    })
   
      
    
    if(response){
      const thirtyMinutesFromNow = new Date(currentTime.getTime() + 30 * 60 * 1000);
      const filteredTrains = response.data.filter(train => {
        const departureTime = new Date();
        departureTime.setHours(train.departureTime.Hours);
        departureTime.setMinutes(train.departureTime.Minutes);
        departureTime.setSeconds(train.departureTime.Seconds);
      
        return   departureTime >= thirtyMinutesFromNow;
      });
      setTrainDdata(filteredTrains);
    }
    
    
    
  }
  getTrain();
  
 
  },[])
  return (
    <div>
      <NavBar/>
      {
        <div>
        <table className="singleTrain">
          <thead>
            <tr>
              <th>Train Name</th>
              <th>Train Number</th>
              <th>SeatAvalaible</th>
              <th>departTureTime</th>
              <th>price</th>
              <th>delayedBy</th>
            </tr>
          </thead>
          <tbody>
          {  trainData && trainData.map((train)=>(<SingleTrain key={train.trainNumber} train={train}/>))}

          </tbody>
        </table>
      </div>
        
      }
    </div>
  )
}

export default App

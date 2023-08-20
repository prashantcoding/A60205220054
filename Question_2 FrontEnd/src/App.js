import React, { useEffect, useState } from 'react'
import NavBar from './Component/NavBar'
import SingleTrain from './Component/SingleTrain'
import axios from 'axios' 
import '../src/Component/component.css'
const App = () => {
  const [trainData,setTrainDdata]=useState(null);
  useEffect(() => {
    
    async function getTrain(){
       const response= await axios({
        method: "get",
        url: "http://localhost:5000/train/train",
        
      
    })
    
    if(response){
      setTrainDdata(response.data);
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

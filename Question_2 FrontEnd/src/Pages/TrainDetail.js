import React, { useEffect, useState } from 'react'
import SingleTrain from '../Component/SingleTrain'
import axios from 'axios' 
import '../Component/component.css'
const TrainDetail = () => {
  const [trainData,setTrainData]=useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      
      async function getTrain() {
        try {
          const response = await axios.get("http://localhost:5000/train/train");

          if (response.data) {
            const thirtyMinutesFromNow = new Date(currentTime.getTime() + 30 * 60 * 1000);
            const filteredTrains = response.data.filter(train => {
              const departureTime = new Date();
              departureTime.setHours(train.departureTime.Hours);
              departureTime.setMinutes(train.departureTime.Minutes);
              departureTime.setSeconds(train.departureTime.Seconds);

              return departureTime >= thirtyMinutesFromNow;
            });
            
            setTrainData(filteredTrains);
            localStorage.setItem("trainData", JSON.stringify(filteredTrains));
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      getTrain();
    }, 4000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [])
  return (
    <div>
      <div >
        <table className="singleTrain">
          <thead>
            <tr>
              <th>Train Name</th>
              <th>Train Number</th>
              <th>SeatAvalaible</th>
              <th>departTureTime</th>
              <th>price</th>
              <th>delayedBy</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
          {  trainData && trainData.map((train)=>(<SingleTrain key={train.trainNumber} train={train} />))}

          </tbody>
        </table>
      </div>
        
    </div>
  )
}

export default TrainDetail

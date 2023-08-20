import React, { useEffect, useState } from 'react'
import NavBar from './Component/NavBar'
import TrainDetail from './Pages/TrainDetail'
import { Route, Routes } from 'react-router-dom'
import SingleTrainDetail from './Pages/SingleTrainDetail'

const App = () => {
  
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<TrainDetail/>}></Route>
        <Route path="Train/:trainNum" element={<SingleTrainDetail/>}></Route>
        
      </Routes>
    </div>
  )
}

export default App

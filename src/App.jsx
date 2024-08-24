import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Card from './pages/card/Card'
import Success from './pages/Success'
function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/card' element={<Card />} />
            <Route path='/success' element={<Success />} />
          </Routes>  
        </Router> 
    </div>
  )
}

export default App
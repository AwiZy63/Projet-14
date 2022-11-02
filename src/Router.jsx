import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Tablepage from './pages/Tablepage';
import hrNetLogo from './assets/hrnetlogo.png';

export default function Router() {
  return (
    <BrowserRouter>
      <div className="title">
        <img src={hrNetLogo} alt='HRNet' />
      </div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/employees' element={<Tablepage />} />
      </Routes>
    </BrowserRouter>
  )
}

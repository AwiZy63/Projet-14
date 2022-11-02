import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Tablepage from './pages/Tablepage';

export default function Router() {
  return (
    <BrowserRouter>
      <div className="title">
        <img width={'50%'} height={'50%'} src={process.env.PUBLIC_URL + "/assets/hrnetlogo.webp"} srcSet={process.env.PUBLIC_URL + "/assets/hrnetlogo.webp"} alt='HRNet' />
      </div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/employees' element={<Tablepage />} />
      </Routes>
    </BrowserRouter>
  )
}

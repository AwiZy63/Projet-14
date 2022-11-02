import React from 'react'
import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Homepage = lazy(() => import('./pages/Homepage'));
const Tablepage = lazy(() => import('./pages/Tablepage'));

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

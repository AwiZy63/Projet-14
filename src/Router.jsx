import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Tablepage from './pages/Tablepage';

export default function Router() {
  return (
    <BrowserRouter>
      <div class="title">
        <h1>HRnet</h1>
      </div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/employees' element={<Tablepage />} />
      </Routes>
    </BrowserRouter>
  )
}

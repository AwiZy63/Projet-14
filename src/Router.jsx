import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

export default function Router() {
  return (
    <BrowserRouter>
      <div class="title">
        <h1>HRnet</h1>
      </div>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Join from './component/Join.jsx';
import WorkShop from './component/WorkShop.jsx';
import Header from './component/Header.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/workshop" element={<WorkShop />} />
        </Routes>
      </div>


    </BrowserRouter>
  )
}

export default App

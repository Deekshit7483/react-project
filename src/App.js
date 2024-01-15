import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';



function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />}/> 
            <Route path="about" element={<About />}/> 
            <Route path="services" element={<Services />}/> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

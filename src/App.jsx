import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/HOME'
import About from './pages/ABOUT'
import Contact from './pages/CONTACT';
import ContactUs from './pages/CONTACT';
import Services from './pages/SERVICES';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter basename="/techlinx">
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
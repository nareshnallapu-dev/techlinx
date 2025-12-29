import React from 'react'
import ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/HOME'
import About from './pages/ABOUT'
import PhenomSolutions from './pages/PHENOM SOLUTIONS'
import Contact from './pages/CONTACT';
import ContactUs from './pages/CONTACT';
import NotFound from './components/NotFound';
import AiAutomation from './pages/AI AUTOMATION';
import Integrations from './pages/INTEGRATIONS';
import ManagedServices from './pages/MANAGED SERVICES';
import ScrollToTopPage from './components/ScrollToTopPage';
import HrTechSolutions from './pages/HR TECH SOLUTIONS';

const App = () => {
  return (
    <BrowserRouter basename="/techlinx">
      <ScrollToTopPage/>
      <Routes>
        <Route path='/home' index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/phenom-solutions' element={<PhenomSolutions/>}/>
        <Route path='/ai-automation' element={<AiAutomation/>}/>
        <Route path='/integrations' element={<Integrations/>}/>
        <Route path='/managed-services' element={<ManagedServices/>}/>
        <Route path='/hr-tech-solutions' element={<HrTechSolutions/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './components/MainLayout'
import Home from './pages/home/Home'
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/home/AboutUs'
import Pricing from './pages/home/Pricing'
import Features from './pages/home/Features'
import ContactForm from './pages/home/contactForm'
function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing type
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className='pt-5 mt-3 mt-lg-5 '><AboutUs /></div>} />
          <Route path="/pricing" element={<div className='pt-5 mt-3 mt-lg-5 '><Pricing /></div>} />
          <Route path="/features" element={<div className='pt-5 mt-3 mt-lg-5 '><Features /></div>} />
          <Route path="/contact" element={<div className='pt-5 mt-3 mt-lg-5 '><ContactForm /></div>} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App

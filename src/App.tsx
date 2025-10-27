import './App.css';
import { useState, useEffect } from 'react';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Manufacturers from './pages/Manufacturers';
import Clients from './pages/Clients';
import LandingPage from './pages/LandingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (currentPage === 'about') {
    return <AboutUs setCurrentPage={setCurrentPage} />;
  } else if (currentPage === 'contact') {
    return <ContactUs setCurrentPage={setCurrentPage} />;
  } else if (currentPage === 'manufacturers') {
    return <Manufacturers setCurrentPage={setCurrentPage} />;
  } else if (currentPage === 'clients') {
    return <Clients setCurrentPage={setCurrentPage} />;
  } else {
    return <LandingPage setCurrentPage={setCurrentPage} />;
  }
}

export default App;

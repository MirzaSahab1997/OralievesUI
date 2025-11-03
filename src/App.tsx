import './App.css';
import { useState, useEffect } from 'react';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Manufacturers from './pages/Manufacturers';
import ManufacturersList from './pages/ManufacturersList';
import Clients from './pages/Clients';
import LandingPage from './pages/LandingPage';
import BlogDetail from './pages/BlogDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [blogId, setBlogId] = useState<string>('');
  const [manufacturerId, setManufacturerId] = useState<string>('');

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || 'home';
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Enhanced setCurrentPage that updates browser history
  const updatePage = (page: string) => {
    setCurrentPage(page);
    window.history.pushState({ page }, '', `#${page}`);
  };

  const updatePageWithBlogId = (page: string, id: string = '') => {
    setBlogId(id);
    updatePage(page);
  };

  const updatePageWithManufacturerId = (page: string, id: string = '') => {
    setManufacturerId(id);
    updatePage(page);
  };

  const handlePageNavigation = (page: string, id: string = '') => {
    if (page === 'blog') {
      updatePageWithBlogId(page, id);
    } else if (page === 'manufacturer-detail') {
      updatePageWithManufacturerId(page, id);
    } else {
      updatePage(page);
    }
  };

  if (currentPage === 'about') {
    return <AboutUs setCurrentPage={handlePageNavigation} />;
  } else if (currentPage === 'contact') {
    return <ContactUs setCurrentPage={handlePageNavigation} />;
  } else if (currentPage === 'manufacturers' || currentPage === 'manufacturers-list') {
    return <ManufacturersList setCurrentPage={handlePageNavigation} />;
  } else if (currentPage === 'manufacturer-detail') {
    return <Manufacturers setCurrentPage={handlePageNavigation} manufacturerId={manufacturerId} />;
  } else if (currentPage === 'clients') {
    return <Clients setCurrentPage={handlePageNavigation} />;
  } else if (currentPage === 'blog') {
    return <BlogDetail setCurrentPage={handlePageNavigation} blogId={blogId} />;
  } else {
    return <LandingPage setCurrentPage={handlePageNavigation} />;
  }
}

export default App;

import './App.css';
import { useState, useEffect } from 'react';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Manufacturers from './pages/Manufacturers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const HomePage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
    <div className="min-h-screen bg-gradient-to-br from-oralieves-light via-white to-oralieves-accent">
      <Navbar setCurrentPage={setCurrentPage} currentPage="home" />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Global Partner for Innovative<br />
                <span className="text-oralieves-primary">Oral Healthcare</span><br />
                Solutions
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                B2B Supply Partner for Clinics, Distributors & Retail Chains
              </p>
            </div>

            {/* Three Main Sections */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* About Us */}
              <div id="about" className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-oralieves-primary to-oralieves-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">About Us</h3>
                <p className="text-gray-600 text-center mb-6">
                  We are dedicated to providing innovative oral healthcare solutions that improve patient outcomes and enhance clinical practices worldwide.
                </p>
                <div className="text-center">
                  <button onClick={() => setCurrentPage('about')} className="btn-secondary">Learn More</button>
                </div>
              </div>

              {/* Manufacturers */}
              <div id="manufacturers" className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-oralieves-secondary to-oralieves-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7h-8v6h8V7zm-2 4h-4V9h4v2zm4.5-9H2.5C1.67 2 1 2.67 1 3.5v17C1 21.33 1.67 22 2.5 22h19c.83 0 1.5-.67 1.5-1.5v-17C23 2.67 22.33 2 21.5 2zM21 20H3V4h18v16z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Manufacturers</h3>
                <p className="text-gray-600 text-center mb-6">
                  Partner with leading manufacturers to deliver high-quality oral healthcare products and innovative solutions to healthcare providers.
                </p>
                <div className="text-center">
                  <button onClick={() => setCurrentPage('manufacturers')} className="btn-secondary">Explore Partners</button>
                </div>
              </div>

              {/* Clients */}
              <div id="clients" className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-oralieves-accent to-oralieves-light rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10.5V22h2v-6h2v6h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9.5c0-.83-.67-1.5-1.5-1.5S6 8.67 6 9.5V15H4.5v7h3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Clients</h3>
                <p className="text-gray-600 text-center mb-6">
                  Serving clinics, distributors, and retail chains with comprehensive oral healthcare solutions tailored to their specific needs.
                </p>
                <div className="text-center">
                  <button className="btn-secondary">View Services</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Oralieves?</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine innovation, quality, and reliability to deliver exceptional oral healthcare solutions.
        </p>
      </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-oralieves-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Quality Assurance</h4>
                <p className="text-sm text-gray-600">Certified products meeting international standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-oralieves-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Fast Delivery</h4>
                <p className="text-sm text-gray-600">Quick and reliable shipping worldwide</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-oralieves-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">Cutting-edge technology and solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-oralieves-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
                <p className="text-sm text-gray-600">24/7 customer support and assistance</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );

  if (currentPage === 'about') {
    return <AboutUs setCurrentPage={setCurrentPage} />;
  } else if (currentPage === 'contact') {
    return <ContactUs setCurrentPage={setCurrentPage} />;
  } else if (currentPage === 'manufacturers') {
    return <Manufacturers setCurrentPage={setCurrentPage} />;
  } else {
    return <HomePage setCurrentPage={setCurrentPage} />;
  }
}

export default App;

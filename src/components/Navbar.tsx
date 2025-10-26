import React from 'react';
import Logo from '../images/Logo.png';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
  currentPage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage, currentPage = 'home' }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-0 -my-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <img src={Logo} alt="ORALIEVES Logo" className="h-24" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? "text-oralieves-primary font-semibold" : "text-gray-700 hover:text-oralieves-primary transition-colors"}>About Us</button>
            <button onClick={() => setCurrentPage('manufacturers')} className={currentPage === 'manufacturers' ? "text-oralieves-primary font-semibold" : "text-gray-700 hover:text-oralieves-primary transition-colors"}>Manufacturers</button>
            <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-oralieves-primary transition-colors">Clients</button>
            <button onClick={() => setCurrentPage('contact')} className="btn-primary">Contact</button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


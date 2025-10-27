import React from 'react';
import Logo from '../images/Logo.png';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin
} from 'lucide-react';

interface ManufacturersProps {
  setCurrentPage: (page: string) => void;
}

const Manufacturers: React.FC<ManufacturersProps> = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", label: "YouTube" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-oralieves-light via-white to-oralieves-accent">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
      </div>

      {/* Banner Section */}
      <section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ 
          background: 'linear-gradient(135deg, rgb(79, 209, 199) 0%, rgb(15, 150, 150) 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-center">
            <div className="inline-block bg-white rounded-lg shadow-xl p-6 border border-gray-100" style={{ width: '200px', height: '60px' }}>
              <div className="flex flex-col items-center justify-center h-full">
                <img src={Logo} alt="Oralieves Logo" style={{ maxHeight: '150px', width: 'auto' }} />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl" style={{ color: '#ffffff', fontWeight: '300' }}>
              Manufacturers
            </h2>
          </div>

          {/* Navigation Bar */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 border-t border-white/20">
            <button className="text-white hover:text-oralieves-primary transition-colors font-medium">
              COMPANY BACKGROUND
            </button>
            <button className="text-white hover:text-oralieves-primary transition-colors font-medium">
              PRODUCTS
            </button>
            <button className="text-white hover:text-oralieves-primary transition-colors font-medium">
              FACILITY
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Sub Menu */}
          <div className="mb-12">
            <h2 className="text-3xl text-gray-800 mb-8 text-center" style={{ fontWeight: '400' }}>
              Our Partner – <span className="text-oralieves-primary">NanoCure Tech Korea</span>
            </h2>
          </div>

          {/* Company Information Section */}
          <section className="mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Founded in <span className="font-semibold text-oralieves-primary">2007</span>, NanoCure Tech Korea specializes in advanced <span className="font-semibold">Nano-Bio Fusion Technology</span>. The company collaborates with leading universities in Korea, the UK, Hungary, and other countries to drive innovation in natural and nano-based oral care.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Its research and development also extend to cancer therapy and drug delivery systems.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  With its head office in <span className="font-semibold">Daejeon</span> and a branch in <span className="font-semibold">Seoul</span>, NanoCure Tech Korea continues to pioneer safe and effective oral health solutions worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Motto Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-oralieves-primary/10 to-oralieves-secondary/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-oralieves-primary/20 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-oralieves-primary to-oralieves-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl text-gray-800 mb-4" style={{ fontWeight: '400' }}>Our Motto</h3>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "Natural, nano-antioxidant protection for total oral health – less pain, faster healing, safer care."
                </p>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Technology */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-oralieves-primary to-oralieves-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-gray-800 mb-2" style={{ fontWeight: '400' }}>Nano-Bio Fusion</h4>
                <p className="text-sm text-gray-600">Advanced technology for optimal oral care</p>
              </div>

              {/* Research */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-oralieves-secondary to-oralieves-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-gray-800 mb-2" style={{ fontWeight: '400' }}>Global Research</h4>
                <p className="text-sm text-gray-600">Collaborating with leading universities worldwide</p>
              </div>

              {/* Safety */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-oralieves-accent to-oralieves-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-gray-800 mb-2" style={{ fontWeight: '400' }}>Safe & Effective</h4>
                <p className="text-sm text-gray-600">Natural solutions for better oral health</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Interested in learning more about our partnership with NanoCure Tech Korea or exploring their innovative products?
            </p>
            <button 
              onClick={() => setCurrentPage('contact')} 
              className="btn-primary text-lg px-12 py-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Social Media */}
          <div className="flex flex-col items-center mb-8">
            <h4 className="text-lg font-semibold mb-4">FIND US:</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: 'rgb(79 209 199)',
                    color: 'white'
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright and Address */}
          <div className="text-center space-y-2 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              © {currentYear} Oralieves. All rights reserved. | Manufacturer of Personal Care Products
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Manufacturers;


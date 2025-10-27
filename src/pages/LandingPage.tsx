import React from 'react';
import { 
  Building2, 
  Users, 
  Package, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin
} from 'lucide-react';
import Logo from '../images/Logo.png';

interface LandingPageProps {
  setCurrentPage: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setCurrentPage }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const currentYear = new Date().getFullYear();

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceCards = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "About Us",
      description: "We are dedicated to providing innovative oral healthcare solutions that improve patient outcomes and enhance clinical practices worldwide.",
      linkText: "Learn More",
      page: "about"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Manufacturers",
      description: "Partner with leading manufacturers to deliver high-quality oral healthcare products and innovative solutions to healthcare providers.",
      linkText: "Explore Partners",
      page: "manufacturers"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Contact Us",
      description: "Serving clinics, distributors, and retail chains with comprehensive oral healthcare solutions tailored to their specific needs.",
      linkText: "Contact Us",
      page: "contact"
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", label: "YouTube" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" }
  ];

  return (
      <div className="min-h-screen bg-white">
      {/* White Section with Logo */}
      <div className="relative bg-white" style={{ height: '100px' }}>
        {/* Logo Container - Positioned to overlap both sections */}
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`} 
          style={{ top: '40px', zIndex: 10 }}
        >
          <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-100" style={{ width: '300px', height: '120px' }}>
            <div className="flex flex-col items-center justify-center h-full">
              <img src={Logo} alt="OraLabs Logo" style={{ maxHeight: '200px', width: 'auto' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Blue Section with Services */}
      <div 
        className="relative py-20 px-6"
        style={{ 
          background: 'linear-gradient(135deg, rgb(79, 209, 199) 0%, rgb(15, 150, 150) 100%)',
          minHeight: '600px'
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Service Cards - Row Layout */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {serviceCards.map((service, index) => (
              <div 
                key={index}
                className={`flex justify-center items-center transition-all duration-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {/* Circular Card Background - Clickable */}
                <div 
                  onClick={() => setCurrentPage(service.page)}
                  className="bg-white rounded-full shadow-lg hover:shadow-xl transform group hover:scale-105 transition-all duration-300 p-8 flex flex-col items-center justify-center text-center cursor-pointer" 
                  style={{ width: '400px', height: '400px', border: '3px solid rgb(15, 150, 150)' }}
                >
                  {/* Icon Circle */}
                  <div 
                    className="relative flex items-center justify-center rounded-full border-4 transition-all duration-500 ease-out group-hover:scale-110 mb-5"
                    style={{ 
                      width: '120px',
                      height: '120px',
                      backgroundColor: 'rgba(79, 209, 199, 0.1)',
                      borderColor: 'rgb(15, 150, 150)',
                      boxShadow: '0 0 20px rgba(79, 209, 199, 0.3)'
                    }}
                  >
                    <div 
                      className="flex items-center justify-center rounded-full"
                      style={{ 
                        width: '85px',
                        height: '85px',
                        backgroundColor: 'rgb(79, 209, 199)'
                      }}
                    >
                      <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                        {React.cloneElement(service.icon, { className: 'w-10 h-10' })}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#0f9696' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-5 text-base leading-relaxed px-6">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-8">
            <a href="#newsroom" className="text-lg font-semibold transition-colors duration-300 hover:text-oralieves-primary" style={{ color: '#0f9696' }}>
              News Room
            </a>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="text-lg font-semibold transition-colors duration-300 hover:text-oralieves-primary" 
              style={{ color: '#0f9696' }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

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

export default LandingPage;


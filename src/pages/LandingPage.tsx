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
  setCurrentPage: (page: string, id?: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setCurrentPage }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const currentYear = new Date().getFullYear();

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceCards = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "DEAR DISTRIBUTORS",
      description: "We act as your Partner in Sourcing — identifying and connecting you with reputed international manufacturers offering high-quality, compliant, and sustainable Health Care Products for long-term cooperation.",
      descriptionLines: [
        "We act as your Partner in Sourcing — identifying and connecting you with reputed international manufacturers.",
        "We offer high-quality, compliant, and sustainable Health Care Products for long-term cooperation."
      ],
      linkText: "Learn More",
      page: "clients-list"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "ORALIEVES UPRIGHT PEOPLE",
      description: "Your Partner in Health Care. Building trust. Enabling growth. Promoting wellness. Partner with ORALIEVES and become part of a network dedicated to healthier lives and stronger collaborations. We act as a trusted service company based in Pakistan, bridging opportunities between manufacturers and distributors in the global health care sector.",
      descriptionLines: [
        "Your Partner in Health Care. Building trust. Enabling growth. Promoting wellness.",
        "Partner with ORALIEVES and become part of a network dedicated to healthier lives and stronger collaborations.",
        "We act as a trusted service company based in Pakistan, bridging opportunities between manufacturers and distributors in the global health care sector."
      ],
      linkText: "Learn More",
      page: "about"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "DEAR MANUFACTURERS",
      description: "We aim to be your Partner in Promotion — connecting your innovative Health Care Products with reputable distributors who have strong local networks, regulatory awareness, and market experience.",
      descriptionLines: [
        "We aim to be your Partner in Promotion — connecting your innovative Health Care Products with reputable distributors.",
        "Work with teams that have strong local networks, regulatory awareness, and market experience."
      ],
      linkText: "Explore Partners",
      page: "manufacturers-list"
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
      <div className="relative bg-white h-16 md:h-20">
        {/* Logo Container - Positioned to overlap both sections */}
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`} 
          style={{ top: '40px', zIndex: 10 }}
        >
          <div className="rounded-lg shadow-2xl border border-gray-100 relative overflow-hidden w-[180px] h-[65px] md:w-[239px] md:h-[84px]" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 opacity-50"></div>
            <div className="relative bg-white p-4 md:p-6 flex flex-col items-center justify-center h-full">
              <img src={Logo} alt="OraLabs Logo" className="max-h-[150px] md:max-h-[200px] w-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Blue Section with Services */}
      <div 
        className="relative py-12 md:py-20 px-4 md:px-6"
        style={{ 
          background: 'linear-gradient(135deg, rgb(79, 209, 199) 0%, rgb(15, 150, 150) 100%)',
          minHeight: '400px'
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Service Cards - Row Layout */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-20 mt-8">
            {serviceCards.map((service, index) => {
              const showTitleOutside = ["DEAR MANUFACTURERS", "DEAR DISTRIBUTORS", "ORALIEVES UPRIGHT PEOPLE"].includes(service.title);

              return (
                <div 
                  key={index}
                  className={`flex flex-col items-center transition-all duration-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  {/* Circular Card Background - Clickable */}
                  <div 
                    onClick={() => setCurrentPage(service.page)}
                    className="bg-white rounded-full shadow-lg hover:shadow-xl transform group hover:scale-105 transition-all duration-300 p-4 md:p-8 flex flex-col items-center justify-center text-center cursor-pointer w-[220px] h-[220px] md:w-[280px] md:h-[280px]"
                    style={{ border: '3px solid rgb(15, 150, 150)' }}
                  >
                    {/* Icon Circle */}
                    <div 
                      className="flex items-center justify-center mb-3 md:mb-5 transition-all duration-500 ease-out group-hover:scale-110"
                    >
                      <div 
                        className="flex items-center justify-center rounded-full w-16 h-16 md:w-20 md:h-20"
                        style={{ 
                          backgroundColor: 'rgb(79, 209, 199)'
                        }}
                      >
                        <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                          {React.cloneElement(service.icon, { className: 'w-6 h-6 md:w-8 md:h-8' })}
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* Title outside circle when enabled */}
                  {showTitleOutside && (
                    <h3
                      className="text-base md:text-lg mt-4 text-white"
                      style={{ fontWeight: '400' }}
                    >
                      {service.title}
                    </h3>
                  )}
                  
                  {/* Description outside circle */}
                  <div className="text-white text-[13px] leading-relaxed px-4 md:px-6 mt-4 space-y-2 max-w-[260px] md:max-w-[320px] text-center">
                    {(service.descriptionLines ?? [service.description]).map((line, lineIndex) => (
                      <p key={lineIndex}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-center gap-6 md:gap-8">
            <button 
              onClick={() => {
                setCurrentPage('about');
                setTimeout(() => {
                  document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-base md:text-lg font-semibold transition-colors duration-300 hover:text-oralieves-primary" 
              style={{ color: '#0f9696' }}
            >
              Blogs
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="text-base md:text-lg font-semibold transition-colors duration-300 hover:text-oralieves-primary" 
              style={{ color: '#0f9696' }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
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


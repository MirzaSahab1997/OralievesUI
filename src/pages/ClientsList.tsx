import React from 'react';
import Logo from '../images/Logo.png';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin
} from 'lucide-react';

interface ClientsListProps {
  setCurrentPage: (page: string, id?: string) => void;
}

const ClientsList: React.FC<ClientsListProps> = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", label: "YouTube" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" }
  ];

  const clients = [
    { id: 'dentalclinic-group', name: 'Dental Clinic Group', logo: '' },
    { id: 'smile-dental-network', name: 'Smile Dental Network', logo: '' },
    { id: 'oralcare-distributors', name: 'OralCare Distributors', logo: '' },
    { id: 'healthcare-supply-chain', name: 'Healthcare Supply Chain', logo: '' },
    { id: 'dental-retail-partners', name: 'Dental Retail Partners', logo: '' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-oralieves-light via-white to-oralieves-accent">
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
            <div className="inline-block bg-white rounded-lg shadow-xl p-4 md:p-6 border border-gray-100 w-[150px] h-[45px] md:w-[200px] md:h-[60px]">
              <div className="flex flex-col items-center justify-center h-full">
                <img src={Logo} alt="Oralieves Logo" className="max-h-[100px] md:max-h-[150px] w-auto" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ color: '#ffffff', fontWeight: '300' }}>
              Our Clients
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Clients Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {clients.map((client) => (
              <div 
                key={client.id}
                onClick={() => setCurrentPage('client-detail', client.id)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-oralieves-primary transition-colors">
                      {client.name}
                    </h3>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-oralieves-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Click to learn more about our partnership with {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Social Media */}
          <div className="flex flex-col items-center mb-6 md:mb-8">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">FIND US:</h4>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
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
          <div className="text-center space-y-2 pt-6 md:pt-8 border-t border-gray-700">
            <p className="text-xs sm:text-sm text-gray-400 px-4">
              © {currentYear} Oralieves. All rights reserved. | Manufacturer of Personal Care Products
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClientsList;


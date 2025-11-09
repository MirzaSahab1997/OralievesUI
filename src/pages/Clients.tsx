import React from 'react';
import Logo from '../images/Logo.png';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin
} from 'lucide-react';

interface ClientsProps {
  setCurrentPage: (page: string, id?: string) => void;
  clientId?: string;
}

const Clients: React.FC<ClientsProps> = ({ setCurrentPage, clientId }) => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", label: "YouTube" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" }
  ];

  // Get client data based on ID
  const getClientData = (id: string) => {
    const clients: { [key: string]: any } = {
      'dentalclinic-group': {
        name: 'Dental Clinic Group',
        type: 'Dental Clinic Chain',
        established: '2010',
        locations: '50+ clinics across North America',
        specialties: 'General Dentistry, Orthodontics, Cosmetic Dentistry',
        partnership: 'Since 2015',
        description: 'Dental Clinic Group is one of North America\'s leading dental care providers, operating over 50 clinics. They specialize in comprehensive dental services including general dentistry, orthodontics, and cosmetic procedures.',
        services: 'Comprehensive dental care, preventive services, cosmetic treatments',
        focus: 'Patient-centered care and advanced treatment options'
      },
      'smile-dental-network': {
        name: 'Smile Dental Network',
        type: 'Dental Network',
        established: '2008',
        locations: '30+ locations in Europe',
        specialties: 'Preventive Care, Pediatric Dentistry, Oral Surgery',
        partnership: 'Since 2016',
        description: 'Smile Dental Network operates a network of 30+ dental clinics across Europe, focusing on preventive care and patient education. They serve families and individuals with a commitment to accessible, high-quality dental services.',
        services: 'Preventive care, pediatric dentistry, oral surgery, emergency services',
        focus: 'Community health and preventive dentistry'
      },
      'oralcare-distributors': {
        name: 'OralCare Distributors',
        type: 'Distribution Company',
        established: '2012',
        locations: 'Global distribution network',
        specialties: 'Product Distribution, Supply Chain Management',
        partnership: 'Since 2017',
        description: 'OralCare Distributors is a leading global distributor of oral healthcare products, serving retailers, pharmacies, and dental practices worldwide. They maintain an extensive supply chain network ensuring timely delivery and product availability.',
        services: 'Product distribution, inventory management, logistics support',
        focus: 'Efficient supply chain and customer satisfaction'
      },
      'healthcare-supply-chain': {
        name: 'Healthcare Supply Chain',
        type: 'Healthcare Supply Company',
        established: '2005',
        locations: 'Operations in 25+ countries',
        specialties: 'Medical Supplies, Healthcare Products Distribution',
        partnership: 'Since 2018',
        description: 'Healthcare Supply Chain is a major player in the global healthcare distribution market, providing medical supplies and equipment to hospitals, clinics, and healthcare facilities across 25+ countries.',
        services: 'Healthcare product distribution, medical equipment supply, logistics',
        focus: 'Supporting healthcare providers worldwide'
      },
      'dental-retail-partners': {
        name: 'Dental Retail Partners',
        type: 'Retail Chain',
        established: '2014',
        locations: '200+ retail stores',
        specialties: 'Consumer Dental Products, Retail Operations',
        partnership: 'Since 2019',
        description: 'Dental Retail Partners operates a chain of 200+ retail stores specializing in consumer dental care products. They serve millions of customers annually with a focus on affordable, quality oral care solutions.',
        services: 'Retail operations, consumer products, customer education',
        focus: 'Making quality oral care accessible to everyone'
      }
    };
    return clients[id] || clients['dentalclinic-group'];
  };

  const client = getClientData(clientId || 'dentalclinic-group');

  return (
    <div className="relative min-h-screen bg-white">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ color: '#ffffff', fontWeight: '300' }}>
              {client.name}
            </h2>
          </div>

          {/* Navigation Bar */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 pt-8 border-t border-white/20">
            <button
              onClick={() => {
                const element = document.getElementById('company-background');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-oralieves-primary transition-colors font-medium text-xs md:text-base whitespace-nowrap"
            >
              COMPANY BACKGROUND
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('products');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-oralieves-primary transition-colors font-medium text-xs md:text-base whitespace-nowrap"
            >
              PRODUCT PORTFOLIO
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="text-white hover:text-oralieves-primary transition-colors font-medium text-xs md:text-base whitespace-nowrap"
            >
              CONTACT
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Sub Menu */}
          <div className="mb-12" id="company-background">
            <h2 className="text-3xl text-gray-800 mb-8 text-center" style={{ fontWeight: '400' }}>
              Our Client – <span className="text-oralieves-primary">{client.name}</span>
            </h2>
          </div>

          {/* Company Information Section */}
          <section className="mb-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Company Information */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="prose max-w-none">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                    <span className="font-semibold text-oralieves-primary">{client.name}</span> is a {client.type} established in <span className="font-semibold">{client.established}</span>. {client.description}
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                    They operate <span className="font-semibold">{client.locations}</span> and specialize in {client.specialties}.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Our partnership with {client.name} began in <span className="font-semibold">{client.partnership}</span>, and we have been working together to provide exceptional oral healthcare solutions. Their focus is on {client.focus}.
                  </p>
                </div>
              </div>

              {/* Services Section */}
              <div className="bg-gradient-to-br from-oralieves-primary/10 to-oralieves-secondary/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-oralieves-primary/20 shadow-lg">
                <div className="text-center w-full mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-oralieves-primary to-oralieves-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl text-gray-800 mb-3" style={{ fontWeight: '400' }}>Services</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {client.services}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Partnership */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-oralieves-primary to-oralieves-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-gray-800 mb-1" style={{ fontWeight: '400' }}>Partnership</h4>
                <p className="text-xs md:text-sm text-gray-600">Since {client.partnership}</p>
              </div>

              {/* Locations */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-oralieves-secondary to-oralieves-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-gray-800 mb-1" style={{ fontWeight: '400' }}>Locations</h4>
                <p className="text-xs md:text-sm text-gray-600">{client.locations}</p>
              </div>

              {/* Focus */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-oralieves-accent to-oralieves-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-gray-800 mb-1" style={{ fontWeight: '400' }}>Focus</h4>
                <p className="text-xs md:text-sm text-gray-600">{client.focus}</p>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="mb-8" id="products">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl text-gray-800 mb-4 text-center" style={{ fontWeight: '400' }}>
                Product <span className="text-oralieves-primary">Portfolio</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Product 1 */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-36 md:h-44 bg-gradient-to-br from-oralieves-primary/20 to-oralieves-secondary/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=600&fit=crop" 
                    alt="Nano Toothpaste"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg text-gray-800 mb-2" style={{ fontWeight: '500' }}>
                    Nano-Enhanced Toothpaste
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-2">
                    Revolutionary toothpaste infused with nanotechnology that penetrates deeper into enamel, providing superior protection against cavities and plaque buildup.
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Key benefits include 24-hour protection, enamel remineralization, and gentle whitening action.
                  </p>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-36 md:h-44 bg-gradient-to-br from-oralieves-secondary/20 to-oralieves-accent/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&h=600&fit=crop" 
                    alt="Mouthwash"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg text-gray-800 mb-2" style={{ fontWeight: '500' }}>
                    Bio-Active Mouthwash
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-2">
                    Advanced mouthwash solution with bio-active compounds that neutralize harmful bacteria while supporting beneficial oral microbiome.
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Features include antibacterial action, gum health support, and natural flavoring.
                  </p>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-36 md:h-44 bg-gradient-to-br from-oralieves-accent/20 to-oralieves-primary/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=800&h=600&fit=crop" 
                    alt="Dental Care Kit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg text-gray-800 mb-2" style={{ fontWeight: '500' }}>
                    Complete Dental Care Kit
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-2">
                    Comprehensive oral care solution including specialized toothpaste, mouthwash, and dental floss.
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Perfect for comprehensive daily care routine with eco-friendly packaging.
                  </p>
                </div>
              </div>

              {/* Product 4 */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-36 md:h-44 bg-gradient-to-br from-oralieves-primary/20 to-oralieves-accent/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop" 
                    alt="Teeth Whitening"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg text-gray-800 mb-2" style={{ fontWeight: '500' }}>
                    Advanced Teeth Whitening Gel
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-2">
                    Professional-grade whitening gel with nano-hydroxapatite particles that gently lift stains without damaging enamel.
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Safe for sensitive teeth and designed for at-home use with visible results in just 7 days.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Interested in learning more about our partnership with {client.name} or exploring our innovative products?
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

export default Clients;


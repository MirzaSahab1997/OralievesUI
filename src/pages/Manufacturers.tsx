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
  setCurrentPage: (page: string, id?: string) => void;
  manufacturerId?: string;
}

const Manufacturers: React.FC<ManufacturersProps> = ({ setCurrentPage, manufacturerId }) => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", label: "YouTube" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" }
  ];

  // Get manufacturer data based on ID
  const getManufacturerData = (id: string) => {
    const manufacturers: { [key: string]: any } = {
      'nanocure': {
        name: 'NanoCure Tech Korea',
        founded: '2007',
        technology: 'Nano-Bio Fusion Technology',
        partnerships: 'Leading universities in Korea, the UK, Hungary, and other countries',
        headquarters: 'Daejeon',
        branch: 'Seoul',
        motto: 'Natural, nano-antioxidant protection for total oral health – less pain, faster healing, safer care.',
        otherFocus: 'Cancer therapy and drug delivery systems'
      },
      'dentalpro': {
        name: 'DentalPro Innovations',
        founded: '2010',
        technology: 'Advanced Dental Technology',
        partnerships: 'Collaborating with top dental institutions worldwide',
        headquarters: 'New York',
        branch: 'London',
        motto: 'Innovating dental care through cutting-edge technology and research-driven solutions.',
        otherFocus: 'Prosthodontics and implantology'
      },
      'oraltech': {
        name: 'OralTech Solutions',
        founded: '2015',
        technology: 'Smart Oral Health Technology',
        partnerships: 'Partnering with leading oral healthcare research centers',
        headquarters: 'Munich',
        branch: 'Singapore',
        motto: 'Transforming oral healthcare with intelligent, patient-focused technology solutions.',
        otherFocus: 'Diagnostic equipment and digital imaging'
      },
      'dentacare': {
        name: 'DentaCare Systems',
        founded: '2009',
        technology: 'Comprehensive Dental Care Systems',
        partnerships: 'Global network of dental professionals and institutions',
        headquarters: 'Los Angeles',
        branch: 'Tokyo',
        motto: 'Comprehensive dental solutions for better oral health outcomes worldwide.',
        otherFocus: 'Endodontics and periodontics'
      },
      'smiletech': {
        name: 'SmileTech Dental',
        founded: '2012',
        technology: 'Cosmetic and Restorative Dentistry',
        partnerships: 'Leading aesthetic dentistry centers globally',
        headquarters: 'Dubai',
        branch: 'Paris',
        motto: 'Creating beautiful smiles through innovative cosmetic dentistry solutions.',
        otherFocus: 'Orthodontics and aesthetic treatments'
      }
    };
    return manufacturers[id] || manufacturers['nanocure'];
  };

  const manufacturer = getManufacturerData(manufacturerId || 'nanocure');

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
            <div className="inline-block bg-white rounded-lg shadow-xl p-6 border border-gray-100" style={{ width: '200px', height: '60px' }}>
              <div className="flex flex-col items-center justify-center h-full">
                <img src={Logo} alt="Oralieves Logo" style={{ maxHeight: '150px', width: 'auto' }} />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ color: '#ffffff', fontWeight: '300' }}>
              {manufacturer.name}
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
              PRODUCTS
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('facility');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-oralieves-primary transition-colors font-medium text-xs md:text-base whitespace-nowrap"
            >
              FACILITY
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
              Our Partner – <span className="text-oralieves-primary">{manufacturer.name}</span>
            </h2>
          </div>

          {/* Company Information & Motto Section */}
          <section className="mb-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Company Information */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="prose max-w-none">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                    Founded in <span className="font-semibold text-oralieves-primary">{manufacturer.founded}</span>, {manufacturer.name} specializes in advanced <span className="font-semibold">{manufacturer.technology}</span>. The company collaborates with {manufacturer.partnerships} to drive innovation in natural and nano-based oral care.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                    Its research and development also extend to {manufacturer.otherFocus}.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    With its head office in <span className="font-semibold">{manufacturer.headquarters}</span> and a branch in <span className="font-semibold">{manufacturer.branch}</span>, {manufacturer.name} continues to pioneer safe and effective oral health solutions worldwide.
                  </p>
                </div>
              </div>

              {/* Motto Section */}
              <div className="bg-gradient-to-br from-oralieves-primary/10 to-oralieves-secondary/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-oralieves-primary/20 shadow-lg flex items-center justify-center">
                <div className="text-center w-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-oralieves-primary to-oralieves-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl text-gray-800 mb-2" style={{ fontWeight: '400' }}>Our Motto</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">
                    "{manufacturer.motto}"
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Technology */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-oralieves-primary to-oralieves-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-gray-800 mb-1" style={{ fontWeight: '400' }}>Nano-Bio Fusion</h4>
                <p className="text-xs md:text-sm text-gray-600">Advanced technology for optimal oral care</p>
              </div>

              {/* Research */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-oralieves-secondary to-oralieves-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-gray-800 mb-1" style={{ fontWeight: '400' }}>Global Research</h4>
                <p className="text-xs md:text-sm text-gray-600">Collaborating with leading universities worldwide</p>
              </div>

              {/* Safety */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-oralieves-accent to-oralieves-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-gray-800 mb-1" style={{ fontWeight: '400' }}>Safe & Effective</h4>
                <p className="text-xs md:text-sm text-gray-600">Natural solutions for better oral health</p>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="mb-8" id="products">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl text-gray-800 mb-4 text-center" style={{ fontWeight: '400' }}>
                Our <span className="text-oralieves-primary">Products</span>
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
                    Revolutionary toothpaste infused with nanotechnology that penetrates deeper into enamel, providing superior protection against cavities and plaque buildup. Our advanced formula strengthens teeth while maintaining natural oral health.
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Key benefits include 24-hour protection, enamel remineralization, and gentle whitening action. Suitable for daily use by the entire family.
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
                    Advanced mouthwash solution with bio-active compounds that neutralize harmful bacteria while supporting beneficial oral microbiome. This non-alcoholic formula provides fresh breath for hours.
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Features include antibacterial action, gum health support, and natural flavoring. Clinically tested for effectiveness and safety.
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
                    Comprehensive oral care solution including specialized toothpaste, mouthwash, and dental floss. Each component is designed to work synergistically for optimal oral health results.
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Perfect for comprehensive daily care routine. Eco-friendly packaging and cruelty-free formulation make this an ethical choice for conscientious consumers.
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
                    Professional-grade whitening gel with nano-hydroxapatite particles that gently lift stains without damaging enamel. This innovative formula provides visible results in just 7 days.
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Safe for sensitive teeth and designed for at-home use. Includes custom-fitted trays for optimal application and maximum whitening effect.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Facility Section */}
          <section className="mb-8" id="facility">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl text-gray-800 mb-4 text-center" style={{ fontWeight: '400' }}>
                Our <span className="text-oralieves-primary">Facilities</span>
              </h2>
            </div>

            <div className="space-y-4 md:space-y-6">
              {/* Facility 1 */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-48 md:h-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop" 
                      alt="Manufacturing Facility"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl text-gray-800 mb-3" style={{ fontWeight: '500' }}>
                      State-of-the-Art Manufacturing Facility
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                      Our 50,000 square foot manufacturing facility in Seoul, South Korea, represents the pinnacle of oral care production technology. Equipped with ISO-certified clean rooms, automated production lines, and quality control laboratories.
                    </p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      The facility houses advanced nanotechnology labs where our research teams develop cutting-edge formulations. All production processes are monitored in real-time with AI-powered quality assurance systems ensuring every product meets our exacting standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Facility 2 */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-48 md:h-auto md:order-2">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" 
                      alt="Research Laboratory"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 md:order-1">
                    <h3 className="text-lg md:text-xl text-gray-800 mb-3" style={{ fontWeight: '500' }}>
                      Advanced Research & Development Center
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                      Our dedicated R&D center is staffed by 150+ scientists, chemists, and dental health experts collaborating with leading universities worldwide. The center features state-of-the-art microscopy, spectroscopy, and biotechnology equipment.
                    </p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Innovation is at our core - we hold over 50 patents in nanotechnology and bio-active oral care solutions. Our research partnerships with Seoul National University and MIT have yielded groundbreaking formulations now used in our products.
                    </p>
                  </div>
                </div>
              </div>

              {/* Facility 3 */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-48 md:h-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1550572017-edd951b55104?w=800&h=600&fit=crop" 
                      alt="Quality Control Lab"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl text-gray-800 mb-3" style={{ fontWeight: '500' }}>
                      Comprehensive Quality Control Laboratory
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                      Every batch of products undergoes rigorous testing in our fully equipped quality control laboratory. We employ advanced analytical techniques including HPLC, GC-MS, and particle size analysis to ensure product consistency and safety.
                    </p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Our quality assurance team conducts microbiological testing, stability studies, and clinical evaluations. We maintain certifications from FDA, CE, and KFDA, demonstrating our commitment to the highest international standards.
                    </p>
                  </div>
                </div>
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


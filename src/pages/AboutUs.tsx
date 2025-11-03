import React from 'react';
import Logo from '../images/Logo.png';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin
} from 'lucide-react';

interface AboutUsProps {
  setCurrentPage: (page: string, id?: string) => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ setCurrentPage }) => {
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
            <h2 className="text-5xl md:text-6xl" style={{ color: '#ffffff', fontWeight: '300' }}>
              About Oralieves
            </h2>
          </div>

          {/* Navigation Bar */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 pt-8 border-t border-white/20">
            <button 
              onClick={() => {
                document.getElementById('who-we-are')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-oralieves-primary transition-colors font-medium text-xs md:text-base whitespace-nowrap"
            >
              COMPANY BACKGROUND
            </button>
            <button 
              onClick={() => {
                document.getElementById('our-services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-oralieves-primary transition-colors font-medium text-xs md:text-base whitespace-nowrap"
            >
              SERVICES
            </button>
            <button 
              onClick={() => {
                document.getElementById('core-values')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-oralieves-primary transition-colors font-medium text-xs md:text-base whitespace-nowrap"
            >
              VALUES
            </button>
            <button 
              onClick={() => {
                document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-oralieves-primary transition-colors font-medium text-xs md:text-base whitespace-nowrap"
            >
              BLOGS
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
          {/* Section 1: Text Left, Image Right */}
          <section id="who-we-are" className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl text-gray-800 mb-6" style={{ fontWeight: '400' }}>Who We Are</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  At <span className="font-semibold text-oralieves-primary">ORALIEVES Pakistan</span>, we are a trusted B2B international service provider in the field of oral health care. We specialize in building long-term agency agreements with leading global manufacturers, representing their unique products that meet regulatory compliance, proven efficacy, and reliable supply assurance.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  As part of our role, we help manufacturers search for and appoint distributors for their products, whether on an exclusive or non-exclusive basis. This ensures smooth market entry and reliable product availability in Pakistan and beyond.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Our commitment extends to partnering with leading research institutions and manufacturers to bring innovative oral health solutions that meet the highest international standards. We work closely with regulatory bodies to ensure all products are properly certified and compliant.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  With years of experience in the healthcare industry, our team understands the unique challenges and opportunities in oral healthcare distribution across South Asia, making ORALIEVES the preferred partner for manufacturers seeking reliable market presence.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=500&fit=crop" 
                  alt="Healthcare Team" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Image Left, Text Right */}
          <section id="our-services" className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=500&fit=crop" 
                  alt="Manufacturing Excellence" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl text-gray-800 mb-6" style={{ fontWeight: '400' }}>Our Services</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-oralieves-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      <strong>Product Distribution:</strong> We provide comprehensive distribution services for oral healthcare products across clinics, pharmacies, and retail chains, ensuring reliable supply and market coverage.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-oralieves-secondary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      <strong>Market Entry Support:</strong> Our team assists manufacturers in navigating regulatory requirements, identifying distribution partners, and establishing successful market presence in Pakistan and beyond.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-oralieves-accent rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      <strong>Training & Education:</strong> We offer educational programs and training sessions for healthcare professionals to ensure proper product knowledge and optimal patient care outcomes.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-oralieves-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      <strong>Quality Assurance:</strong> All products undergo rigorous quality checks and compliance verification to meet international standards and regulatory requirements.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Core Values - Center Focus */}
          <section id="core-values" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-gray-800 mb-4" style={{ fontWeight: '400' }}>Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide us in every partnership and decision
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Reliability */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-oralieves-primary/30 group">
                <div className="w-16 h-16 bg-gradient-to-br from-oralieves-primary to-oralieves-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl text-gray-800 mb-4 text-center" style={{ fontWeight: '400' }}>Reliability</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Delivering consistent results you can trust. Our commitment to reliability ensures that every partnership is built on a foundation of dependability, timely delivery, and unwavering quality standards that clients and partners can count on.
                </p>
              </div>

              {/* Sustainability */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-oralieves-secondary/30 group">
                <div className="w-16 h-16 bg-gradient-to-br from-oralieves-secondary to-oralieves-accent rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl text-gray-800 mb-4 text-center" style={{ fontWeight: '400' }}>Sustainability</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Building long-term partnerships with a focus on ethical growth. We prioritize sustainable business practices that benefit communities, protect the environment, and create lasting value for all stakeholders involved.
                </p>
              </div>

              {/* Transparency */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-oralieves-accent/30 group">
                <div className="w-16 h-16 bg-gradient-to-br from-oralieves-primary to-oralieves-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl text-gray-800 mb-4 text-center" style={{ fontWeight: '400' }}>Transparency</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Open and honest business practices. We believe in maintaining clear communication, full disclosure, and ethical conduct in all our business relationships, ensuring trust and mutual respect with all our partners.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Strategic Value */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-oralieves-primary to-oralieves-secondary rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontWeight: '400' }}>Our Strategic Value</h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-xl text-white/90 leading-relaxed">
                  Small but Focused – A streamlined approach that ensures efficiency, attention to detail, and personalized service
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Blogs */}
          <section id="blogs" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-gray-800 mb-4" style={{ fontWeight: '400' }}>Latest Blogs & Insights</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest trends, innovations, and insights in oral healthcare
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Blog 1 */}
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="overflow-hidden h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=400&fit=crop" 
                    alt="Oral Health Innovation" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-oralieves-primary uppercase tracking-wide">Innovation</span>
                  <h3 className="text-xl text-gray-800 mt-3 mb-2 group-hover:text-oralieves-primary transition-colors" style={{ fontWeight: '400' }}>
                    The Future of Nano-Enhanced Oral Care
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    Explore how nanotechnology is revolutionizing oral healthcare, delivering faster healing and improved patient outcomes through advanced product formulations.
                  </p>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage('blog', '1');
                    }}
                    className="text-oralieves-primary font-semibold text-sm hover:underline inline-flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </article>

              {/* Blog 2 */}
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="overflow-hidden h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop" 
                    alt="Healthcare Distribution" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-oralieves-secondary uppercase tracking-wide">Industry</span>
                  <h3 className="text-xl text-gray-800 mt-3 mb-2 group-hover:text-oralieves-primary transition-colors" style={{ fontWeight: '400' }}>
                    Building Successful Distribution Networks
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    Learn about the key strategies for establishing effective distribution channels in the oral healthcare market and ensuring product accessibility.
                  </p>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage('blog', '2');
                    }}
                    className="text-oralieves-primary font-semibold text-sm hover:underline inline-flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </article>

              {/* Blog 3 */}
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="overflow-hidden h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?w=600&h=400&fit=crop" 
                    alt="Patient Care" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-oralieves-accent uppercase tracking-wide">Wellness</span>
                  <h3 className="text-xl text-gray-800 mt-3 mb-2 group-hover:text-oralieves-primary transition-colors" style={{ fontWeight: '400' }}>
                    Preventive Oral Care Best Practices
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    Discover evidence-based approaches to preventive oral healthcare and how modern products are supporting better patient outcomes.
                  </p>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage('blog', '3');
                    }}
                    className="text-oralieves-primary font-semibold text-sm hover:underline inline-flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </article>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Through this value-driven approach, <span className="font-semibold text-oralieves-primary">ORALIEVES Pakistan</span> continues to bridge international innovation with local distribution, making us the ideal partner for oral care manufacturers and distributors in Pakistan.
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

export default AboutUs;


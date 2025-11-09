import React from 'react';
import Logo from '../images/Logo.png';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Globe2,
  Handshake,
  ShieldCheck
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
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
        style={{ 
          background: 'linear-gradient(135deg, rgb(79, 209, 199) 0%, rgb(15, 150, 150) 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0, rgba(255,255,255,0) 45%)' }} />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left lg:pr-8">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/30 justify-center">
              <div className="flex items-center justify-center bg-white rounded-full w-12 h-12 shadow-lg">
                <img src={Logo} alt="Oralieves Logo" className="h-8 w-auto" />
              </div>
              <span className="uppercase tracking-widest text-white text-xs font-semibold">Oralieves Pakistan</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight mb-6">
              ORALIEVES — Your Partner in Health Care
            </h1>
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-10">
              Building trusted global partnerships for a healthier and more connected world.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setCurrentPage('clients')}
                className="btn-primary px-6 py-2.5 text-base font-semibold bg-white text-oralieves-primary hover:bg-oralieves-light hover:text-oralieves-primary"
              >
                Explore Partnership Opportunities
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-6 py-2.5 text-base font-semibold text-white border border-white/70 rounded-full hover:bg-white/10 transition-colors"
              >
                Contact Us Today
              </button>
            </div>
          </div>
          <div className="relative max-w-md mx-auto lg:max-w-none">
            <div className="absolute -top-8 -right-6 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=600&fit=crop"
                alt="Collaborative professionals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white/80 rounded-2xl shadow-lg px-6 py-4 border border-oralieves-primary/20">
              <p className="text-sm font-medium text-oralieves-primary uppercase tracking-wide">Trusted Global Partnerships</p>
              <p className="text-xs text-gray-600 mt-1">Connecting manufacturers and distributors worldwide</p>
              </div>
            </div>
          </div>
        <div className="relative max-w-7xl mx-auto mt-14 flex flex-wrap justify-center items-center gap-3 md:gap-6 pt-6 border-t border-white/30">
            <button 
              onClick={() => {
              document.getElementById('company-background')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-oralieves-primary transition-colors font-medium text-xs md:text-base whitespace-nowrap"
            >
              COMPANY BACKGROUND
            </button>
            <button 
              onClick={() => {
              document.getElementById('our-core-services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-oralieves-primary transition-colors font-medium text-xs md:text-base whitespace-nowrap"
            >
              SERVICES
            </button>
          <button
              onClick={() => {
              document.getElementById('why-choose')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-oralieves-primary transition-colors font-medium text-xs md:text-base whitespace-nowrap"
            >
            WHY ORALIEVES
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
              onClick={() => {
              document.getElementById('join-network')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-oralieves-primary transition-colors font-medium text-xs md:text-base whitespace-nowrap"
            >
            JOIN THE NETWORK
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="text-white hover:text-oralieves-primary transition-colors font-medium text-xs md:text-base whitespace-nowrap"
            >
              CONTACT
            </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Company Background */}
          <section id="company-background" className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl text-gray-800 mb-6 font-light">ORALIEVES Pakistan</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Based in Karachi, Pakistan, ORALIEVES is a partnership-based international service company connecting manufacturers with distributors—our valued clients—for the marketing of their products.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We focus on fostering long-term partnerships built on trust, integrity, and shared goals—helping our global clients grow while advancing manufacturers&apos; health care standards worldwide.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-oralieves-primary/10">
                  <p className="text-sm uppercase tracking-widest text-oralieves-primary font-semibold mb-2">Our Promise</p>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Tailored solutions, trusted collaboration, and market-ready execution for every partner.
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-oralieves-primary/10">
                  <p className="text-sm uppercase tracking-widest text-oralieves-primary font-semibold mb-2">Global Outlook</p>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    A network of international manufacturers and local distributors aligned around quality care.
                </p>
              </div>
              </div>
            </div>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-oralieves-primary/10 to-oralieves-secondary/5 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=650&fit=crop"
                  alt="Professional collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Core Services */}
          <section id="our-core-services">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold uppercase tracking-widest text-oralieves-primary">Our Core Services</span>
              <h2 className="text-3xl md:text-4xl text-gray-800 mt-4 font-light">What We Deliver</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-oralieves-primary/10 hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center rounded-full bg-oralieves-primary/10 text-oralieves-primary w-14 h-14 mb-6">
                  <Globe2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl text-gray-800 font-light mb-4">Global Connections</h3>
                <p className="text-gray-700 leading-relaxed">
                  We connect clients with international manufacturers of oral care products that comply with global quality and regulatory standards.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-oralieves-primary/10 hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center rounded-full bg-oralieves-secondary/10 text-oralieves-secondary w-14 h-14 mb-6">
                  <Handshake className="w-7 h-7" />
                </div>
                <h3 className="text-2xl text-gray-800 font-light mb-4">Agency Partnerships</h3>
                <p className="text-gray-700 leading-relaxed">
                  We form long-term agency agreements with manufacturers offering unique, compliant, and high-efficacy products, ensuring consistent supply and reliable collaboration.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-oralieves-primary/10 hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center rounded-full bg-oralieves-accent/10 text-oralieves-accent w-14 h-14 mb-6">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-2xl text-gray-800 font-light mb-4">Distributor Support & Compliance</h3>
                <p className="text-gray-700 leading-relaxed">
                  We assist in appointing distributors (exclusive or non-exclusive) and provide full support with regulatory documentation, certifications, and marketing materials.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="why-choose" className="bg-gradient-to-br from-white via-oralieves-light/30 to-oralieves-secondary/20 rounded-3xl p-10 md:p-16 shadow-xl border border-oralieves-primary/10">
            <div className="max-w-4xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-widest text-oralieves-primary">Why Choose ORALIEVES</span>
              <h2 className="text-3xl md:text-4xl text-gray-800 mt-5 font-light">A Partnership You Can Trust</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-6 text-gray-700 text-lg leading-relaxed">
                <div>
                  <p className="mb-4">• Global reach with a trusted professional network</p>
                  <p className="mb-4">• Ethical and enduring business partnerships</p>
                  <p className="mb-4">• Tailored solutions aligned with your business goals</p>
                </div>
                <div>
                  <p className="mb-4">• Full compliance and documentation support</p>
                  <p className="mb-4">• Marketing assistance to grow your presence</p>
                  <p>• Responsive guidance from a dedicated oral health care team</p>
                </div>
              </div>
            </div>
          </section>

          {/* Blogs */}
          <section id="blogs" className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-widest text-oralieves-primary">Latest Blogs & Insights</span>
              <h2 className="text-3xl md:text-4xl text-gray-800 mt-4 font-light">Stay Informed with Oral Health Trends</h2>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Explore our insights on innovation, distribution, and preventive care across the oral health ecosystem.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
                <div className="overflow-hidden h-48">
                  <img
                    src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=400&fit=crop"
                    alt="Oral Health Innovation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-oralieves-primary uppercase tracking-wide">Innovation</span>
                  <h3 className="text-xl text-gray-800 mt-3 mb-2 group-hover:text-oralieves-primary transition-colors font-semibold">
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

              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
                <div className="overflow-hidden h-48">
                  <img
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop"
                    alt="Healthcare Distribution"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-oralieves-secondary uppercase tracking-wide">Industry</span>
                  <h3 className="text-xl text-gray-800 mt-3 mb-2 group-hover:text-oralieves-primary transition-colors font-semibold">
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

              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
                <div className="overflow-hidden h-48">
                  <img
                    src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?w=600&h=400&fit=crop"
                    alt="Patient Care"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-oralieves-accent uppercase tracking-wide">Wellness</span>
                  <h3 className="text-xl text-gray-800 mt-3 mb-2 group-hover:text-oralieves-primary transition-colors font-semibold">
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

          {/* Join Network */}
          <section id="join-network" className="text-center">
            <div className="max-w-3xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-widest text-oralieves-primary">Join the ORALIEVES Network</span>
              <h2 className="text-3xl md:text-4xl text-gray-800 mt-4 font-light">
                Partner with ORALIEVES today and join a global community dedicated to healthier lives, innovation, and collaboration in the oral health care sector.
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                  <button 
                  onClick={() => setCurrentPage('clients')}
                  className="btn-primary px-7 py-2.5 text-base font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Start a Partnership
                  </button>
                  <button 
                  onClick={() => setCurrentPage('contact')}
                  className="px-7 py-2.5 text-base font-semibold text-oralieves-primary border border-oralieves-primary rounded-full hover:bg-oralieves-primary/10 transition-colors"
                >
                  Contact Our Team
                  </button>
                </div>
              <div className="mt-12 grid sm:grid-cols-3 gap-6 text-gray-600 text-sm">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow border border-gray-100">
                  <p className="uppercase font-semibold text-oralieves-primary tracking-widest text-xs mb-2">Head Office</p>
                  <p>Karachi, Pakistan</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow border border-gray-100">
                  <p className="uppercase font-semibold text-oralieves-primary tracking-widest text-xs mb-2">Email</p>
                  <p>info@oralieves.com</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow border border-gray-100">
                  <p className="uppercase font-semibold text-oralieves-primary tracking-widest text-xs mb-2">Website</p>
                  <p>www.oralieves.com</p>
                </div>
                </div>
            </div>
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


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ManufacturersProps {
  setCurrentPage: (page: string) => void;
}

const Manufacturers: React.FC<ManufacturersProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-oralieves-light via-white to-oralieves-accent">
      <Navbar setCurrentPage={setCurrentPage} currentPage="manufacturers" />

      {/* Banner Section */}
      <section className="bg-gradient-to-r from-oralieves-primary to-oralieves-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About The Manufacturers</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Partnering with Leading Global Manufacturers
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Sub Menu */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
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
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Motto</h3>
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
                <h4 className="font-bold text-gray-800 mb-2">Nano-Bio Fusion</h4>
                <p className="text-sm text-gray-600">Advanced technology for optimal oral care</p>
              </div>

              {/* Research */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-oralieves-secondary to-oralieves-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Global Research</h4>
                <p className="text-sm text-gray-600">Collaborating with leading universities worldwide</p>
              </div>

              {/* Safety */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-oralieves-accent to-oralieves-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Safe & Effective</h4>
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

      <Footer />
    </div>
  );
};

export default Manufacturers;


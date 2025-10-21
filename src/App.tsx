import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-oralieves-light via-white to-oralieves-accent">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-oralieves-primary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-oralieves-secondary rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-oralieves-accent rounded-full"></div>
              </div>
      <div>
                <h1 className="text-2xl font-bold text-gray-800">ORALIEVES</h1>
                <p className="text-sm text-gray-600">We help manage your pains</p>
              </div>
      </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-oralieves-primary transition-colors">About Us</a>
              <a href="#manufacturers" className="text-gray-700 hover:text-oralieves-primary transition-colors">Manufacturers</a>
              <a href="#clients" className="text-gray-700 hover:text-oralieves-primary transition-colors">Clients</a>
              <a href="#contact" className="btn-primary">Contact</a>
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

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Global Partner for Innovative<br />
                <span className="text-oralieves-primary">Oral Healthcare</span><br />
                Solutions
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                B2B Supply Partner for Clinics, Distributors & Retail Chains
              </p>
            </div>

            {/* Three Main Sections */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* About Us */}
              <div id="about" className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-oralieves-primary to-oralieves-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">About Us</h3>
                <p className="text-gray-600 text-center mb-6">
                  We are dedicated to providing innovative oral healthcare solutions that improve patient outcomes and enhance clinical practices worldwide.
                </p>
                <div className="text-center">
                  <button className="btn-secondary">Learn More</button>
                </div>
              </div>

              {/* Manufacturers */}
              <div id="manufacturers" className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-oralieves-secondary to-oralieves-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7h-8v6h8V7zm-2 4h-4V9h4v2zm4.5-9H2.5C1.67 2 1 2.67 1 3.5v17C1 21.33 1.67 22 2.5 22h19c.83 0 1.5-.67 1.5-1.5v-17C23 2.67 22.33 2 21.5 2zM21 20H3V4h18v16z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Manufacturers</h3>
                <p className="text-gray-600 text-center mb-6">
                  Partner with leading manufacturers to deliver high-quality oral healthcare products and innovative solutions to healthcare providers.
                </p>
                <div className="text-center">
                  <button className="btn-secondary">Explore Partners</button>
                </div>
              </div>

              {/* Clients */}
              <div id="clients" className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-oralieves-accent to-oralieves-light rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10.5V22h2v-6h2v6h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9.5c0-.83-.67-1.5-1.5-1.5S6 8.67 6 9.5V15H4.5v7h3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Clients</h3>
                <p className="text-gray-600 text-center mb-6">
                  Serving clinics, distributors, and retail chains with comprehensive oral healthcare solutions tailored to their specific needs.
                </p>
                <div className="text-center">
                  <button className="btn-secondary">View Services</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Oralieves?</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine innovation, quality, and reliability to deliver exceptional oral healthcare solutions.
        </p>
      </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-oralieves-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Quality Assurance</h4>
                <p className="text-sm text-gray-600">Certified products meeting international standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-oralieves-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Fast Delivery</h4>
                <p className="text-sm text-gray-600">Quick and reliable shipping worldwide</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-oralieves-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">Cutting-edge technology and solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-oralieves-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
                <p className="text-sm text-gray-600">24/7 customer support and assistance</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-oralieves-dark to-oralieves-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-oralieves-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold">ORALIEVES</h4>
              </div>
              <p className="text-oralieves-light mb-4">
                Leading provider of innovative oral healthcare solutions for clinics, distributors, and retail chains worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#about" className="text-oralieves-light hover:text-white transition-colors">About Us</a></li>
                <li><a href="#manufacturers" className="text-oralieves-light hover:text-white transition-colors">Manufacturers</a></li>
                <li><a href="#clients" className="text-oralieves-light hover:text-white transition-colors">Clients</a></li>
                <li><a href="#contact" className="text-oralieves-light hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-oralieves-light">
                <p>📧 info@oralieves.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📍 Global Headquarters</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-oralieves-light">
            <p>&copy; 2024 Oralieves. All rights reserved. | Manufacturer of Personal Care Products</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

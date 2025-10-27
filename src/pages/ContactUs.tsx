import React, { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin
} from 'lucide-react';

interface ContactUsProps {
  setCurrentPage: (page: string) => void;
}

const ContactUs: React.FC<ContactUsProps> = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    country: ''
  });

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", label: "YouTube" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add form submission logic here
  };

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
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ 
          background: 'linear-gradient(135deg, rgb(79, 209, 199) 0%, rgb(15, 150, 150) 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-white mb-6" style={{ fontWeight: '400' }}>Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with ORALIEVES Pakistan
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-oralieves-primary focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-oralieves-primary focus:outline-none transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Contact Number Field */}
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-oralieves-primary focus:outline-none transition-colors"
                  placeholder="Enter your contact number"
                />
              </div>

              {/* Country Field */}
              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-oralieves-primary focus:outline-none transition-colors"
                >
                  <option value="">Select your country</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-oralieves-primary to-oralieves-secondary hover:from-oralieves-dark hover:to-oralieves-primary text-white font-semibold py-2 px-12 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl text-gray-800 mb-6 text-center" style={{ fontWeight: '400' }}>Our Contact Information</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border-2 border-oralieves-primary/20 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-oralieves-primary to-oralieves-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-700 text-sm">info@oralieves.com</p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border-2 border-oralieves-secondary/20 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-oralieves-secondary to-oralieves-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                  <p className="text-gray-700 text-sm">+1 (555) 123-4567</p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border-2 border-oralieves-primary/20 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-oralieves-primary to-oralieves-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-700 text-sm">Global Headquarters</p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border-2 border-oralieves-primary/20 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-oralieves-primary to-oralieves-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Business Hours</h4>
                  <p className="text-gray-700 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
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

export default ContactUs;


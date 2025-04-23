import { useState } from 'react';
import React from "react";
import { toast } from 'react-toastify';
import {
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    car: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Your message has been submitted!');
    console.log('Contact Form Data:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      car: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header with animated gradient */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
            Contact Urbanhire
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help! Reach out anytime.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    placeholder="+254 700 000000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="5"
                    required
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500 mt-8">
          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Connect With Us</h2>
              <p className="text-gray-600 mb-6">Follow us on social media for updates and special offers</p>
              <div className="flex justify-center gap-6 text-3xl">
                <a href="https://www.youtube.com/@TimooKiproo" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                  <FaYoutube className="text-red-600 hover:text-red-700" />
                </a>  
                <a href="https://www.tiktok.com/@timoo.og?_t=ZM-8uxd2AHuqLF&_r=1" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                  <FaTiktok className="text-black hover:text-gray-800" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                  <FaFacebook className="text-blue-600 hover:text-blue-700" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                  <FaTwitter className="text-blue-400 hover:text-blue-500" />
                </a>
                <a href="https://wa.me/message/HY3BSGNOGRCNK1" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                  <FaWhatsapp className="text-green-500 hover:text-green-600" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                  <FaInstagram className="text-pink-600 hover:text-pink-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import {
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.postimg.cc/6qg8857s/background-2.png')" }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-60 text-white p-4 pt-20 pb-12">
          <div className="w-full max-w-4xl mx-auto space-y-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient">
              Urbanhire
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              The easiest way to hire the perfect car for your journey.
              <br />
              Discover, choose, and hire from a wide range of cars—tailored for your needs.
            </p>
            <a
              href="/cars"
              className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold rounded-lg transition-all shadow-lg"
            >
              View Our Fleet
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Why Choose Urbanhire?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're redefining car rental with exceptional service and quality vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🚗',
                title: 'Wide Selection',
                desc: 'From luxury sedans to practical SUVs, we offer diverse vehicles for every occasion.',
                color: 'blue'
              },
              {
                icon: '💰',
                title: 'Affordable Prices',
                desc: 'Competitive pricing without compromising on quality or service standards.',
                color: 'green'
              },
              {
                icon: '🛡️',
                title: 'Quality & Safety',
                desc: 'Regularly serviced and fully insured vehicles for your peace of mind.',
                color: 'purple'
              },
              {
                icon: '📞',
                title: '24/7 Support',
                desc: 'Our dedicated team ensures a smooth and hassle-free experience anytime.',
                color: 'yellow'
              }
            ].map((item, i) => (
              <div key={i} className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-${item.color}-500`}>
                <div className="flex items-start">
                  <span className="text-3xl mr-4">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Visit Us
              </h2>
              <p className="text-gray-600">Come see our fleet in person or get in touch</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-blue-100 p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Location</h3>
                  <address className="not-italic text-gray-600">
                    <p>123 Car Hire Street</p>
                    <p>Nairobi, Kenya</p>
                    <p className="mt-4"><strong>Hours:</strong> Mon-Sat, 9AM - 6PM</p>
                  </address>
                </div>

                <div className="bg-purple-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Contact Us</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <a href="tel:+254751733402" className="hover:text-blue-600 transition-colors">
                        +254 751 733 402
                      </a>
                    </p>
                    <p>
                      <a href="mailto:tchemweno18@gmail.com" className="hover:text-blue-600 transition-colors">
                        tchemweno18@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Urbanhire Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.194395103075!2d36.8219464!3d-1.2920655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f5cf9e10c1%3A0x7ed89686ea6b9910!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1682173171344!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Footer */}
       <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Urbanhire
              </h3>
              <p className="text-gray-400">Your trusted car rental partner in Kenya</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/cars" className="hover:text-white transition-colors">View Cars</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.youtube.com/@TimooKiproo" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                  <FaYoutube className="text-red-600 hover:text-red-700 text-2xl" />
                </a>  
                <a href="https://www.tiktok.com/@timoo.og?_t=ZM-8uxd2AHuqLF&_r=1" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                  <FaTiktok className="text-black hover:text-gray-800 text-2xl" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                  <FaFacebook className="text-blue-600 hover:text-blue-700 text-2xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                  <FaTwitter className="text-blue-400 hover:text-blue-500 text-2xl" />
                </a>
                <a href="https://wa.me/message/HY3BSGNOGRCNK1" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                  <FaWhatsapp className="text-green-500 hover:text-green-600 text-2xl" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                  <FaInstagram className="text-pink-600 hover:text-pink-700 text-2xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Timothy Kiprop. All rights reserved.</p>
            <div className="mt-2">
              <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
              <span className="mx-2">•</span>
              <a href="#" className="text-sm hover:text-white transition-colors">Call me: 0751733402</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
import React from "react";

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4">
    <div className="max-w-4xl mx-auto">
      {/* Header with animated gradient */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
          About Urbanhire
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Redefining urban mobility through innovation and exceptional service
        </p>
      </div>

      {/* Main content with card styling */}
      <div className="space-y-8">
        {/* Our Story */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Urbanhire was founded in 2025 with a vision to redefine urban mobility. What began as a simple idea—to make car rental more accessible and user-friendly—has grown into one of the most trusted platforms in the region. Our commitment to convenience, quality, and customer satisfaction drives everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
          <div className="flex items-start">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To provide safe, reliable, and stylish car hire services through our <strong>IPADS</strong> principle:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {['Inspect', 'Prospect', 'Analyze', 'Deliver', 'Success'].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-2 rounded-lg text-center">
                    <span className="font-medium text-blue-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Urbanhire?</h2>
              <ul className="space-y-3">
                {[
                  { icon: '🚗', text: 'Diverse fleet from economy to luxury vehicles' },
                  { icon: '🔒', text: 'Secure online booking with instant confirmation' },
                  { icon: '👨‍🔧', text: 'Rigorous 150-point vehicle inspections' },
                  { icon: '📍', text: 'Convenient locations across the city' },
                  { icon: '📞', text: '24/7 customer support with real humans' }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span className="text-gray-600">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
          <div className="flex items-start">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                We're building a future where car hire is as seamless as ordering coffee. Through technology and customer-centric design, we aim to make Urbanhire the most intuitive mobility platform—whether you need wheels for an hour, a day, or a month.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-3 text-white">Join the Urbanhire Movement</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Become part of a community that values freedom, flexibility, and smart urban living.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default About;
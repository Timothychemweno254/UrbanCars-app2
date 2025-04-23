import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://urbancars-app2.onrender.com/Api/cars')
      .then((response) => {
        setCars(response.data);
        setFilteredCars(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the cars!', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const results = cars.filter(car =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(results);
  }, [searchTerm, cars]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading available cars...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated gradient */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Our Fleet
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our premium selection of vehicles for your next journey
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by car name..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {filteredCars.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <p className="text-gray-600">
              {searchTerm ? 
                `No cars found matching "${searchTerm}"` : 
                'No cars available at the moment. Please check back later.'
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCars.map((car) => (
              <div 
                key={car.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-blue-500"
              >
                {/* Car Name at the top */}
                <div className="px-4 pt-4">
                  <h3 className="text-navy-800 text-xl font-bold">
                    {car.name}
                  </h3>
                </div>

                {/* Car Image */}
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={car.image || "/path/to/default-image.jpg"}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Daily Rate</span>
                    <span className="text-xl font-bold text-blue-600">Ksh {car.price}</span>
                  </div>

                  {/* View Car Details Button */}
                  <Link
                    to={`/car/${car.id}`}
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsPage;
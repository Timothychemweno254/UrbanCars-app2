import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CarDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    images: ['', ''],
    booking: null,
    hire: null // Added hire field to car state
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showHireForm, setShowHireForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    minutes: 30
  });
  const [hireData, setHireData] = useState({
    name: '',
    idNo: '',
    phoneNo: '',
    licenceNo: '',
    returnDate: ''
  });
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    axios
      .get(`https://urbancars-app2.onrender.com/Api/cars/${id}`)
      .then((response) => {
        setCar(response.data);
        setIsLoading(false);
        
        // If there's an active booking, calculate time left
        if (response.data.booking) {
          const endTime = new Date(response.data.booking.endTime).getTime();
          const now = new Date().getTime();
          const remaining = Math.max(0, Math.floor((endTime - now) / 1000));
          setTimeLeft(remaining);
        }
      })
      .catch((error) => {
        console.error('Error fetching car details:', error);
        toast.error('Failed to load car details', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, [id]);

  // Countdown timer effect
  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && car.booking) {
      // Booking expired
      handleCancelBooking();
    }
    
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleImagesChange = (e) => {
    const { name, value } = e.target;
    const newImages = [...car.images];
    newImages[name] = value;
    setCar((prevCar) => ({
      ...prevCar,
      images: newImages,
    }));
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHireChange = (e) => {
    const { name, value } = e.target;
    setHireData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://urbancars-app2.onrender.com/Api/cars/${id}`, car)
      .then(() => {
        setIsEditing(false);
        toast.success('Car details updated successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error('Error updating car:', error);
        toast.error('Failed to update car details', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleDelete = () => {
    toast.warning(
      <div>
        <p>Are you sure you want to delete {car.name}?</p>
        <div className="flex justify-center gap-4 mt-4">
          <button 
            onClick={() => {
              toast.dismiss();
              confirmDelete();
            }}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Yes, Delete
          </button>
          <button 
            onClick={() => toast.dismiss()}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeButton: false,
        draggable: false,
        closeOnClick: false,
      }
    );
  };

  const confirmDelete = () => {
    setIsDeleting(true);
    axios
      .delete(`https://urbancars-app2.onrender.com/Api/cars/${id}`)
      .then(() => {
        toast.success(`${car.name} deleted successfully!`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: () => navigate('/cars')
        });
      })
      .catch((error) => {
        console.error('Error deleting car:', error);
        toast.error(`Failed to delete ${car.name}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  const handleBookCar = () => {
    setShowBookingForm(true);
  };

  const handleHireCar = () => {
    setShowHireForm(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    const now = new Date();
    const endTime = new Date(now.getTime() + bookingData.minutes * 60000);
    
    const updatedCar = {
      ...car,
      booking: {
        name: bookingData.name,
        endTime: endTime.toISOString()
      }
    };
    
    axios
      .put(`https://urbancars-app2.onrender.com/Api/cars/${id}`, updatedCar)
      .then(() => {
        setCar(updatedCar);
        setTimeLeft(bookingData.minutes * 60);
        setShowBookingForm(false);
        toast.success(`Car booked successfully for ${bookingData.minutes} minutes!`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error('Error booking car:', error);
        toast.error('Failed to book car', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleHireSubmit = (e) => {
    e.preventDefault();
    
    const updatedCar = {
      ...car,
      hire: {
        ...hireData,
        hireDate: new Date().toISOString()
      }
    };
    
    axios
      .put(`https://urbancars-app2.onrender.com/Api/cars/${id}`, updatedCar)
      .then(() => {
        setCar(updatedCar);
        setShowHireForm(false);
        toast.success(`Car hired successfully until ${hireData.returnDate}!`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error('Error hiring car:', error);
        toast.error('Failed to hire car', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleCancelBooking = () => {
    const updatedCar = {
      ...car,
      booking: null
    };
    
    axios
      .put(`https://urbancars-app2.onrender.com/Api/cars/${id}`, updatedCar)
      .then(() => {
        setCar(updatedCar);
        setTimeLeft(0);
        toast.success('Booking cancelled successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error('Error cancelling booking:', error);
        toast.error('Failed to cancel booking', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleCancelHire = () => {
    const updatedCar = {
      ...car,
      hire: null
    };
    
    axios
      .put(`https://urbancars-app2.onrender.com/Api/cars/${id}`, updatedCar)
      .then(() => {
        setCar(updatedCar);
        toast.success('Hire cancelled successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error('Error cancelling hire:', error);
        toast.error('Failed to cancel hire', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading car details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with animated gradient */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {car.name} Details
          </h1>
          <button 
            onClick={() => navigate('/cars')}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            &larr; Back to all cars
          </button>
        </div>

        {!isEditing ? (
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {car.images.map((img, index) => (
                    img && (
                      <img 
                        key={index}
                        src={img} 
                        alt={`${car.name} detail ${index + 1}`} 
                        className="w-full h-32 object-cover rounded-lg shadow-md"
                      />
                    )
                  ))}
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold text-gray-800">Ksh {car.price}/day</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    car.booking 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : car.hire
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {car.booking ? 'Booked' : car.hire ? 'Hired' : 'Available'}
                  </span>
                </div>
                
                <div className="prose max-w-none text-gray-600 mb-8">
                  <p>{car.description}</p>
                </div>

                {/* Booking info */}
                {car.booking && (
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-blue-800">Booked by: {car.booking.name}</p>
                        <p className="text-sm text-blue-600">Time remaining: {formatTime(timeLeft)}</p>
                      </div>
                      <button
                        onClick={handleCancelBooking}
                        className="px-4 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors text-sm"
                      >
                        Cancel Booking
                      </button>
                    </div>
                  </div>
                )}

                {/* Hire info */}
                {car.hire && (
                  <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                    <div className="space-y-2">
                      <p className="font-medium text-purple-800">Hired by: {car.hire.name}</p>
                      <p className="text-sm text-purple-600">ID No: {car.hire.idNo}</p>
                      <p className="text-sm text-purple-600">Phone: {car.hire.phoneNo}</p>
                      <p className="text-sm text-purple-600">Licence No: {car.hire.licenceNo}</p>
                      <p className="text-sm text-purple-600">Return Date: {new Date(car.hire.returnDate).toLocaleDateString()}</p>
                    </div>
                    <button
                      onClick={handleCancelHire}
                      className="mt-3 px-4 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors text-sm"
                    >
                      Cancel Hire
                    </button>
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md"
                  >
                    Edit Car
                  </button>
                  <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className={`px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-md ${isDeleting ? 'opacity-70' : ''}`}
                  >
                    {isDeleting ? 'Deleting...' : 'Delete Car'}
                  </button>
                  {!car.booking && !car.hire && (
                    <button
                      onClick={handleBookCar}
                      className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md"
                    >
                      Book Car
                    </button>
                  )}
                </div>

                {/* Hire button at bottom right */}
                {!car.booking && !car.hire && (
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={handleHireCar}
                      className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-md"
                    >
                      Hire Car
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit {car.name}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Car Name</label>
                  <input
                    type="text"
                    name="name"
                    value={car.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Daily Price (Ksh)</label>
                  <input
                    type="number"
                    name="price"
                    value={car.price}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="block text-gray-700 font-medium">Description</label>
                  <textarea
                    name="description"
                    value={car.description}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Main Image URL</label>
                  <input
                    type="url"
                    name="image"
                    value={car.image}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Interior Image URL</label>
                  <input
                    type="url"
                    name="0"
                    value={car.images[0]}
                    onChange={handleImagesChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Exterior Image URL</label>
                  <input
                    type="url"
                    name="1"
                    value={car.images[1]}
                    onChange={handleImagesChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Booking Form Modal */}
        {showBookingForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Book {car.name}</h2>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleBookingChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Booking Time (minutes)</label>
                  <input
                    type="number"
                    name="minutes"
                    min="1"
                    max="1440" // 24 hours
                    value={bookingData.minutes}
                    onChange={handleBookingChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="flex justify-end gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowBookingForm(false)}
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all shadow-md"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Hire Form Modal */}
        {showHireForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Hire {car.name}</h2>
              <form onSubmit={handleHireSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={hireData.name}
                    onChange={handleHireChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">ID Number</label>
                  <input
                    type="text"
                    name="idNo"
                    value={hireData.idNo}
                    onChange={handleHireChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNo"
                    value={hireData.phoneNo}
                    onChange={handleHireChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Driving Licence Number</label>
                  <input
                    type="text"
                    name="licenceNo"
                    value={hireData.licenceNo}
                    onChange={handleHireChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Return Date</label>
                  <input
                    type="date"
                    name="returnDate"
                    value={hireData.returnDate}
                    onChange={handleHireChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="flex justify-end gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowHireForm(false)}
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-md"
                  >
                    Confirm Hire
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CarDetailPage;
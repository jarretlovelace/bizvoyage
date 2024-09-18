import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import { BsFillHouseFill, BsFillCalendarFill } from 'react-icons/bs';

const BookTrip = () => {
  const navigate = useNavigate();

  // Form data for search filters
  const [tripData, setTripData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    flight: false,
    hotel: false,
    carRental: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripData({
      ...tripData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass trip data to results page or API
    console.log('Trip search:', tripData);
    navigate('/trip-results'); // Redirect to results page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Hero Section */}
      <div className="w-full bg-cover bg-center h-64" style={{ backgroundImage: `url(/src/images/ai_image4.jpeg)` }}>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Book Your Next Business Trip</h1>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 -mt-16 relative z-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-red-700 mb-4">Get the Most, Without Breaking the Bank</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Destination */}
          <div className="flex flex-col">
            <label htmlFor="destination" className="text-sm font-medium">Destination</label>
            <div className="relative">
              <input
                type="text"
                name="destination"
                id="destination"
                value={tripData.destination}
                onChange={handleInputChange}
                placeholder="City or airport"
                className="mt-1 block w-full p-3 border rounded-md shadow-sm"
                required
              />
              <FiMapPin className="absolute top-3 right-3 text-xl text-gray-500" />
            </div>
          </div>

          {/* Start Date */}
          <div className="flex flex-col">
            <label htmlFor="startDate" className="text-sm font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={tripData.startDate}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border rounded-md shadow-sm"
              required
            />
          </div>

          {/* End Date */}
          <div className="flex flex-col">
            <label htmlFor="endDate" className="text-sm font-medium">End Date</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={tripData.endDate}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border rounded-md shadow-sm"
              required
            />
          </div>

          {/* Travel Options */}
          <div className="col-span-1 md:col-span-3 flex justify-around mt-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="flight"
                checked={tripData.flight}
                onChange={(e) => setTripData({ ...tripData, flight: e.target.checked })}
              />
              <span>Flights</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="hotel"
                checked={tripData.hotel}
                onChange={(e) => setTripData({ ...tripData, hotel: e.target.checked })}
              />
              <span>Hotels</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="carRental"
                checked={tripData.carRental}
                onChange={(e) => setTripData({ ...tripData, carRental: e.target.checked })}
              />
              <span>Car Rentals</span>
            </label>
          </div>

          {/* Search Button */}
          <div className="col-span-1 md:col-span-3">
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              <AiOutlineSearch className="inline-block mr-2 text-xl" />
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Explore Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h3 className="text-3xl font-semibold mb-6">Explore Popular Destinations</h3>
        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-white shadow-md rounded-md overflow-hidden">
            <img src="/src/images/NYC.jpg" alt="Destination" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold">New York City</h4>
              <p className="text-gray-600 mt-2">Explore the city that never sleeps!</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white shadow-md rounded-md overflow-hidden">
            <img src="/src/images/paris.jpeg" alt="Destination" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold">Paris</h4>
              <p className="text-gray-600 mt-2">Discover the romance of the City of Light.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white shadow-md rounded-md overflow-hidden">
            <img src="/src/images/sydney.jpeg" alt="Destination" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold"></h4>
              <p className="text-gray-600 mt-2">Experience the vibrant energy of .</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTrip;

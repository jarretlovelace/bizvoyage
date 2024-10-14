import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import { BsFillHouseFill, BsFillCalendarFill } from 'react-icons/bs';
import axios from 'axios';

const BookTrip = () => {
  const navigate = useNavigate();

  const [tripData, setTripData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    flight: false,
    hotel: false,
    carRental: false,
  });
  
  const [travelResults, setTravelResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripData({
      ...tripData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/travel/fetch-travel-data', tripData);
      const travelData = response.data;
      setTravelResults(travelData);
      navigate('/trip-results', { state: { travelData } });
    } catch (error) {
      console.error('Error fetching travel data:', error);
      alert('Failed to retrieve travel data.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <form onSubmit={handleSubmit}>
        {/* Existing Form Content */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Search
        </button>
      </form>
      
      {travelResults && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold">Travel Options</h2>
          {/* Render travel options */}
        </div>
      )}
    </div>
  );
};

export default BookTrip;

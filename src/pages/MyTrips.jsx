import React, { useState } from 'react';
import './style/MyTrips.css'; // Import the CSS file for styling

const MyTrips = () => {
  const [plannedTrips, setPlannedTrips] = useState([
    {
      destination: 'New York City',
      date: '2024-10-15',
      transportation: 'Flight',
      hotel: 'Hotel XYZ',
      activities: ['Broadway Show', 'Central Park Tour'],
      image: '/images/mytrip1.png', // Correct path for New York City image
    },
    {
      destination: 'Paris',
      date: '2024-12-01',
      transportation: 'Flight',
      hotel: 'Hotel ABC',
      activities: ['Eiffel Tower Visit', 'Louvre Museum Tour'],
      image: '/images/mytrip2.png', // Correct path for Paris image
    },
  ]);

  const [travelSuggestions, setTravelSuggestions] = useState([
    {
      type: 'Bundle Flight and Hotel',
      savings: 'Save up to $200 by booking flight and hotel together',
    },
    {
      type: 'Book Early',
      savings: 'Save 15% when booking transportation two months in advance',
    },
  ]);

  const [deals, setDeals] = useState([
    {
      offer: '10% off your next hotel booking in New York',
      validUntil: '2024-09-30',
    },
    {
      offer: 'Bundle deal: Book a car rental with your Paris flight and save 20%',
      validUntil: '2024-11-15',
    },
  ]);

  return (
    <div className="my-trips-container">
      {/* Header */}
      <h1 className="text-6xl text-red-800 font-bold mb-8 text-shadow animate-fade-in">My Trips</h1>

      {/* Upcoming Trips Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Planned Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plannedTrips.map((trip, index) => (
            <div
              key={index}
              className="bg-red-800 opacity-80 p-6 rounded-lg shadow-md animate-slide-up"
            >
              {/* Destination Image */}
              <img
                src={trip.image}
                alt={trip.destination}
                className="w-full h-80 object-scale-down rounded-lg mb-4"
              />
              <h3 className="text-2xl text-center font-bold mb-2">{trip.destination}</h3>
              <p className="text-white">Date: {trip.date}</p>
              <p className="text-white">Transportation: {trip.transportation}</p>
              <p className="text-white">Hotel: {trip.hotel}</p>
              <p className="text-white">Activities: {trip.activities.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Suggestions Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Travel Suggestions</h2>
        <div className="bg-red-800 opacity-80 p-6 rounded-lg shadow-md">
          {travelSuggestions.map((suggestion, index) => (
            <div
              key={index}
             className="mb-4 transition-transform transform hover:scale-110 hover:animate-bounce"
            >
              <h3 className="text-2xl font-bold">{suggestion.type}</h3>
              <p className="text-black font-bold">{suggestion.savings}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Deals Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Deals & Promotions</h2>
        <div className="bg-gray-400 opacity-80 p-6 rounded-lg shadow-md">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="mb-4 transition-transform transform hover:scale-110 hover:animate-bounce"
            >
              <p className="text-red-800 font-bold text-3xl">{deal.offer}</p>
              <p className="text-black">Valid until: {deal.validUntil}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTrips;

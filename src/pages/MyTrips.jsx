import React, { useState, useEffect } from 'react';

const MyTrips = () => {
  // Example planned trips data (could come from an API)
  const [plannedTrips, setPlannedTrips] = useState([
    {
      destination: 'New York City',
      date: '2024-10-15',
      transportation: 'Flight',
      hotel: 'Hotel XYZ',
      activities: ['Broadway Show', 'Central Park Tour'],
    },
    {
      destination: 'Paris',
      date: '2024-12-01',
      transportation: 'Flight',
      hotel: 'Hotel ABC',
      activities: ['Eiffel Tower Visit', 'Louvre Museum Tour'],
    },
  ]);

  // Example travel suggestion data
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

  // Example deals data
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
    <div className="container mx-auto p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8 animate-fade-in">My Trips</h1>

      {/* Upcoming Trips Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Planned Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plannedTrips.map((trip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md animate-slide-up"
            >
              <h3 className="text-xl font-bold mb-2">{trip.destination}</h3>
              <p className="text-gray-600">Date: {trip.date}</p>
              <p className="text-gray-600">Transportation: {trip.transportation}</p>
              <p className="text-gray-600">Hotel: {trip.hotel}</p>
              <p className="text-gray-600">Activities: {trip.activities.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Suggestions Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Travel Suggestions</h2>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          {travelSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="mb-4 transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-bold">{suggestion.type}</h3>
              <p className="text-gray-700">{suggestion.savings}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Deals Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Deals & Promotions</h2>
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="mb-4 transition-transform transform hover:scale-110 hover:animate-bounce"
            >
              <p className="text-lg">{deal.offer}</p>
              <p className="text-gray-600">Valid until: {deal.validUntil}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTrips;

import React, { useState } from 'react';
import './style/MyTrips.css';

// Component for Planned Trips
const PlannedTrips = ({ trips }) => (
  <div className="mb-12">
    <h2 className="text-red-800 text-4xl font-bold mb-4">PLANNED TRIPS</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {trips.map((trip, index) => (
        <div
          key={index}
          className="bg-red-800 opacity-90 p-6 rounded-lg shadow-md animate-slide-up"
        >
          <img
            src={trip.image}
            alt={`Image of ${trip.destination}`}
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
);

// Component for Travel Suggestions
const TravelSuggestions = ({ suggestions }) => (
  <div className="mb-12">
    <h2 className=" text-red-800 text-4xl font-bold mb-4">TRAVEL SUGGESTIONS</h2>
    <div className="bg-black opacity-90 p-6 \ shadow-md">
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className="mb-4 transition-transform transform hover:scale-110 hover:animate-bounce"
        >
          <h3 className="text-red-800 text-2xl font-bold">{suggestion.type}</h3>
          <p className="text-white font-bold">{suggestion.savings}</p>
        </div>
      ))}
    </div>
  </div>
);

// Component for Deals
const Deals = ({ deals }) => (
  <div className="mb-12">
    <h2 className="text-red-800 text-4xl font-bold mb-4">DEALS & PROMOTIONS</h2>
    <div className="bg-black opacity-90 p-6 shadow-md">
      {deals.map((deal, index) => (
        <div
          key={index}
          className="mb-4 transition-transform transform hover:scale-110 hover:animate-bounce"
        >
          <p className="text-red-800 font-bold text-3xl">{deal.offer}</p>
          <p className="text-white">Valid until: {deal.validUntil}</p>
        </div>
      ))}
    </div>
  </div>
);

// Main Component
const MyTrips = () => {
  const [plannedTrips, setPlannedTrips] = useState([
    {
      destination: 'New York City',
      date: '2024-10-15',
      transportation: 'Flight',
      hotel: 'Hotel XYZ',
      activities: ['Broadway Show', 'Central Park Tour'],
      image: '/images/mytrip1.png',
    },
    {
      destination: 'Paris',
      date: '2024-12-01',
      transportation: 'Flight',
      hotel: 'Hotel ABC',
      activities: ['Eiffel Tower Visit', 'Louvre Museum Tour'],
      image: '/images/mytrip2.png',
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
      <section className="relative mb-8">
        <div
          className="h-48 w-full flex items-center justify-center xlg:shadow-xlg"
          style={{
            backgroundImage: `url('/images/image16.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ><div className="deals-promotions-section">
        <h2></h2>
        {/* Deals content here */}
      </div>
      
      <div className="travel-suggestions-section">
        <h2></h2>
        {/* Suggestions content here */}
      </div>
      

          <h1 className="font-custom text-9xl text-red-800 font-thin justify-left">MY TRIPS</h1>
          {/* <p className="subtitle">These Are The Trips You Won't Forget...Probably</p> */}
        </div>
      </section>


      {/* Sections */}
      <PlannedTrips trips={plannedTrips} />
      <TravelSuggestions suggestions={travelSuggestions} />
      <Deals deals={deals} />
    </div>
  );
};

export default MyTrips;

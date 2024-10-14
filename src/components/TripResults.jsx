import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TripResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const travelData = location.state?.travelData; // Define travelData before using it

  console.log('Received travel data:', travelData); // Log after travelData is defined

  if (!travelData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-8 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">Well, this is awkward.</h2>
          <p className="mb-8">
            No results found. Try tweaking your search.
          </p>
          <button 
            onClick={() => navigate('/book-a-trip')}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Go back to search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-red-700 mb-8">Trip Results</h1>
      {/* Render travelData details */}
      {travelData.airlineTickets && travelData.airlineTickets.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Airline Tickets</h2>
          {travelData.airlineTickets.map((ticket, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
              <p><strong>Airline:</strong> {ticket.airline}</p>
              <p><strong>Price:</strong> {ticket.price}</p>
              <p><strong>Departure:</strong> {ticket.departureTime}</p>
              <p><strong>Arrival:</strong> {ticket.arrivalTime}</p>
              <p><strong>Duration:</strong> {ticket.duration}</p>
              <p><strong>Layovers:</strong> {ticket.layovers}</p>
            </div>
          ))}
        </section>
      )}
      {/* Repeat similar sections for hotels, Airbnb options, and car rentals */}
    </div>
  );
};

export default TripResults;

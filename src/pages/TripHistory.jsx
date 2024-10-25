import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TripResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get('destination');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const flight = searchParams.get('flight') === 'true';
  const hotel = searchParams.get('hotel') === 'true';
  const carRental = searchParams.get('carRental') === 'true';

  // State for storing fetched trip results
  const [tripResults, setTripResults] = useState([]);

  // Fetch the trip results based on search parameters
  useEffect(() => {
    fetch(`/api/trips?destination=${destination}&startDate=${startDate}&endDate=${endDate}&flight=${flight}&hotel=${hotel}&carRental=${carRental}`)
      .then(response => response.json())
      .then(data => {
        setTripResults(data);
      })
      .catch(error => console.error('Error fetching trips:', error));
  }, [destination, startDate, endDate, flight, hotel, carRental]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-red-700 mb-6">Your Search Results</h2>
        {tripResults.length > 0 ? (
          <ul className="grid grid-cols-1 gap-6">
            {tripResults.map((trip, index) => (
              <li key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800">{trip.destination}</h3>
                <p className="text-gray-600 mt-2">
                  <strong>Start Date:</strong> {trip.startDate}
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>End Date:</strong> {trip.endDate}
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>Price:</strong> ${trip.price}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No trips found for your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default TripResults;

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../images/pin.png"; // Ensure the path is correct
import backgroundImage from "../images/ai_image.jpeg";

// Sample travel data
const initialTravelData = [
  {
    id: 1,
    location: { lat: 40.7128, lng: -74.006 },
    city: "New York",
    details: {
      date: "2023-04-15",
      moneySpent: "$5,000",
      reason: "Business Conference",
      employees: 3,
      additionalInfo: "Partner meetings and vendor visits",
    },
  },
  {
    id: 2,
    location: { lat: 34.0522, lng: -118.2437 },
    city: "Los Angeles",
    details: {
      date: "2022-11-05",
      moneySpent: "$3,200",
      reason: "Client Workshop",
      employees: 2,
      additionalInfo: "Team-building activities and client presentations",
    },
  },
  {
    id: 3,
    location: { lat: 35.0844, lng: -106.6504 },
    city: "Albuquerque",
    details: {
      date: "2023-09-15",
      moneySpent: "$5,000",
      reason: "Business Conference",
      employees: 3,
      additionalInfo: "Partner meetings and vendor visits",
    },
  },
];

// Custom icon for map markers
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const TripHistory = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [travelData, setTravelData] = useState(initialTravelData);

  const handleTripClick = (trip) => {
    setSelectedTrip(trip);
  };

  const handleAddTrip = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTrip = {
      id: travelData.length + 1,
      location: {
        lat: parseFloat(formData.get("lat")),
        lng: parseFloat(formData.get("lng")),
      },
      city: formData.get("city"),
      details: {
        date: formData.get("date"),
        moneySpent: formData.get("moneySpent"),
        reason: formData.get("reason"),
        employees: parseInt(formData.get("employees")),
        additionalInfo: formData.get("additionalInfo"),
      },
    };
    setTravelData([...travelData, newTrip]);
    e.target.reset();
  };

  return (
    <div
      className="flex min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-mono uppercase font-bold text-red-700 mb-4">
          Trip History
        </h1>

        <div className="flex">
          <div className="flex-1">
            <MapContainer
              center={[37.7749, -122.4194]}
              zoom={4}
              style={{ height: "800px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {travelData.map((trip) => (
                <Marker
                  key={trip.id}
                  position={trip.location}
                  icon={customIcon}
                  eventHandlers={{
                    click: () => handleTripClick(trip),
                  }}
                  className="marker-animation"
                >
                  <Popup>{trip.city}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          <div className="w-1/3 p-4 bg-white shadow-md ml-4 transition-opacity duration-500 ease-in-out">
            <h2 className="text-xl font-bold text-red-700 mb-2">Trip Details</h2>
            {selectedTrip ? (
              <div>
                <p><strong>Date:</strong> {selectedTrip.details.date}</p>
                <p><strong>Money Spent:</strong> {selectedTrip.details.moneySpent}</p>
                <p><strong>Reason:</strong> {selectedTrip.details.reason}</p>
                <p><strong>Employees:</strong> {selectedTrip.details.employees}</p>
                <p><strong>Additional Info:</strong> {selectedTrip.details.additionalInfo}</p>
              </div>
            ) : (
              <p>Select a marker to view details</p>
            )}
          </div>
        </div>

        <div className="mt-4 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-bold text-red-700 mb-2">Add New Trip</h2>
          <form onSubmit={handleAddTrip}>
            <div className="mb-2">
              <label className="block mb-1">City:</label>
              <input type="text" name="city" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Latitude:</label>
              <input type="number" step="any" name="lat" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Longitude:</label>
              <input type="number" step="any" name="lng" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Date:</label>
              <input type="date" name="date" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Money Spent:</label>
              <input type="text" name="moneySpent" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Reason:</label>
              <input type="text" name="reason" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Employees Involved:</label>
              <input type="number" name="employees" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Additional Info:</label>
              <textarea name="additionalInfo" className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="bg-red-700 text-white p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-105">
              Add Trip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TripHistory;

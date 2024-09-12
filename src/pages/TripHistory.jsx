import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import backgroundImage from '../images/images-3.jpeg';

// Sample travel data
const travelData = [
  {
    id: 1,
    location: { lat: 40.7128, lng: -74.0060 },
    city: 'New York',
    details: {
      date: '2023-04-15',
      moneySpent: '$5,000',
      reason: 'Business Conference',
      employees: 3,
      additionalInfo: 'Partner meetings and vendor visits'
    }
  },
  {
    id: 2,
    location: { lat: 34.0522, lng: -118.2437 },
    city: 'Los Angeles',
    details: {
      date: '2022-11-05',
      moneySpent: '$3,200',
      reason: 'Client Workshop',
      employees: 2,
      additionalInfo: 'Team-building activities and client presentations'
    }
  },
  {
    id: 3,
    location: { lat: 35.0844, lng: -106.6504 },
    city: 'Albuquerque',
    details: {
      date: '2023-09-15',
      moneySpent: '$5,000',
      reason: 'Business Conference',
      employees: 3,
      additionalInfo: 'Partner meetings and vendor visits'
    }
  },
];

// Custom icon for map markers
const customIcon = new L.Icon({
  iconUrl: '../images/pin.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const TripHistory = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-4">
        <h1 className="text-3xl font-mono uppercase font-bold text-red-700 mb-4">Trip History</h1>
<MapContainer        ontainer center={[37.7749, -122.4194]} zoom={4} style={{ height: '700px', width: '90%' }}>

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
                click: () => {
                  setSelectedTrip(trip);
                },
              }}
            >
              <Popup>
                <strong>{trip.city}</strong>
                <br />
                Click for more details
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {selectedTrip && (
          <div className="bg-white shadow-md p-6 mt-4 rounded-lg">
            <h2 className="text-xl font-bold text-red-700">Details for {selectedTrip.city}</h2>
            <p><strong>Date:</strong> {selectedTrip.details.date}</p>
            <p><strong>Money Spent:</strong> {selectedTrip.details.moneySpent}</p>
            <p><strong>Reason:</strong> {selectedTrip.details.reason}</p>
            <p><strong>Employees:</strong> {selectedTrip.details.employees}</p>
            <p><strong>Additional Info:</strong> {selectedTrip.details.additionalInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripHistory;

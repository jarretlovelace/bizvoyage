import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ pins, onPinClick }) => {
    const handlePinClick = (pin) => {
        onPinClick(pin.details);
    };

    return (
        <div className="border-4 border-gray-300 rounded-lg p-2 mb-4">
            <MapContainer center={[20, 0]} zoom={2} style={{ height: '400px', width: '600px' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {pins.map((pin, index) => (
                    <Marker key={index} position={[pin.lat, pin.lng]} eventHandlers={{ click: () => handlePinClick(pin) }}>
                        <Popup>
                            <div>Click to see trip details!</div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent = ({ pins, onPinClick }) => {
    const center = [39.8283, -98.5795]; // Center of the US

    return (
        <MapContainer center={center} zoom={4} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {pins.map((pin) => (
                <Marker
                    key={pin.id}
                    position={[pin.location.lat, pin.location.lng]}
                    eventHandlers={{
                        click: () => onPinClick(pin.tripDetails),
                    }}
                >
                    <Popup>{pin.tripDetails.reason}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;

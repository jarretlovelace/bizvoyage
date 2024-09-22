import React, { useState } from 'react';
import MapComponent from '../components/MapComponent';
import StickyNote from '../components/StickyNote';
import AnimatedCharacter from '../components/AnimatedCharacter';
import AddLocationForm from '../components/AddLocationForm'; 

const TripHistory = () => {
    const [selectedTrip, setSelectedTrip] = useState(null);
    const [pins, setPins] = useState([]);

    const handlePinClick = (tripDetails) => {
        setSelectedTrip(tripDetails);
    };

    const addNewLocation = (newLocation) => {
        setPins([...pins, newLocation]);
    };

    return (
        <div className="flex flex-col items-center p-4">
            <div className="relative flex justify-center w-full">
                <MapComponent pins={pins} onPinClick={handlePinClick} />
                <AnimatedCharacter className="absolute z-10 bottom-0 right-10" />
            </div>
            <StickyNote tripDetails={selectedTrip} />
            <AddLocationForm onAddLocation={addNewLocation} />
        </div>
    );
};

export default TripHistory;

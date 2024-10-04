import React, { useState } from 'react';
import MapComponent from '../components/MapComponent';
import StickyNote from '../components/StickyNote';
import AnimatedCharacter from '../components/AnimatedCharacter';
import AddLocationForm from '../components/AddLocationForm';

const TripHistory = () => {
    const [selectedTrip, setSelectedTrip] = useState(null);
    const [pins, setPins] = useState([]);
    const [showForm, setShowForm] = useState(false); // State for toggling form visibility

    const handlePinClick = (tripDetails) => {
        setSelectedTrip(tripDetails);
    };

    const addNewLocation = (newLocation) => {
        setPins([...pins, newLocation]);
        setShowForm(false); // Hide the form after adding a new location
    };

    const toggleFormVisibility = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="relative w-full h-screen bg-cover bg-center bg-board-pattern p-8">
            {/* Animated background board */}
            <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg max-w-6xl mx-auto animate-fade-in">
                {/* Top Section: Map and Character */}
                <div className="relative flex flex-col items-center justify-start mb-4">
                    <MapComponent pins={pins} onPinClick={handlePinClick} />
                    <AnimatedCharacter className="absolute z-10 bottom-0 right-10" />
                </div>
                {/* Show trip details in sticky note */}
                {selectedTrip && (
                    <StickyNote tripDetails={selectedTrip} />
                )}
                {/* Button to show/hide the form with animation */}
                <button
                    className="bg-blue-500 text-white p-2 rounded-md shadow-md mb-4 transition-transform duration-500 transform hover:scale-105"
                    onClick={toggleFormVisibility}
                >
                    {showForm ? 'Cancel' : '+ Add Trip'}
                </button>
                {/* Conditionally render the form with animation */}
                {showForm && (
                    <div className="animate-slide-down">
                        <AddLocationForm onAddLocation={addNewLocation} />
                    </div>
                )}
            </div>
        </div>
    );
};


export default TripHistory;

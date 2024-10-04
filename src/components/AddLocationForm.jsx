import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

const AddLocationForm = ({ onAddLocation }) => {
    const [location, setLocation] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [tripDetails, setTripDetails] = useState({
        dates: '',
        budget: '',
        spent: '',
        reason: '',
        coworkers: '',
        notes: ''
    });

    // Fetch suggestions from the Nominatim API
    const fetchSuggestions = async ({ value }) => {
        const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${value}&addressdetails=1&limit=5`;
        try {
            const response = await fetch(geocodeUrl);
            const data = await response.json();

            setSuggestions(
                data.map((location) => ({
                    name: location.display_name,
                    lat: location.lat,
                    lon: location.lon
                }))
            );
        } catch (error) {
            console.error('Error fetching location suggestions:', error);
        }
    };

    // Clear suggestions when the user is not typing
    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    // What happens when the user selects a suggestion
    const onSuggestionSelected = (event, { suggestion }) => {
        setLocation(suggestion.name); // Set the location in the input field
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const selectedLocation = suggestions.find((s) => s.name === location);

        if (!selectedLocation) {
            alert('Please select a valid location from the suggestions.');
            return;
        }

        const newPin = {
            id: Date.now(),
            location: { lat: parseFloat(selectedLocation.lat), lng: parseFloat(selectedLocation.lon) },
            tripDetails: {
                ...tripDetails,
                coworkers: tripDetails.coworkers.split(',').map((c) => c.trim())
            }
        };

        onAddLocation(newPin);

        // Reset form
        setLocation('');
        setTripDetails({
            dates: '',
            budget: '',
            spent: '',
            reason: '',
            coworkers: '',
            notes: ''
        });
    };

    const inputProps = {
        placeholder: 'Enter city name or ZIP code',
        value: location,
        onChange: (_, { newValue }) => setLocation(newValue),
    };

    return (
        <form className="p-4 bg-white shadow-lg rounded-md" onSubmit={handleSubmit}>
            <h3 className="font-bold mb-2">Add New Trip</h3>
            {/* Autocomplete Input */}
            <div className="mb-2">
                <label>City Name or ZIP Code:</label>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={fetchSuggestions}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={(suggestion) => suggestion.name}
                    renderSuggestion={(suggestion) => <div>{suggestion.name}</div>}
                    inputProps={inputProps}
                    onSuggestionSelected={onSuggestionSelected}
                />
            </div>
            <div className="mb-2">
                <label>Dates:</label>
                <input
                    type="text"
                    value={tripDetails.dates}
                    onChange={(e) => setTripDetails({ ...tripDetails, dates: e.target.value })}
                    required
                />
            </div>
            <div className="mb-2">
                <label>Budget:</label>
                <input
                    type="number"
                    value={tripDetails.budget}
                    onChange={(e) => setTripDetails({ ...tripDetails, budget: e.target.value })}
                    required
                />
            </div>
            <div className="mb-2">
                <label>Spent:</label>
                <input
                    type="number"
                    value={tripDetails.spent}
                    onChange={(e) => setTripDetails({ ...tripDetails, spent: e.target.value })}
                    required
                />
            </div>
            <div className="mb-2">
                <label>Reason:</label>
                <input
                    type="text"
                    value={tripDetails.reason}
                    onChange={(e) => setTripDetails({ ...tripDetails, reason: e.target.value })}
                    required
                />
            </div>
            <div className="mb-2">
                <label>Coworkers (comma separated):</label>
                <input
                    type="text"
                    value={tripDetails.coworkers}
                    onChange={(e) => setTripDetails({ ...tripDetails, coworkers: e.target.value })}
                />
            </div>
            <div className="mb-2">
                <label>Notes:</label>
                <textarea
                    value={tripDetails.notes}
                    onChange={(e) => setTripDetails({ ...tripDetails, notes: e.target.value })}
                ></textarea>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded" type="submit">Add Trip</button>
        </form>
    );
};

export default AddLocationForm;

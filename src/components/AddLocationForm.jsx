import React, { useState } from 'react';

const AddLocationForm = ({ onAddLocation }) => {
    const [location, setLocation] = useState({ lat: '', lng: '', details: {} });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocation((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLocation = {
            lat: parseFloat(location.lat),
            lng: parseFloat(location.lng),
            details: {
                dates: location.dates,
                budget: location.budget,
                actualExpenses: location.actualExpenses,
                reason: location.reason,
                teamMembers: location.teamMembers,
                notes: location.notes,
            },
        };
        onAddLocation(newLocation);
        setLocation({ lat: '', lng: '', details: {} }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md p-4 bg-gray-200 rounded-lg mt-4">
            <h3 className="text-xl mb-2">Add New Location</h3>
            <div className="mb-2">
                <label>Latitude:</label>
                <input type="text" name="lat" value={location.lat} onChange={handleChange} className="border p-1 rounded w-full" required />
            </div>
            <div className="mb-2">
                <label>Longitude:</label>
                <input type="text" name="lng" value={location.lng} onChange={handleChange} className="border p-1 rounded w-full" required />
            </div>
            <div className="mb-2">
                <label>Dates:</label>
                <input type="text" name="dates" value={location.dates} onChange={handleChange} className="border p-1 rounded w-full" />
            </div>
            <div className="mb-2">
                <label>Budget:</label>
                <input type="text" name="budget" value={location.budget} onChange={handleChange} className="border p-1 rounded w-full" />
            </div>
            <div className="mb-2">
                <label>Actual Expenses:</label>
                <input type="text" name="actualExpenses" value={location.actualExpenses} onChange={handleChange} className="border p-1 rounded w-full" />
            </div>
            <div className="mb-2">
                <label>Reason:</label>
                <input type="text" name="reason" value={location.reason} onChange={handleChange} className="border p-1 rounded w-full" />
            </div>
            <div className="mb-2">
                <label>Team Members:</label>
                <input type="text" name="teamMembers" value={location.teamMembers} onChange={handleChange} className="border p-1 rounded w-full" />
            </div>
            <div className="mb-2">
                <label>Notes:</label>
                <textarea name="notes" value={location.notes} onChange={handleChange} className="border p-1 rounded w-full"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded">
                Add Location
            </button>
        </form>
    );
};

export default AddLocationForm;

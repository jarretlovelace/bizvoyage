import React from 'react';

const StickyNote = ({ tripDetails }) => {
    if (!tripDetails) return null;

    return (
        <div className="w-64 p-4 bg-yellow-300 rounded-md shadow-lg sticky-note">
            <h3 className="font-bold text-lg mb-2">Trip Summary</h3>
            <p><strong>Dates:</strong> {tripDetails.dates}</p>
            <p><strong>Budget:</strong> ${tripDetails.budget}</p>
            <p><strong>Money Spent:</strong> ${tripDetails.spent}</p>
            <p><strong>Reason:</strong> {tripDetails.reason}</p>
            <p><strong>Coworkers:</strong> {tripDetails.coworkers.join(', ')}</p>
            <p><strong>Notes:</strong> {tripDetails.notes}</p>
        </div>
    );
};

export default StickyNote;

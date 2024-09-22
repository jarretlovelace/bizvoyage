import React from 'react';

const StickyNote = ({ tripDetails }) => {
    if (!tripDetails) {
        return <div className="hidden" />;
    }

    return (
        <div className="sticky-note">
            <h3>Trip Details</h3>
            <p><strong>Dates:</strong> {tripDetails.dates}</p>
            <p><strong>Budget:</strong> {tripDetails.budget}</p>
            <p><strong>Actual Expenses:</strong> {tripDetails.actualExpenses}</p>
            <p><strong>Reason:</strong> {tripDetails.reason}</p>
            <p><strong>Team Members:</strong> {tripDetails.teamMembers}</p>
            <p><strong>Notes:</strong> {tripDetails.notes}</p>
        </div>
    );
};

export default StickyNote;

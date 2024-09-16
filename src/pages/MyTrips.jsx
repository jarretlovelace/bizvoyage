import React from 'react';

const MyTrips = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/images/ai_image4.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
        <div
        className="col-span-1 row-span-1 bg-red-700 rounded-lg shadow-lg p-3">
        <h1 className="text-4xl font-bold mb-1 text-transform: uppercase font-mono text-white">My Trips</h1>
        <p className="text-white">Review all current booked travel itenerary details here.</p>
      </div>
    </div>
  );
};

export default MyTrips;

import React from 'react';

const MyTrips = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/images/image12.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">My Trips</h1>
        <p>View your upcoming and past business trips here.</p>
      </div>
    </div>
  );
};

export default MyTrips;

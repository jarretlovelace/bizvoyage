import React from 'react';

const BookATrip = () => {
  return (
    <div
      className="min-h-screen opacity-100 bg-cover bg-center"
      style={{
        backgroundImage: "url('../src/images/images-5.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="p-6">
        <div
        className="col-span-1 row-span-1 bg-white rounded-lg shadow-lg p-3">
        <h1 className="text-4xl font-bold mb-1 text-transform: uppercase font-mono text-red-700">Book A Trip</h1>
        <p className="text-red-700">Find and book your next business trip here.</p>
      </div>
    </div>
    </div>
  );
};

export default BookATrip;

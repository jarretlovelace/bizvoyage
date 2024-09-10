import React from 'react';

const BookATrip = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/images/image-10.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4 text-red-700">Book A Trip</h1>
        <p className="text-red-700">Find and book your next business trip here.</p>
      </div>
    </div>
  );
};

export default BookATrip;

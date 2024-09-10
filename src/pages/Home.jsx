import React from 'react';
import './style/Home.css';  // Ensure the path is correct or remove if unnecessary

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {/* Main Section with Background Image */}
      <div
        className="col-span-2 row-span-2 bg-white rounded-lg shadow-lg p-4"
        style={{
          backgroundImage: "url('/path/to/image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h2 className="text-xl font-bold text-red-700">Dashboard</h2>
      </div>

      {/* Calendar Section */}
      <div className="col-span-1 row-span-2 bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold text-red-700">Calendar</h2>
        <img src="/src/images/image5.jpeg" alt="Calendar" className="w-full h-auto rounded-lg mt-4 opacity-40" />
      </div>

      {/* Weather Section */}
      <div className="col-span-1 row-span-1 bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold text-red-700">Weather</h2>
        <img src="/src/images/image2.jpg" alt="Weather" className="w-full h-auto rounded-lg mt-4 opacity-40" />
      </div>

      {/* Messaging Center Section */}
      <div className="col-span-1 row-span-1 bg-white rounded-lg shadow-lg p-4 opacity-40">
        <h2 className="text-xl font-bold text-red-700">Messaging Center</h2>
        <img src="/src/images/image15.jpg" alt="Messaging Center" className="w-full h-auto rounded-lg mt-4" />
      </div>

      {/* Scan Receipts Section */}
      <div className="col-span-2 row-span-1 bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold text-red-700">Scan Receipts</h2>
        <img src="/src/images/image12.jpg" alt="Scan Receipts" className="w-full h-auto rounded-lg mt-4 opacity-40" />
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

const MyCompany = () => {
  return (
    <div
      className="p-6"
      style={{
        backgroundImage: "url('/src/images/images-9.jpeg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 45, 
        minHeight: '100vh' 
      }}
    >
         <div
        className="col-span-1 row-span-1 bg-white rounded-lg shadow-lg p-3">
        <h1 className="text-4xl font-bold mb-1 text-transform: uppercase font-mono text-red-700">My Company</h1>
        <p className="text-red-700">View details of your company, supervisor, and other details concerning your travel experience as it relates to your company.</p>
      </div>
      {/* add details here  */}
    </div>
  );
};

export default MyCompany;

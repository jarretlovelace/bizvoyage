import React from 'react';

const MyCompany = () => {
  return (
    <div
      className="p-6"
      style={{
        backgroundImage: "url('/src/images/image-9.jpeg')", // Ensure the path is correct relative to the `public` directory or use a direct path if needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 45, 
        minHeight: '100vh' // Ensures the background covers the full viewport height
      }}
    >
      <h1 className="text-4xl font-bold mb-4 text-red-700">My Company</h1>
      <p className="text-red-700">Manage your company’s business travel preferences and information.</p>
      {/* You can later add fields for managing company details */}
    </div>
  );
};

export default MyCompany;

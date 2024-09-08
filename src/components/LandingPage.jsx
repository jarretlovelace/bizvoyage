import React from 'react';
import logo from '/src/images/image.png'; // Ensure this image has a transparent background

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center" style={{ backgroundImage: `url('./src/images/image5.jpeg')` }}>
      {/* Centered Logo Section */}
      <div className="mb-10">
        <img src={logo} alt="BizVoyage Logo" className="w-200 h-200 mx-auto object-contain" /> {/* Adjust size as needed */}
      </div>

      {/* Content: Sign-in/Sign-up */}
      <div className="max-w-md w-full bg-white shadow-md p-8 rounded-md">
        <h1 className="text-5xl font-thin text-center mb-6 text-red-700">Welcome to BizVoyage</h1>
        <p className="text-center mb-4">Please sign in or sign up to continue</p>
        {/* Sign-In and Sign-Up buttons/links */}
        <div className="flex justify-around">
          <a href="/signin" className="px-4 py-2 bg-blue-500 text-white rounded-md">Sign In</a>
          <a href="/signup" className="px-4 py-2 bg-green-500 text-white rounded-md">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

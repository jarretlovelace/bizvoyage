import React from 'react';
import backgroundImage from '/src/images/image5.jpeg'; 

const SignIn = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-md w-full bg-white shadow-md p-8 rounded-md">
        <h1 className="text-3xl font-thin text-center mb-6 text-red-700">Sign In</h1>
        {/* Sign-In form goes here */}
      </div>
    </div>
  );
};

export default SignIn;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';  // Ensure you have a context for authentication
import { doSignOut } from '../firebase';

const Header = () => {
  const { userLoggedIn } = useAuth();  // Assuming this hook checks if a user is signed in
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await doSignOut();
      navigate('/landingpage');  // Redirect to landing page after sign-out
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const handleLogoClick = () => {
    if (userLoggedIn) {
      navigate('/Dashboard');  // Go to Dashboardpage if signed in
    } else {
      navigate('/landingpage');  // Otherwise, go to the landing page
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white fixed w-full top-0 z-10 shadow-md">
      <div className="flex items-center space-x-4">
        {/* Use a button for logo click */}
        <button onClick={handleLogoClick} className="flex items-center space-x-2">
          <img src="/src/images/image.png" alt="BizVoyage Logo" className="h-10" />
          <span className="text-xl font-bold justify-items-end text-red-500">BizVoyage</span>
        </button>
      </div>
      <div className="flex items-center space-x-4">
        {userLoggedIn ? (
          <>
            <Link to="/Dashboard" className="hover:text-red-500">Dashboard</Link>
            <button onClick={handleSignOut} className="bg-red-500 px-3 py-2 rounded hover:bg-red-500">Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-200">Login</Link>
            <Link to="/Signup" className="hover:text-gray-200">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;

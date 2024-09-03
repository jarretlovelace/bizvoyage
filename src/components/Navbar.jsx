import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../firebase';

const Navbar = () => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await doSignOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white fixed w-full top-0 z-10 shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/images/bv2.png" alt="BizVoyage Logo" className="h-10" />
        <Link to="/" className="text-xl font-bold">BizVoyage</Link>
      </div>
      <div className="flex items-center space-x-4 relative">
        {/* Dropdown trigger */}
        <button onClick={toggleDropdown} className="hover:text-gray-200">Menu</button>

        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-10 w-48 bg-white rounded-md shadow-lg py-2 z-20">
            <Link to="/my-trips" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">My Trips</Link>
            <Link to="/book-a-trip" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Book a Trip</Link>
            <Link to="/travel-history" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Travel History</Link>
            <Link to="/perks" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Perks</Link>
            <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Settings</Link>
          </div>
        )}

        {userLoggedIn ? (
          <>
            <Link to="/home" className="hover:text-gray-200">Home</Link>
            <button onClick={handleSignOut} className="bg-red-500 px-3 py-2 rounded hover:bg-red-400">Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-200">Login</Link>
            <Link to="/signup" className="hover:text-gray-200">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

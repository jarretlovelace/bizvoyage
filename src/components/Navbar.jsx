import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../firebase';

const Navbar = () => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await doSignOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white fixed w-full top-0 z-10 shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/images/bv2.png" alt="BizVoyage Logo" className="h-10" />
        <Link to="/" className="text-xl font-bold">BizVoyage</Link>
      </div>
      <div className="flex items-center space-x-4">
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

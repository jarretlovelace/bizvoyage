import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { doSignOut } from '../auth';  // Use the helper function from auth.js

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown state
  const navigate = useNavigate();

  const handleSignOut = async () => {
    console.log('Sign out button clicked'); // Debug log
    try {
      await doSignOut();  // Use the doSignOut helper from auth.js
      console.log('User signed out');  // Debug log to confirm sign-out
      navigate('/signin');  // Redirect to SignIn page after sign-out
    } catch (error) {
      console.log('Error signing out:', error);  // Log errors
      alert('Error signing out: ', error.message);
    }
  };

  return (
    <nav className="bg-red-700 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl">BizVoyage</h1>
        <div className="relative">
          {/* Button to toggle dropdown */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            Menu
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 bg-white text-red-700 mt-2 rounded shadow-lg">
              <Link to="/home" className="block px-4 py-2">Home</Link>
              <Link to="/bookatrip" className="block px-4 py-2">Book A Trip</Link>
              <Link to="/mytrips" className="block px-4 py-2">My Trips</Link>
              <Link to="/MyBusiness" className="block px-4 py-2">My Company</Link>
              <Link to="/perks" className="block px-4 py-2">Perks</Link>
              <Link to="/triphistory" className="block px-4 py-2">Trip History</Link>
              <button
                onClick={() => {
                  setIsOpen(false);  // Close the dropdown before sign-out
                  handleSignOut();   // Trigger the sign-out function
                }}
                className="block px-4 py-2 text-black"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

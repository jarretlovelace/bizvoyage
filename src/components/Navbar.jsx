import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { doSignOut } from '../auth'; // Assuming `doSignOut` handles sign-out logic

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown state
  const navigate = useNavigate();

  // Toggle menu function
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu after selection
  const closeMenu = () => setIsOpen(false);

  const handleSignOut = async () => {
    console.log('Sign out button clicked');
    try {
      await doSignOut();
      console.log('User signed out');
      navigate('/signin'); // Redirect to sign-in page
    } catch (error) {
      console.error('Error signing out:', error);
      alert('Error signing out: ', error.message);
    }
  };

  return (
    <nav className="relative z-20 bg-red-800 text-white p-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-stretch">
        <img 
          src="/images/bv2.png" // Ensure path is correct relative to the build setup
          alt="BizVoyage Logo"
          className="h-20 w-auto"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        {/* Book A Trip Link (moved to the left of HQ) */}
        <Link to="/bookatrip" className="px-1 py-1 text-white hover:bg-red-800 transition">
          + Trip
        </Link>
        {/* HQ Link */}
        <Link to="/HQ" className="px-1 py-1 text-white hover:bg-red-800 transition">
          HQ
        </Link>
        {/* Dashboard Link */}
        <Link to="/dashboard" className="px-1 py-1 text-white hover:bg-red-800 transition">
          Dashboard
        </Link>

        {/* Menu Button */}
        <button
          aria-expanded={isOpen}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition"
          onClick={toggleMenu}
        >
          {isOpen ? 'Close Menu' : 'Menu'}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute right-0 top-full w-48 bg-red-800 text-white p-2 rounded-lg shadow-lg z-30 transition duration-200 ease-in-out">
          <li onClick={closeMenu}>
            <Link to="/dashboard" className="block p-2 hover:text-gray-300">Dashboard</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/profile" className="block p-2 hover:text-gray-300">Profile</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/settings" className="block p-2 hover:text-gray-300">Settings</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/mytrips" className="block p-2 hover:text-gray-300">Trips</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/mybusiness" className="block p-2 hover:text-gray-300">My Business</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/perks" className="block p-2 hover:text-gray-300">Rewards</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/triphistory" className="block p-2 hover:text-gray-300">Trip History</Link>
          </li>
          <li onClick={handleSignOut} className="block p-2 hover:text-gray-300 cursor-pointer">
            Sign Out
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

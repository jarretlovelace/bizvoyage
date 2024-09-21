import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { doSignOut } from '../auth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown state
  const navigate = useNavigate();

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state between true and false
  };

  // Close menu after selection
  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSignOut = async () => {
    console.log('Sign out button clicked');
    try {
      await doSignOut();
      console.log('User signed out');
      navigate('/signin');
    } catch (error) {
      console.log('Error signing out:', error);
      alert('Error signing out: ', error.message);
    }
  };

  return (
    <nav className="relative z-20 bg-red-700 text-white p-4 flex items-center justify-between">
      {/* Logo Section - Left-Aligned */}
      <div className="flex items-center">
        <img 
          src="/src/images/bv2.png" // Path to your logo image
          alt="BizVoyage Logo"
          className="h-16 w-auto" // Adjust size as needed
        />
      </div>

      {/* Centered Title */}
      <h2 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-bold text-center">
        Welcome to BizVoyage
      </h2>

      {/* Menu Button - Right-Aligned */}
      <button
        className="text-white text-lg"
        onClick={toggleMenu}
      >
        {isOpen ? 'Close Menu' : 'Menu'}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          className="absolute right-0 top-full w-48 bg-red-800 text-white p-2 rounded-lg shadow-lg z-30 transition duration-200 ease-in-out"
        >
          <li onClick={closeMenu}>
            <Link to="/home" className="block p-2 hover:text-gray-300">Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/bookatrip" className="block p-2 hover:text-gray-300">Book A Trip</Link>
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

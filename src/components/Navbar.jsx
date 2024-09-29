import { Link, useNavigate } from 'react-router-dom'; // Combined imports
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
    <nav className="relative z-20 bg-red-700 text-white p-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <img 
          src="/images/bv2.png" // Ensure path is correct relative to the build setup
          alt="BizVoyage Logo"
          className="h-16 w-auto"
        />
      </div>

      {/* Centered Title */}
      <h2 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-bold text-center">
        Welcome to BizVoyage
      </h2>

      {/* Right-aligned Buttons: Profile, Settings, and Menu */}
      <div className="flex items-center space-x-4">
        {/* Profile Link */}
        <Link to="/profile" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition">
          Profile
        </Link>

        {/* Settings Link */}
        <Link to="/settings" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition">
          Settings
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

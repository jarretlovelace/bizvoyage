import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown state
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/signin'); // Redirect to SignIn page after sign-out
      })
      .catch((error) => {
        alert('Error signing out');
      });
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
              <Link to="/mycompany" className="block px-4 py-2">My Company</Link>
              <Link to="/perks" className="block px-4 py-2">Perks</Link>
              <Link to="/triphistory" className="block px-4 py-2">Trip History</Link>
              <button
                onClick={handleSignOut}
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

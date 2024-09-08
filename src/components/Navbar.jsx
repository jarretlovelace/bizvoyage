// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/signin'); // Redirect to SignIn page after sign-out
    }).catch((error) => {
      alert('Error signing out');
    });
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl">BizVoyage</h1>
        <div className="relative">
          <button className="text-white">Menu</button>
          <div className="absolute right-0 bg-white text-gray-900 mt-2 rounded shadow-lg">
            <Link to="/home" className="block px-4 py-2">Home</Link>
            <Link to="/bookatrip" className="block px-4 py-2">Book A Trip</Link>
            <Link to="/mytrips" className="block px-4 py-2">My Trips</Link>
            <Link to="/mycompany" className="block px-4 py-2">My Company</Link>
            <Link to="/perks" className="block px-4 py-2">Perks</Link>
            <Link to="/triphistory" className="block px-4 py-2">Trip History</Link>
            <button onClick={handleSignOut} className="block px-4 py-2 text-red-600">Sign Out</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

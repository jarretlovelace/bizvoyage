import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const handleSignOut = () => {
    doSignOut().then(() => {
      navigate('/login');
    });
  };

  return (
    <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center'>
      {userLoggedIn ? (
        <button
          onClick={handleSignOut}
          className='text-sm text-blue-600 underline'
        >
          Sign Out
        </button>
      ) : (
        <>
          <Link className='text-sm text-blue-600 underline' to={'/login'}>
            Login
          </Link>
          <Link className='text-sm text-blue-600 underline' to={'/signup'}>
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
};

export default Header;

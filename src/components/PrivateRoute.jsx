// src/components/PrivateRoute.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/signin');  // Redirect to SignIn if not authenticated
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Clean up the subscription
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth status
  }

  return user ? children : null; // Render the child components if authenticated
};

export default PrivateRoute;

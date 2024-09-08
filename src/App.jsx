// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';  // Firebase auth check
import { auth } from './firebase';  // Your Firebase config file
import LandingPage from './components/LandingPage';
import HomePage from './pages/HomePage';
import BookATrip from './pages/BookATrip';
import MyTrips from './pages/MyTrips';
import MyCompany from './pages/MyCompany';
import Perks from './pages/Perks';
import TripHistory from './pages/TripHistory';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';  // PrivateRoute component

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);  // Stop loading once we get the auth state
    });

    return () => unsubscribe();  // Clean up the observer
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Loading state while checking auth
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* If user is authenticated, redirect to home, otherwise show LandingPage */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <LandingPage />} />

        {/* Auth routes (only show if not signed in) */}
        <Route path="/signin" element={!user ? <SignIn /> : <Navigate to="/home" />} />
        <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/home" />} />

        {/* Private routes - Only accessible if user is signed in */}
        <Route path="/home" element={<PrivateRoute user={user}><HomePage /></PrivateRoute>} />
        <Route path="/bookatrip" element={<PrivateRoute user={user}><BookATrip /></PrivateRoute>} />
        <Route path="/mytrips" element={<PrivateRoute user={user}><MyTrips /></PrivateRoute>} />
        <Route path="/mycompany" element={<PrivateRoute user={user}><MyCompany /></PrivateRoute>} />
        <Route path="/perks" element={<PrivateRoute user={user}><Perks /></PrivateRoute>} />
        <Route path="/triphistory" element={<PrivateRoute user={user}><TripHistory /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;

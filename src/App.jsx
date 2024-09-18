import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; // Firebase auth check
import { auth } from './firebase';  // Firebase config
import Navbar from './components/Navbar';  // Navbar component
import LandingPage from './components/LandingPage.jsx';  // Corrected import path
import Home from './pages/Home.jsx';
import BookATrip from './pages/BookATrip';
import MyTrips from './pages/MyTrips';
import MyBusiness from './pages/MyBusiness.jsx';
import Perks from './pages/Perks';
import TripHistory from './pages/TripHistory';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup.jsx';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [user, setUser] = useState(null);  // Tracks if user is authenticated
  const [loading, setLoading] = useState(true);  // Tracks loading state while checking auth

  // Firebase listener for authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  // Set user if logged in, otherwise null
      setLoading(false);  // Stop loading once we have the auth state
    });

    return () => unsubscribe();  // Clean up the observer when component unmounts
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;  // Loading spinner while checking auth
  }

  return (
    <Router>
      {/* Navbar displayed for all pages */}
      {user && <Navbar />} 
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <LandingPage />} />

        {/* SignIn & Signup - Redirect to home if already logged in */}
        <Route path="/signin" element={!user ? <SignIn /> : <Navigate to="/home" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/home" />} />

        {/* Private Routes - Navbar only shown after login */}
        <Route
          path="/home"
          element={
            <PrivateRoute user={user}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookatrip"
          element={
            <PrivateRoute user={user}>
              <BookATrip />
            </PrivateRoute>
          }
        />
        <Route
          path="/mytrips"
          element={
            <PrivateRoute user={user}>
              <MyTrips />
            </PrivateRoute>
          }
        />
        <Route
          path="/MyBusiness"
          element={
            <PrivateRoute user={user}>
              <MyBusiness />
            </PrivateRoute>
          }
        />
        <Route
          path="/perks"
          element={
            <PrivateRoute user={user}>
              <Perks />
            </PrivateRoute>
          }
        />
        <Route
          path="/triphistory"
          element={
            <PrivateRoute user={user}>
              <TripHistory />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'; 
import { auth } from './firebase'; 

// Import components
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import PrivateRoute from './components/PrivateRoute';
import BookTrip from './components/BookTrip';
import TripResults from './components/TripResults';

// Import pages
import Hq from'./pages/Hq';
import Dashboard from './pages/Dashboard';
import BookATrip from './pages/BookATrip';
import MyTrips from './pages/MyTrips';
import MyBusiness from './pages/MyBusiness';
import Perks from './pages/Perks';
import TripHistory from './pages/TripHistory';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <Router>
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={user ? <Navigate to="/Hq" /> : <LandingPage />} />
        <Route path="/signin" element={!user ? <SignIn /> : <Navigate to="/Hq" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/Hq" />} />

        <Route
          path="/Dashboard"
          element={
            <PrivateRoute user={user}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="Hq"
          element={
            <PrivateRoute user={user}>
              <Hq />
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
          path="/mybusiness"
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
        <Route
          path="/profile"
          element={
            <PrivateRoute user={user}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute user={user}>
              <Settings />
            </PrivateRoute>
          }
        />
        
        {/* New Routes for BookTrip and TripResults */}
        <Route 
          path="/book-a-trip" 
          element={
            <PrivateRoute user={user}>
              <BookTrip />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/trip-results" 
          element={
            <PrivateRoute user={user}>
              <TripResults />
            </PrivateRoute>
          } 
        />

      </Routes>
    </Router>
  );
}

export default App;

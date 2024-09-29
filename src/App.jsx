import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; 
import { auth } from './firebase'; 
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Home from './pages/Home';
import BookATrip from './pages/BookATrip';
import MyTrips from './pages/MyTrips';
import MyBusiness from './pages/MyBusiness';
import Perks from './pages/Perks';
import TripHistory from './pages/TripHistory';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
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
        <Route path="/" element={user ? <Navigate to="/home" /> : <LandingPage />} />
        <Route path="/signin" element={!user ? <SignIn /> : <Navigate to="/home" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/home" />} />

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
          path="/profile"  // <-- This is the route for Profile
          element={
            <PrivateRoute user={user}>
              <Profile />  
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

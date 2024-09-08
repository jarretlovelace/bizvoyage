import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import { AuthProvider, useAuth } from './contexts/authContext';

// PrivateRoute to protect authenticated routes
function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
    return currentUser ? children : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* Public routes for unauthorized users */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Private routes for authenticated users */}
          <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/bookatrip" element={<PrivateRoute><BookATrip /></PrivateRoute>} />
          <Route path="/mytrips" element={<PrivateRoute><MyTrips /></PrivateRoute>} />
          <Route path="/mycompany" element={<PrivateRoute><MyCompany /></PrivateRoute>} />
          <Route path="/perks" element={<PrivateRoute><Perks /></PrivateRoute>} />
          <Route path="/triphistory" element={<PrivateRoute><TripHistory /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

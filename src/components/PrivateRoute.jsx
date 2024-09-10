import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/" />;  // Redirect to landing page if not authenticated
};

export default PrivateRoute;

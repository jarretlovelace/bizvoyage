import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import the main App component
import './index.css';  // Import the global styles, including Tailwind

// Create the root element to render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

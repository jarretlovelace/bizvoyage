import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Header from './components/Header';
import { AuthProvider } from './contexts/authContext';

function App() {
    return (
        <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                </Routes>
        </AuthProvider>
    );
}

export default App;

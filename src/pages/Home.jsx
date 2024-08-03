// src/pages/Home.jsx
import React from 'react';
import { useAuth } from '../contexts/authContext';

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to BizVoyage!</h1>
      <p className="mt-4 text-xl">
        Hello {currentUser?.displayName ? currentUser.displayName : currentUser?.email}, you are now logged in.
      </p>
    </div>
  );
};

export default Home;

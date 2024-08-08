import React from 'react';
import { useAuth } from '../contexts/authContext';
import myImage from '../images/bv2.png';

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-home">
      <img src={myImage} alt="BizVoyage Logo" className="w-100 h-64 object-cover mb-5" />
      <h1 className="text-4xl font-bold text-white">Welcome to BizVoyage!</h1>
    
    </div>
  );
};

export default Home;

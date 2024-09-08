// src/pages/SignUp.jsx
import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');  // Redirect after sign-up
    } catch (error) {
      alert('Failed to create an account');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSignUp} className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-xl mb-4">Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border mb-4 p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border mb-4 p-2 w-full"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;

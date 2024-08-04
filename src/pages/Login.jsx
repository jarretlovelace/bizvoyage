import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "../firebase";
import { useAuth } from "../contexts/authContext";

const Login = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await signInWithEmailAndPassword(email, password);
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      signInWithPopup(new GoogleAuthProvider()).catch(err => {
        setErrorMessage(err.message);
        setIsSigningIn(false);
      });
    }
  };

  return (
    <div>
      {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
      <main className="w-full h-screen flex items-center justify-center bg-login">
        <div className='w-96 text-red-800 space-y-5 p-4 shadow-xl border rounded-xl bg-white bg-opacity-90'>
          <div className='text-center'>
            <div className='text-red-800 text-xl font-semibold sm:text-2xl'>BizVoyage</div>
          </div>
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className='text-sm text-red-800 font-bold'>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="password" className='text-sm text-red-800 font-bold'>Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete='current-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border rounded-lg"
              />
            </div>
            {errorMessage && <span className='text-red-600 font-bold'>{errorMessage}</span>}
            <button
              type="submit"
              disabled={isSigningIn}
              className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-400' : 'bg-blue-500'}`}
            >
              {isSigningIn ? 'Signing In...' : 'Sign In'}
            </button>
            <button
              type="button"
              onClick={onGoogleSignIn}
              className="w-full mt-2 px-4 py-2 text-white font-medium rounded-lg bg-red-500"
            >
              Sign In with Google
            </button>
          </form>
          <p className="text-center text-sm">Don't have an account? <Link to={'/signup'} className='text-blue-600 underline'>Sign Up</Link></p>
        </div>
      </main>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';

const Signup = () => {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningUp) {
            setIsSigningUp(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password, displayName);
            } catch (error) {
                setErrorMessage(error.message);
                setIsSigningUp(false);
            }
        }
    };

    return (
        <div>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
            <main className="w-full h-screen flex items-center justify-center">
                <div className='w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl'>
                    <div className='text-center'>
                        <div className='text-gray-800 text-xl font-semibold sm:text-2xl'>BizVoyage</div>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                            <label className='text-sm text-gray-600 font-bold'>Display Name</label>
                            <input
                                type="text"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className='text-sm text-gray-600 font-bold'>Email</label>
                            <input
                                type="email"
                                autoComplete='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className='text-sm text-gray-600 font-bold'>Password</label>
                            <input
                                type="password"
                                autoComplete='new-password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border rounded-lg"
                            />
                        </div>
                        {errorMessage && <span className='text-red-600 font-bold'>{errorMessage}</span>}
                        <button
                            type="submit"
                            disabled={isSigningUp}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningUp ? 'bg-gray-400' : 'bg-blue-500'}`}
                        >
                            {isSigningUp ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </form>
                    <p className="text-center text-sm">Already have an account? <Link to={'/login'} className='text-blue-600 underline'>Login</Link></p>
                </div>
            </main>
        </div>
    );
};

export default Signup;

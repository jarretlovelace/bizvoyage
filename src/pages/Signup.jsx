import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import logo from '../images/bv2.png';
import backgroundImage from '../images/ai_image4.jpeg';
import './style/SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    companyName: '',
    companyPhoneNumber: '',
    companyEmail: '',
    position: '',
    location: '',
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        company: {
          name: formData.companyName,
          phoneNumber: formData.companyPhoneNumber,
          email: formData.companyEmail,
          position: formData.position,
          location: formData.location,
        },
      });

      alert('Sign up successful!');
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('Failed to sign up.');
    }

    setLoading(false);
  };

  const handleLogoClick = () => {
    history.push('/'); // Redirect to landing page
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set background image
      }}
    >
      {/* Logo */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" className="w-40 h-auto animate-pulse" /> {/* Adjust logo size and animation */}
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row justify-center items-center p-6 pt-24">
        {/* Left Section: Red Background with Video */}
        <div className="relative lg:w-1/3 w-full flex justify-center mb-6 lg:mb-0 lg:mr-8">
          <div className="bg-red-500 w-full h-auto p-4 rounded-lg flex justify-center items-center">
            <video
              src="/src/videos/BizVoyage_Registration_Guide.mp4"  
              autoPlay
            />
          </div>
        </div>

        {/* Right Section: Form Section */}
        <div className="lg:w-1/2 w-full max-w-lg">
          {/* Personal Information */}
          <div className="bg-red-500 p-6 mb-6 rounded-lg animate-fade-in">
            <h2 className="text-xl font-semibold mb-4 text-white">Personal Information</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white font-medium mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-white font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-white font-medium mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-white font-medium mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg focus:outline-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-700 text-white py-2 px-4 rounded-lg"
                disabled={loading}
              >
                {loading ? 'Signing up...' : 'Sign Up'}
              </button>
            </form>
          </div>

          {/* Work Information */}
          <div className="bg-red-500 p-6 rounded-lg animate-fade-in">
            <h2 className="text-xl font-semibold mb-4 text-white">Work Information</h2>

            <div className="mb-4">
              <label className="block text-white font-medium mb-2">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-2 rounded-lg focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white font-medium mb-2">Company Phone Number</label>
              <input
                type="text"
                name="companyPhoneNumber"
                value={formData.companyPhoneNumber}
                onChange={handleChange}
                className="w-full p-2 rounded-lg focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white font-medium mb-2">Company Email</label>
              <input
                type="email"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleChange}
                className="w-full p-2 rounded-lg focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white font-medium mb-2">Position Held</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-2 rounded-lg focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 rounded-lg focus:outline-none"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

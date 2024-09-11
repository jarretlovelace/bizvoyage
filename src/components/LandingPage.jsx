import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import logo from '/src/images/image.png'; 
import backgroundImage from '/src/images/image5.jpeg';  // Corrected the path

const LandingPage = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Logo Section */}
      <div className="mb-10" data-aos="fade-down">
        <img src={logo} alt="BizVoyage Logo" className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain" />
      </div>

      {/* Welcome Message and Call-to-Action */}
      <div className="max-w-md w-full bg-white shadow-md p-8 rounded-md" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-thin text-center mb-6 text-red-700">Welcome to BizVoyage</h1>
        <p className="text-center mb-4">Please sign in or sign up to continue</p>
        <div className="flex justify-around">
          <a href="/signin" className="px-4 py-2 bg-blue-500 text-white rounded-md">Sign In</a>
          <a href="/signup" className="px-4 py-2 bg-green-500 text-white rounded-md">Sign Up</a>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-10 text-red-600 font-extrabold text-center px-4 md:px-0" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl mb-6">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Testimonial 1 */}
          <div className="bg-red-700 p-4 rounded-lg w-full md:w-80 text-left" data-aos="flip-left">
            <h3 className="text-xl font-bold text-white mb-2">Acme Corp</h3>
            <p className="text-white">"BizVoyage has transformed how we manage business travel!"</p>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-red-700 p-4 rounded-lg w-full md:w-80 text-left" data-aos="flip-right">
            <h3 className="text-xl font-bold text-white mb-2">Globex Inc</h3>
            <p className="text-white">"The most efficient travel management tool we've used."</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-10 bg-red-700 text-white text-center py-8 w-full" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">Ready to Streamline Your Business Travel?</h2>
        <p className="text-lg mb-6">Sign up today and start saving time and money on every trip!</p>
        <a href="/signup" className="px-6 py-3 bg-white text-red-700 rounded-md font-semibold">Get Started</a>
      </div>
    </div>
  );
};

export default LandingPage;

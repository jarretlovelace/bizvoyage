import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import logo from '../images/bv2.png'; 
import backgroundImage from '../images/image5.jpeg';  // Main background image
import featuresImage from '../images/ai1.png'; // Features section image
import testimonialImage from '../images/ai2.png'; // Testimonial image

const LandingPage = () => {
  // Initialize AOS with custom options
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', // Custom easing
      once: true, // Only animate once
      mirror: false, // Do not repeat animations while scrolling back up
    });
  }, []);

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* Full-Screen Welcome Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-black bg-opacity-50">
        {/* Header with Sign In/Sign Up buttons */}
        <header className="w-full py-4 px-8 flex justify-between items-center bg-black bg-opacity-70 absolute top-0 left-0">
          <img src={logo} alt="BizVoyage Logo" className="h-12 object-contain" />
          <div className="space-x-4">
            <a href="/signin" className="px-4 py-2 bg-red-700 text-white rounded-md">Sign In</a>
            <a href="/signup" className="px-4 py-2 bg-red-700 text-white rounded-md">Sign Up</a>
          </div>
        </header>

        {/* Welcome Message in Center */}
        <div className="text-center max-w-md w-full bg-white bg-opacity-90 shadow-md p-8 rounded-md" data-aos="fade-up">
          <h1 className="text-5xl font-thin text-red-700 mb-6">Welcome to BizVoyage</h1>
          <p className="text-lg">Your destination for business travel management.</p>
        </div>
      </section>

      {/* Scroll-Down for Features Section */}
      <section className="py-12 my-8 bg-black bg-opacity-60 text-white" data-aos="fade-up">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl mb-6 bg-red-700 bg-opacity-70 p-4 rounded">Exclusive Perks</h2>
          
          {/* Grid layout with image and features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Features Image */}
            <div className="w-full">
              <img src={featuresImage} alt="Features" className="rounded-lg shadow-lg object-cover w-full" />
            </div>
            
            {/* Features List */}
            <div>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white bg-opacity-80 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-700 mb-2">Effortless Trip Planning</h3>
                  <p>Plan and book your business trips in minutes with a seamless experience.</p>
                </div>
                <div className="bg-white bg-opacity-80 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-700 mb-2">Real-Time Expense Tracking</h3>
                  <p>Track your travel expenses in real-time and optimize your travel budget.</p>
                </div>
                <div className="bg-white bg-opacity-80 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-700 mb-2">Comprehensive Reporting</h3>
                  <p>Generate detailed reports for trip analysis, compliance, and budgeting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 my-8 bg-black bg-opacity-60 text-white" data-aos="fade-up">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl mb-6 bg-red-700 bg-opacity-70 p-4 rounded">Watch How It Works</h2>
          
          {/* Video Embed */}
          <div className="w-full h-64">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="BizVoyage Explainer Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 my-8 bg-black bg-opacity-60 text-white" data-aos="fade-up">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl mb-6 bg-red-700 bg-opacity-70 p-4 rounded">What Our Clients Say</h2>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white bg-opacity-80 p-6 rounded-lg">
              <p className="text-lg font-semibold text-red-700 mb-4">"BizVoyage has simplified everything! From planning trips to managing expenses, I can’t imagine going back to our old methods. Highly recommend for any business!"</p>
              <p className="text-md font-bold">- Jane Smith, CFO of Tech Innovators</p>
            </div>

            <div className="bg-white bg-opacity-80 p-6 rounded-lg">
              <p className="text-lg font-semibold text-red-700 mb-4">"Managing corporate travel has never been easier! BizVoyage has saved us countless hours and made travel planning stress-free. I wouldn’t use anything else!"</p>
              <p className="text-md font-bold">- Alex Johnson, Operations Manager at Global Solutions</p>
            </div>
          </div>

          {/* Centered image for testimonials */}
          <div className="flex justify-center mb-6">
            <img src={testimonialImage} alt="Testimonial" className="rounded-lg shadow-lg object-cover w-3/4 md:w-1/2" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 my-8 bg-black bg-opacity-60 text-white" data-aos="fade-up">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl mb-6 bg-red-700 bg-opacity-70 p-4 rounded">Ready to Streamline Your Business Travel?</h2>
          <p className="text-lg mb-6">Sign up today and start saving time and money on every trip!</p>
          <a href="/signup" className="px-6 py-3 bg-white text-red-700 rounded-md font-semibold">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

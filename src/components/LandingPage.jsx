import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../images/bv2.png';
import '../pages/style/LandingPage.css';


const testimonials = [
  {
    avatar: "/public/images/testimonial2.png",
    name: "John Doe",
    role: "CEO at ExampleCorp",
    testimonial: "This service is amazing! It completely transformed our business travel process.",
    rating: 5,
  },
  {
    avatar: "/public/images/testimonial1.png",
    name: "Jane Smith",
    role: "Manager at Techify",
    testimonial: "A seamless and intuitive experience. Highly recommended!",
    rating: 4,
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white bg-opacity-80 p-6 rounded-lg flex items-center shadow-md">
    <img src={icon} alt={title} className="h-20 w-20 mr-6" loading="lazy" />
    <div>
      <h3 className="text-xl font-bold text-red-700 mb-2">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  </div>
);

const TestimonialCard = ({ avatar, name, role, testimonial, rating }) => (
  <div className="testimonial-card bg-white bg-opacity-80 p-6 shadow-md">
    <img src={avatar} alt={`${name}'s avatar`} className="avatar h-40 w-auto mx-auto mb-4" />
    <h3 className="name text-xl font-bold text-red-700">{name}</h3>
    <p className="role text-sm text-gray-600">{role}</p>
    <p className="testimonial text-black mt-4">{testimonial}</p>
    <div className="rating mt-2 text-yellow-500">
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </div>
  </div>
);

const LandingPage = () => {
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (

    <div className="landing-page">
      {/* Header Section */}
      <header className="w-full py-4 px-8 flex justify-between items-center bg-red-700 bg-opacity-70 fixed top-0 left-0 z-50">
        <img src={logo} alt="BizVoyage Logo" className="h-12 object-contain" />
        <div className="space-x-4">
          <a href="/signin" className="px-4 py-2 bg-red-700 text-white rounded-md">
            Sign In
          </a>
          <a href="/signup" className="px-4 py-2 bg-red-700 text-white rounded-md">
            Sign Up
          </a>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="welcome-section min-h-screen flex flex-col justify-center items-center text-center">
        <div className="text-center max-w-md w-full bg-white bg-opacity-90 shadow-md p-8 rounded-md" data-aos="fade-up">
          <h1 className="text-5xl font-thin text-red-700 mb-6">Welcome To</h1>
          <img src={logo} alt="BizVoyage Logo" className="h-40object-contain mb-4" />
          <p className="text-xl text-red-700 font-thin">
            Need a business trip rescue? Call us your travel superhero—minus the cape.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-10 bg-gray-100 text-center">
        <button
          onClick={() => setShowVideoPopup(true)}
          className="px-6 py-3 bg-red-700 text-white rounded-md shadow-md hover:bg-red-800"
        >
          Watch Video
        </button>
      </section>

      {showVideoPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-3/4 md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-4">
            <button
              onClick={() => setShowVideoPopup(false)}
              className="absolute top-2 right-2 bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-800"
            >
              &times;
            </button>
            <video className="w-full rounded-lg" controls>
              <source src="/videos/BizVoyageVid.mp4" type="video/mp4" />
              <source src="/videos/BizVoyage_Experience.mp4" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="features-section py-20 my-8 bg-black bg-opacity-60 text-white" data-aos="fade-up">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl mb-10 bg-red-700 bg-opacity-70 p-4 rounded">
            Features So Exclusive, They Might Just Have Their Own Fan Club
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon="/public/images/tripplanning.jpg"
              title="Effortless Trip Planning"
              description="Plan and book your business trips in minutes with a seamless experience."
            />
            <FeatureCard
              icon="/public/images/expensetracking.jpg"
              title="Real-Time Expense Tracking"
              description="Track your travel expenses in real-time and optimize your travel budget."
            />
            <FeatureCard
              icon="/public/images/reportingicon.jpg"
              title="Comprehensive Reporting"
              description="Generate detailed reports for trip analysis, compliance, and budgeting."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-12 my-8 bg-black bg-opacity-60 text-white" data-aos="fade-up">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl mb-6 bg-red-700 bg-opacity-70 p-4 rounded">What Our Clients Say</h2>
          <div className="testimonial-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item, index) => (
              <TestimonialCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-12 my-8 bg-black bg-opacity-60 text-white" data-aos="fade-up">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl mb-6 bg-red-700 bg-opacity-70 p-4 rounded">
            Ready to Streamline Your Business Travel?
          </h2>
          <a href="/signup" className="px-6 py-3 bg-white text-red-700 rounded-md font-semibold">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

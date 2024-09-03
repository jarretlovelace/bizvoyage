import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-landingpage min-h-screen">
      <img src="/public/images/bv4.jpg" alt="BizVoyage Logo" className="h-10" />
      {/* Hero Section */}
      <section className="bg-blue-500 bg-opacity-50 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-red-500">Welcome to BizVoyage</h1>
          <p className="mt-4 text-lg">Simplify your business travel management</p>
          <button className="mt-8 px-6 py-3 bg-yellow-500 text-blue-900 rounded-full font-semibold">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-500">Why Choose BizVoyage?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl text- font-bold text-color: bg-yellow-500">Comprehensive Management</h3>
              <p className="mt-4">Handle bookings, expenses, and itineraries all in one place.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-color: bg-yellow-500">Exclusive Deals</h3>
              <p className="mt-4">Access the latest travel deals tailored to your business needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-color: bg-yellow-500">24/7 Support</h3>
              <p className="mt-4">Get assistance whenever you need it, wherever you are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-300 bg-opacity-50 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <div className="mt-10 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p>"BizVoyage has completely transformed how we manage travel. It's a game-changer!"</p>
              <span className="block mt-4 text-gray-500">- John Doe, CEO of Acme Corp</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p>"The exclusive deals we get through BizVoyage save us so much money."</p>
              <span className="block mt-4 text-gray-500">- Jane Smith, CFO of TechSolutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Transform Your Business Travel?</h2>
          <button className="mt-8 px-6 py-3 bg-yellow-500 text-blue-900 rounded-full font-semibold">Sign Up Now</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

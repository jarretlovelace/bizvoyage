import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Animation library for smooth transitions

const PromotionalOffers = () => {
  return (
    <div
      className="w-full h-screen bg-gradient-to-r from-red-600 to-black text-white p-8 flex flex-col items-center"
      style={{
        backgroundImage: `url('/src/images/ai_image9.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Page Title */}
      <motion.h1
        className="text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Exclusive Promotions and Offers
      </motion.h1>

      {/* Promotions Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {/* Example Promo 1 */}
        <motion.div
          className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-red-700 text-3xl font-semibold mb-4">Fly High for Less</h2>
          <p className="text-lg mb-4">
            Book a business class flight and get 30% off your next hotel stay. Exclusive only to BizVoyage members!
          </p>
          <Link
            to="/bookatrip"
            className="text-gray-500 underline hover:text-red-700 transition-colors"
          >
            Book Now
          </Link>
        </motion.div>

        {/* Example Promo 2 */}
        <motion.div
          className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-red-700 text-3xl font-semibold mb-4">Tech On the Go</h2>
          <p className="text-lg mb-4">
            Rent the latest gadgets and laptops for business trips at a discounted rate, exclusively for BizVoyage users.
          </p>
          <Link
            to="/mybusiness"
            className="text-gray-500 underline hover:text-red-700 transition-colors"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Back to Perks Button */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/perks"
          className="text-xl bg-gray-500 p-4 rounded-md hover:bg-red-700 transition"
        >
          Back to Perks
        </Link>
      </motion.div>
    </div>
  );
};

export default PromotionalOffers;

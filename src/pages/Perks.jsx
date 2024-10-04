import React from 'react';

const rewards = [
  { id: 1, name: 'Travel Discount', pointsRequired: 1000, description: '10% off your next trip', image: '/src/images/traveldiscount.png' },
  { id: 2, name: 'Gift Card', pointsRequired: 500, description: '$25 Gift Card', image: '/src/images/giftcard.png' },
  // Add more rewards here
];

const Perks = () => {
  const userPoints = 1200; // Example user points, replace with actual data

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="bg-red-600 p-2 rounded-lg text-3xl text-white font-bold">Your Perks</h1>
        <p className="bg-red-600 p-3 text-xl rounded-lg font-semibold text-white">Where Loyalty Pays Off (Unlike That Gym Membership)</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl text-red-700 font-mono font-semibold">Points Balance</h2>
        <div className="bg-red-600 p-4 rounded-lg text-center">
          <p className="text-2xl text-white font-bold">{userPoints} Points</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Available Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map(reward => (
            <div key={reward.id} className="bg-white border rounded-lg shadow-md p-4">
              <img src={reward.image} alt={reward.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{reward.name}</h3>
              <p className="text-gray-600">{reward.description}</p>
              <p className="text-lg font-bold mt-2">Requires: {reward.pointsRequired} Points</p>
              <button className="mt-4 bg-red-700 text-white py-2 px-4 rounded-lg">Redeem</button>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Recent Activity</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          {/* Placeholder for recent activity */}
          <p>No recent activity.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Promotions & Offers</h2>
        <div className="bg-red-600 text-white p-4 rounded-lg">
          {/* Placeholder for promotions */}
          <p>Check out our current promotions!</p>
        </div>
      </section>
    </div>
  );
};

export default Perks;

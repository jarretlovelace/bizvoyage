// src/pages/Perks.jsx

const Perks = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/images/ai_image4.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="col-span-1 row-span-1 rounded-lg content-center shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-1 uppercase font-mono text-red-700">
          Perks
          </h1>
          <p className="text-red-700">
          Explore exclusive perks and rewards for business travelers.
          </p>
        </div>
      </div>

      <div className="p-100">
        <h1 className="text-4xl font-bold mb-4">Perks</h1>
        <p>Explore exclusive perks and rewards for business travelers.</p>
        {/* You can later add content for displaying perks */}
      </div>
    </div>
  );
};

export default Perks;

import React from "react";

// components
import Notifications from "../components/Hq/Notifications";


const HQ = () => {
  const sections = [
    {
      id: "notifications",
      title: "Notifications",
      description: "Your business trip intel, minus the drama!",
      backgroundImage: "/images/hq6.png",
    },
    {
      id: "travel-hq",
      title: "Travel HQ",
      description: "The ultimate command center for your travels.",
      backgroundImage: "/images/hq5.png",
    },
    {
      id: "sleeper-treasure",
      title: "Sleeper Treasure",
      description: "Hidden gems for restful stays.",
      backgroundImage: "/images/hq4.png",
    },
    {
      id: "coin-swap",
      title: "Coin Swap",
      description: "Currency exchange made simple.",
      backgroundImage: "/images/hq3.png",
    },
    {
      id: "biztracks",
      title: "BizTracks",
      description: "Track expenses like a boss.",
      backgroundImage: "/images/hq2.png",
    },
    {
      id: "rewards-radar",
      title: "Rewards Radar",
      description: "Spot the best perks and points.",
      backgroundImage: "/images/hq1b.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HQ Page Content */}
      <main className="container mx-auto py-10">
        {/* Hero Section */}
        <section className="relative mb-8">
          <div
            className="h-48 w-full flex items-center justify-center xlg:shadow-xlg"
            style={{
              backgroundImage: `url('/images/homepagebg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="font-custom text-9xl text-red-800 font-thin justify-left">TRAVEL HQ</h1>
          </div>
        </section>

        {/* Box Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
          {sections.map((box) => (
            <a
              key={box.id}
              href={`#${box.id}`}
              className="bg-red-700 text-white py-6 text-center font-bold uppercase rounded-lg hover:bg-red-800"
            >
              {box.title}
            </a>
          ))}
        </div>

  {/* Sections */}
  {sections.map((section) => (
          <section
            id={section.id}
            key={section.id}
            className="font-bold text-white my-8 p-10 shadow-md "
            style={{
              backgroundImage: `url(${section.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-4xl text-red-800 font-bold mb-4">{section.title}</h2>
            <p className="text-lg">{section.description}</p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default HQ;

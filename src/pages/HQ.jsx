import React, { useState, useEffect } from "react";
import Notifications from "../components/Hq/Notifications";
// import '../pages/style/HQ.css';

const HQ = () => {
  // States for currency conversion
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Fetch exchange rate on currency change
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        const data = await response.json();
        setExchangeRate(data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  // Recalculate converted amount when exchangeRate or amount changes
  useEffect(() => {
    if (exchangeRate) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

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

  const spotifyPlaylist = "https://open.spotify.com/embed/playlist/37i9dQZF1DWY4lFlS4Pnso";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HQ Page Content */}
      <main className="container mx-auto py-10">
        {/* Hero Section */}
        <section className="relative mb-8">
          <div
            className="bg-cover bg-center h-48 w-full flex items-center justify-center"
            style={{
              backgroundImage: `url('/images/homepagebg.png')`,
            }}
          >
            <h1 className="font-custom text-9xl text-red-800 font-thin">TRAVEL HQ</h1>
          </div>
        </section>

        {/* Box Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
          {sections.map((box) => (
            <a
              key={box.id}
              href={`#${box.id}`}
              className="bg-red-700 text-white py-6 text-center font-bold uppercase rounded-lg hover:bg-red-800"
              aria-label={`Navigate to ${box.title}`}
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
            className="font-bold text-white my-8 p-10 shadow-md"
            style={{
              backgroundImage: `url(${section.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-4xl text-red-800 font-bold mb-4">{section.title}</h2>
            <p className="text-lg">{section.description}</p>
            {section.id === "biztracks" && (
              <div className="mt-4">
                <iframe
                  src={spotifyPlaylist}
                  width="100%"
                  height="380"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {section.id === "coin-swap" && exchangeRate && (
              <div className="mt-4 bg-red-700 text-black p-4 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">Currency Converter</h3>
                <div className="flex flex-col space-y-2">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="p-2 border rounded-md"
                    placeholder="Amount"
                  />
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="p-2 border rounded-md"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="p-2 border rounded-md"
                  >
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                  </select>
                  <p className="mt-2">
                    Converted Amount: <strong>{convertedAmount} {toCurrency}</strong>
                  </p>
                </div>
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  );
};

export default HQ;

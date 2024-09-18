import React, { useState, useEffect } from 'react';

const MyBusiness = () => {
  // Example business data (could come from an API)
  const [businessData, setBusinessData] = useState({
    logo: '/src/images/example.jpeg',
    name: 'Example Corp',
    slogan: 'Innovating the Future',
    description: 'Example Corp is a leader in innovation, providing cutting-edge solutions for businesses globally.',
    services: ['Consulting', 'Product Development', 'Customer Support'],
    team: [
      { name: 'John Doe', role: 'CEO', email: 'john@example.com' },
      { name: 'Jane Smith', role: 'CTO', email: 'jane@example.com' }
    ],
    stats: {
      totalSales: 1000,
      totalClients: 250,
      recentGrowth: '5%'
    },
    updates: [
      'New partnership with Tech Innovations',
      'Expanding services to Europe'
    ],
    links: {
      website: 'https://www.example.com',
      linkedin: 'https://linkedin.com/example'
    }
  });

  return (
    <div className="container mx-auto p-6">
      {/* Business Header */}
      <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md mb-8">
        <img src={businessData.logo} alt="Business Logo" className="w-24 h-24 mr-4 rounded-full" />
        <div>
          <h1 className="text-3xl font-bold">{businessData.name}</h1>
          <p className="text-gray-600">{businessData.slogan}</p>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>{businessData.description}</p>
      </div>

      {/* Services Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <ul className="list-disc pl-6">
          {businessData.services.map((service, index) => (
            <li key={index} className="mb-2">{service}</li>
          ))}
        </ul>
      </div>

      {/* Team Members Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {businessData.team.map((member, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-blue-600">{member.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity/Statistics Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Business Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="text-3xl font-bold">{businessData.stats.totalSales}</h3>
            <p className="text-gray-600">Total Sales</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">{businessData.stats.totalClients}</h3>
            <p className="text-gray-600">Total Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">{businessData.stats.recentGrowth}</h3>
            <p className="text-gray-600">Recent Growth</p>
          </div>
        </div>
      </div>

      {/* Business Updates Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
        <ul className="list-disc pl-6">
          {businessData.updates.map((update, index) => (
            <li key={index} className="mb-2">{update}</li>
          ))}
        </ul>
      </div>

      {/* Custom Links Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Find Us Online</h2>
        <p>
          <a href={businessData.links.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Website
          </a>
        </p>
        <p>
          <a href={businessData.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default MyBusiness;

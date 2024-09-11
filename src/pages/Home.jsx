import React from 'react';
import logo from '/src/images/image.png'; 
import { Calendar, momentLocalizer } from 'react-big-calendar'; // Calendar imports
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './style/Home.css';
import Weather from '../components/Weather';  // Import the Weather component
const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Trip to Paris',
    start: new Date(),
    end: new Date(),
  },
];

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {/* Main Section with Background Image */}
      
      <div
        className="col-span-4 row-span-4 bg-white rounded-lg shadow-lg p-4"
        style={{
          backgroundImage: "url('/src/images/images-10.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2 className="text-3xl font-mono text-transform: uppercase text-red-900">Dashboard</h2>
      </div>

      {/* Calendar Section */}
      <div className="col-span-3 row-span-2 bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold text-red-700">Calendar</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 400 }}  // Adjust the height as needed
        />
      </div>

      {/* Weather Section */}
     <div className="col-span-0.3 row-span-0.3 bg-white rounded-lg shadow-lg p-4">
      <Weather />
     </div>
     

      {/* Messaging Center Section */}
      <div className="col-span-1 row-span-1 bg-white rounded-lg shadow-lg p-4 opacity-40">
        <h2 className="text-xl font-bold text-red-700">Messaging Center</h2>
        <img src="/src/images/image15.jpg" alt="Messaging Center" className="w-full h-auto rounded-lg mt-4" />
      </div>

      {/* Scan Receipts Section */}
      <div className="col-span-1 row-span-1 bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold text-red-700">Scan Receipts</h2>
        <img src="/src/images/image12.jpg" alt="Scan Receipts" className="w-full h-auto rounded-lg mt-4 opacity-40" />
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import logo from '/src/images/image.png'; 
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './style/Home.css';
import Weather from '../components/Weather';  

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Trip to Paris',
    start: new Date(),
    end: new Date(),
  },
];

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

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
        <h2 className="text-3xl font-mono uppercase text-red-900">Dashboard</h2>
      </div>

      {/* Calendar Section */}
      <div className="col-span-3 row-span-2 bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold text-red-700">Calendar</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 400 }}  
        />
      </div>

      {/* Weather Section */}
      <div className="col-span-1 row-span-1 bg-white rounded-lg shadow-lg p-4">
        <Weather />
      </div>

      {/* Messaging Center Section */}
      <div className="col-span-1 row-span-1 bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold text-red-700">Messaging Center</h2>
        <img src="/src/images/image15.jpg" alt="Messaging Center" className="w-full h-auto rounded-lg mt-4" />
      </div>

      {/* Scan Receipts Section */}
      <div className="col-span-1 row-span-1 bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold text-red-700">Scan Receipts</h2>
        
        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          capture="environment"
          className="mb-4"
        />

        {/* Image Preview */}
        {previewUrl && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Receipt Preview:</h3>
            <img src={previewUrl} alt="Receipt Preview" className="mt-2 border rounded" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

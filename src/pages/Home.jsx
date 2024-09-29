import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './style/Home.css';
import Weather from '../components/Weather';
import logo from '../images/bv2.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const localizer = momentLocalizer(moment);

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Trip to Paris',
      start: new Date(),
      end: new Date(),
    },
  ]);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [editEvent, setEditEvent] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

  const handleAddOrEditEvent = () => {
    if (!newEvent.title || !newEvent.start || !newEvent.end) {
      alert('Please provide valid title, start, and end date for the event.');
      return;
    }
    if (editEvent) {
      setEvents(
        events.map((event) =>
          event.id === editEvent.id
            ? { ...event, title: newEvent.title, start: new Date(newEvent.start), end: new Date(newEvent.end) }
            : event
        )
      );
      setEditEvent(null);
    } else {
      setEvents([
        ...events,
        { id: Date.now(), title: newEvent.title, start: new Date(newEvent.start), end: new Date(newEvent.end) },
      ]);
    }
    setNewEvent({ title: '', start: '', end: '' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="relative w-screen h-screen bg-gray-100">
      {/* Navigation */}
      {/* <header className="w-full py-4 px-8 flex justify-between items-center bg-red-700 bg-opacity-70">
        <img src={logo} alt="BizVoyage Logo" className="h-12 object-contain" />
        <div className="space-x-4">
          <Link to="/profile" className="px-4 py-2 bg-red-700 text-white rounded-md">Profile</Link>
          <Link to="/settings" className="px-4 py-2 bg-red-700 text-white rounded-md">Settings</Link>
        </div>
      </header> */}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen p-6 bg-gray-100 bg-opacity-90">
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Weather */}
          <div className="col-span-1 bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
            <h2 className="text-xl font-bold text-red-700 mb-4">Weather</h2>
            <Weather />
          </div>

          {/* Receipt Scanner */}
          <div className="col-span-1 bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
            <h2 className="text-xl font-bold text-red-700 mb-4">Scan Receipts</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {previewUrl && <img src={previewUrl} alt="Receipt Preview" className="mt-4" />}
          </div>
        </div>

        {/* Calendar Section */}
        <div id="calendar" className="mb-6 bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
          <h2 className="text-xl font-bold text-red-700 mb-4">Calendar</h2>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">{editEvent ? 'Edit Event' : 'Add New Event'}</h3>
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="border p-2 mr-2"
            />
            <input
              type="date"
              value={newEvent.start}
              onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
              className="border p-2 mr-2"
            />
            <input
              type="date"
              value={newEvent.end}
              onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
              className="border p-2 mr-2"
            />
            <button onClick={handleAddOrEditEvent} className="bg-red-700 text-white p-2 rounded">
              {editEvent ? 'Update Event' : 'Add Event'}
            </button>
          </div>
        </div>

        {/* Messaging Section */}
        <div id="messaging" className="grid grid-cols-2 gap-6 mb-6">
          <div className="col-span-2 bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
            <h2 className="text-xl font-bold text-red-700 mb-4">Messaging Center</h2>
            <div className="border p-4 h-64 overflow-y-scroll bg-gray-50 mb-4">
              {messages.length === 0 ? (
                <p className="text-gray-500">No messages yet...</p>
              ) : (
                messages.map((message) => (
                  <div key={message.id} className="mb-2">
                    <div className="bg-gray-200 p-2 rounded">{message.text}</div>
                  </div>
                ))
              )}
            </div>
            <form onSubmit={handleSendMessage} className="flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="border p-2 flex-grow mr-2"
                placeholder="Type a message..."
              />
              <button type="submit" className="bg-red-700 text-white p-2 rounded">Send</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-red-700 text-white text-center py-4">
        <p className="text-sm">&copy; 2024 BizVoyage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

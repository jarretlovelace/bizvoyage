import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './style/Dashboard.css';
import Weather from '../components/Weather';
import { FaComments } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Calendar localizer
const localizer = momentLocalizer(moment);

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [showMessagingCenter, setShowMessagingCenter] = useState(false);
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
    <div className="dashboard-container relative w-screen h-screen">
      {/* Header Sections */}
      <header className="bg-gray- text-red-800 p-4 shadow-lg">
        <h1
          className="text-9xl font-bold mb-2"
          style={{ fontFamily: "'Skyfont', sans-serif" }}
        >
          DASHBOARD
        </h1>
        <p className="text-3xl">because running the world should look organized.</p>
      </header>

      <div className="relative z-10 min-h-screen p-6 bg-gray-100 bg-opacity-90">
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Weather Section */}
          <div
            className={`col-span-1 bg-white rounded-lg shadow-lg p-6 ${
              activeSection === 'weather' ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => setActiveSection('weather')}
          >
            <h2 className="text-xl font-bold text-red-700 mb-4">Weather</h2>
            <Weather />
          </div>

          {/* Receipt Scanner */}
          <div
            className={`col-span-1 bg-white rounded-lg shadow-lg p-6 ${
              activeSection === 'scanner' ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => setActiveSection('scanner')}
          >
            <h2 className="text-xl font-bold text-red-700 mb-4">Scan Receipts</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {previewUrl && <img src={previewUrl} alt="Receipt Preview" className="mt-4" />}
          </div>
        </div>

        {/* Calendar Section */}
        <div
          id="calendar"
          className={`mb-6 bg-white rounded-lg shadow-lg p-6 ${
            activeSection === 'calendar' ? 'opacity-100' : 'opacity-50'
          }`}
          onClick={() => setActiveSection('calendar')}
        >
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

        {/* Messaging Center */}
        {!showMessagingCenter ? (
          <div
            className="fixed bottom-6 right-6 bg-red-700 text-white rounded-full p-4 shadow-lg cursor-pointer"
            onClick={() => setShowMessagingCenter(true)}
          >
            <FaComments size={24} />
          </div>
        ) : (
          <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold text-red-700 mb-4">Messaging Center</h2>
            <button
              className="absolute top-2 right-2 text-red-700"
              onClick={() => setShowMessagingCenter(false)}
            >
              ✕
            </button>
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
              <button type="submit" className="bg-red-700 text-white p-2 rounded">
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

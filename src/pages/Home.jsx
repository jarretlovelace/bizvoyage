import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './style/Home.css';
import Weather from '../components/Weather';

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
  
  // Chat state management
  const [messages, setMessages] = useState([]); // To store the list of messages
  const [newMessage, setNewMessage] = useState(''); // To track the new message input

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

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleEditEvent = (event) => {
    setNewEvent({
      title: event.title,
      start: event.start.toISOString().split('T')[0],
      end: event.end.toISOString().split('T')[0],
    });
    setEditEvent(event);
  };

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: newMessage }]); // Add new message to state
      setNewMessage(''); // Clear the input after sending
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-center uppercase text-red-900">Dashboard</h1>
      </div>

      {/* Top Section (Weather) */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="col-span-1 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-red-700 mb-4">Weather</h2>
          <Weather />
        </div>
        <div className="col-span-1 flex justify-center items-center relative">
          <div className="animation-container">
            <div className="airplane"></div>
            <div className="clouds"></div>
          </div>
        </div>
      </div>

      {/* Calendar Section (Full width) */}
      <div className="mb-6 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-red-700 mb-4">Calendar</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={handleEditEvent}
        />

        {/* Event Form */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">
            {editEvent ? 'Edit Event' : 'Add New Event'}
          </h3>
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
      <div className="grid grid-cols-2 gap-4">
        {/* Messaging Center */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-red-700 mb-4">Messaging Center</h2>

          {/* Chat Display */}
          <div className="border p-4 h-64 overflow-y-scroll bg-gray-50 mb-4">
            {messages.length === 0 ? (
              <p className="text-gray-500">No messages yet...</p>
            ) : (
              messages.map((message) => (
                <div key={message.id} className="mb-2">
                  <div className="bg-gray-200 p-2 rounded">
                    {message.text}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="border p-2 flex-grow mr-2"
              placeholder="Type a message..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Send
            </button>
          </form>
        </div>

        {/* Scan Receipts */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-red-700 mb-4">Scan Receipts</h2>
          <img
            src="/src/images/ai_image11.jpg"
            alt="Scan Receipts"
            className="col-span-1 flex opacity-50 rounded-lg"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            capture="environment"
            className="mb-4"
          />
          {previewUrl && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Receipt Preview:</h3>
              <img
                src={previewUrl}
                alt="Receipt Preview"
                className="mt-2 border rounded"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

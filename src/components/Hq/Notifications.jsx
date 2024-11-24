import React from "react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "Flight Delay",
      message: "Your flight to NYC has been delayed by 2 hours.",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Booking Confirmed",
      message: "Your hotel reservation at The Grand has been confirmed.",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "Currency Reminder",
      message: "Don't forget to exchange currency for your trip to Japan.",
      time: "1 day ago",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-red-800 mb-4">Notifications</h2>
      <p className="text-gray-600 mb-6">Your business trip intel, minus the drama!</p>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="border-l-4 border-red-800 pl-4 py-2 bg-gray-50 shadow-sm rounded-md"
          >
            <h3 className="text-xl font-semibold text-gray-800">{notification.title}</h3>
            <p className="text-gray-600">{notification.message}</p>
            <span className="text-sm text-gray-400">{notification.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;

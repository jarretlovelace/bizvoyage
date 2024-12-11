import React from 'react';

const Settings = () => {
    return (
        <div 
            className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg"
            style={{ 
                backgroundImage: `url('/images/notifications.jpg')`, // Path from the public folder
                backgroundSize: 'cover', // Ensures the image covers the entire background
                backgroundPosition: 'center', // Centers the image
                height: '100vh', // Ensures it spans the full viewport height
                width: '100vw', // Optional, for full viewport width
            }}
        >
            <h1 className="justify-left text-5xl font-bold mb-4 text-red-700">NOTIFICATIONS</h1>

            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4 mt-6">
                <h2 className="text-lg font-semibold mb-3">Preferences</h2>
                <form className="flex flex-col">
                    <label className="mb-2">Notifications:</label>
                    <select className="p-2 border rounded mb-4">
                        <option>Email</option>
                        <option>SMS</option>
                        <option>Push Notifications</option>
                    </select>

                    <label className="mb-2">Language:</label>
                    <select className="p-2 border rounded mb-4">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                    </select>

                    <button className="bg-gray-700 text-white p-2 rounded hover:bg-red-700">
                        Update Preferences
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Settings;

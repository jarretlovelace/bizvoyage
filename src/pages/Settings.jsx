import React from 'react';

const Settings = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-blue-600">Settings</h1>
            
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-semibold mb-3">Profile</h2>
                <form className="flex flex-col">
                    <label className="mb-2">Name:</label>
                    <input type="text" className="p-2 border rounded mb-4" placeholder="Your Name" />

                    <label className="mb-2">Email:</label>
                    <input type="email" className="p-2 border rounded mb-4" placeholder="Your Email" />

                    <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Save Changes</button>
                </form>
            </div>

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

                    <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Update Preferences</button>
                </form>
            </div>
        </div>
    );
};

export default Settings;

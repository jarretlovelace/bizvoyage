import React, { useState, useEffect } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db, storage } from '../firebase'; // Assume Firebase is set up in firebase.js

function Profile() {
  const [user, setUser] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    company: '',
    photoURL: '',
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        }
        setUser(currentUser);
      }
    };

    fetchUserDetails();
  }, []);

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      const storageRef = ref(storage, `profilePhotos/${user.uid}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      await updateDoc(doc(db, 'users', user.uid), {
        photoURL: downloadURL,
      });
      setProfilePhoto(downloadURL);
      setUploading(false);
    }
  };

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveProfile = async () => {
    await updateDoc(doc(db, 'users', user.uid), userDetails);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Profile</h1>

      <div className="mb-4">
        {profilePhoto || userDetails.photoURL ? (
          <img
            src={profilePhoto || userDetails.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-200 rounded-full flex justify-center items-center">
            <span>No Image</span>
          </div>
        )}

        <input
          type="file"
          onChange={handlePhotoUpload}
          className="mt-2"
          disabled={uploading}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="text"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          disabled
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Company</label>
        <input
          type="text"
          name="company"
          value={userDetails.company}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <button
        onClick={handleSaveProfile}
        className="bg-blue-500 text-white py-2 px-4 rounded"
        disabled={uploading}
      >
        {uploading ? 'Saving...' : 'Save Profile'}
      </button>
    </div>
  );
}

export default Profile;
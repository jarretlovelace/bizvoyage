// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA04VRwQj2eSOb2fcL4zp9uUw4fKF9VN50",
  authDomain: "bizvoyage-e5b22.firebaseapp.com",
  projectId: "bizvoyage-e5b22",
  storageBucket: "bizvoyage-e5b22.appspot.com",
  messagingSenderId: "707536312271",
  appId: "1:707536312271:web:7b9331faf73a307679a4ba",
  measurementId: "G-NEV4P0S5JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
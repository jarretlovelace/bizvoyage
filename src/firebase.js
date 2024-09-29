import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage'; 

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); 

export { auth, db, storage };

export const googleProvider = new GoogleAuthProvider();

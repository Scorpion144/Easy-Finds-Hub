import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas",
  authDomain: "easyfindshub.firebaseapp.com",
  projectId: "easyfindshub",
  storageBucket: "easyfindshub.appspot.com",
  messagingSenderId: "581326886241",
  appId: "1:581326886241:web:c2c0e42bf47eeacbf71dad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
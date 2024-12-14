//firebaseconfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // CORREGIDO
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb_lxBZqOIALporuo2dsWww6HgMvPKXcI",
  authDomain: "quinchaorecicla.firebaseapp.com",
  projectId: "quinchaorecicla",
  storageBucket: "quinchaorecicla.firebasestorage.app",
  messagingSenderId: "530581436799",
  appId: "1:530581436799:web:0ca03e675dc0948af9424a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const authInstance = auth;
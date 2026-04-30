// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC856klZ7ZmZoFbgx4Usf0pwtBfq3uap7A",
  authDomain: "lazystudio-60f8b.firebaseapp.com",
  databaseURL: "https://lazystudio-60f8b-default-rtdb.firebaseio.com",
  projectId: "lazystudio-60f8b",
  storageBucket: "lazystudio-60f8b.firebasestorage.app",
  messagingSenderId: "231033141075",
  appId: "1:231033141075:web:50eb9c56275e2cd0cf93a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

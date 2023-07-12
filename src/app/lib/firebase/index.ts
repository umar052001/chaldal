// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBvKfuxpA6ecz3eOBMfzDr6BxVMHgfTicc",
  authDomain: "chaldal-dbaa5.firebaseapp.com",
  databaseURL: "https://chaldal-dbaa5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chaldal-dbaa5",
  storageBucket: "chaldal-dbaa5.appspot.com",
  messagingSenderId: "763517665848",
  appId: "1:763517665848:web:a7da6316b8435f6e971ccd",
  measurementId: "G-6386Y0VYJY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
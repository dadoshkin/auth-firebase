// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBmVR0s9hKH5gAcuaE48_XMOYy6XknTqPA",
  authDomain: "react-authentication-ea8d3.firebaseapp.com",
  projectId: "react-authentication-ea8d3",
  storageBucket: "react-authentication-ea8d3.appspot.com",
  messagingSenderId: "435217423450",
  appId: "1:435217423450:web:f5bb7ff4c687bce7af4c63",
  measurementId: "G-HETS8LQFZ2"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
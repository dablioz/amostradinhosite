// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn5o6B0u0UMEcZc-TouyR1wZ7MLsGFVWw",
  authDomain: "guia-concursos-f6bc4.firebaseapp.com",
  projectId: "guia-concursos-f6bc4",
  storageBucket: "guia-concursos-f6bc4.firebasestorage.app",
  messagingSenderId: "874554602305",
  appId: "1:874554602305:web:cdf9f635e0663dc4e027c0",
  measurementId: "G-0PYKZ4EK49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
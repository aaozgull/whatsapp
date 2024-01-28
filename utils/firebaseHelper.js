// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB2glEhnRUta07yx6q052m0bdpGI2k6FGs",
    authDomain: "whatsapp-91620.firebaseapp.com",
    databaseURL: "https://whatsapp-91620-default-rtdb.firebaseio.com",
    projectId: "whatsapp-91620",
    storageBucket: "whatsapp-91620.appspot.com",
    messagingSenderId: "869333413561",
    appId: "1:869333413561:web:5636af9ee75b47daf3f568",
    measurementId: "G-PW3G1WDXDG",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBJycrQIskKJT6RUq41CHLE5rZ7LSjP08",
  authDomain: "treinta-7af60.firebaseapp.com",
  projectId: "treinta-7af60",
  storageBucket: "treinta-7af60.appspot.com",
  messagingSenderId: "919336345853",
  appId: "1:919336345853:web:c85640a9501e0e4cab9e94",
  measurementId: "G-0DH03RFD9T"
};

// Initialize Firebase
export function initFirebase() {
  // Initialize Firebase
  if (!(firebase as any).apps.length) {
    (firebase as any).initializeApp(firebaseConfig);
    // firebase.analytics();
    
  }
  return firebase as any;
}

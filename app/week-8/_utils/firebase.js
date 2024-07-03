// _utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBOYYSclV7J7mK_h2eZZ3RHHq1KkV8hzWE",
  authDomain: "cprg306-assignments-96318.firebaseapp.com",
  projectId: "cprg306-assignments-96318",
  storageBucket: "cprg306-assignments-96318.appspot.com",
  messagingSenderId: "114204901532",
  appId: "1:114204901532:web:aa63e3d0a924f82d72ad59",
  measurementId: "G-1G8YD5YSLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

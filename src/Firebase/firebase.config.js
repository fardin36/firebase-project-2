// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3_n3W66SYmDEjqi2JtkdTvFIDJF66x5U",
  authDomain: "fir-project-2-d238c.firebaseapp.com",
  projectId: "fir-project-2-d238c",
  storageBucket: "fir-project-2-d238c.appspot.com",
  messagingSenderId: "229429399874",
  appId: "1:229429399874:web:703e43eaa9c3b84d6d78db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;
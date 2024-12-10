// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK2Jjau9BcxnUlFtki4pmmzPqaNqIQqNE",
  authDomain: "e-commerce-project-8e0be.firebaseapp.com",
  projectId: "e-commerce-project-8e0be",
  storageBucket: "e-commerce-project-8e0be.firebasestorage.app",
  messagingSenderId: "629993188844",
  appId: "1:629993188844:web:8a3184577ee08389f424c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}; 
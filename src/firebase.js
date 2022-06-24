import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIYK4BF_l6_6vZwkmKKXwaptGiMn4qXpA",
  authDomain: "dinder-app-da6cf.firebaseapp.com",
  projectId: "dinder-app-da6cf",
  storageBucket: "dinder-app-da6cf.appspot.com",
  messagingSenderId: "424109467127",
  appId: "1:424109467127:web:0d1362d3b58f4d690fbaf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);